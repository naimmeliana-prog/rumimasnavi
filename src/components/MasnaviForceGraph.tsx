import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as d3 from 'd3';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Search,
  FileText,
  Volume2,
  BookOpen,
  Network,
  Compass,
  Layers
} from 'lucide-react';
import {
  ALL_82_STORIES,
  PHILOSOPHICAL_AXES_NODES,
  FullStoryNode
} from '../data/all82StoriesGraphData';
import { BOOKS_DATA } from '../data/masnaviData';
import {
  playCastilianStoryAudio,
  stopGlobalCastilianAudio
} from '../utils/castilianTtsClient';

type GraphLayoutMode = 'axes' | 'books' | 'radial';
type ThemeKey = 'amor' | 'ego' | 'forma' | 'albedrio' | 'corazon';

interface GraphNode extends d3.SimulationNodeDatum {
  id: string;
  nodeType: 'axis' | 'book' | 'story';
  label: string;
  shortLabel: string;
  bookNumber?: number;
  storyNumber?: number;
  themeKey?: ThemeKey;
  color: string;
  radius: number;
  storyData?: FullStoryNode;
  pdfPage?: number;
}

interface GraphLink extends d3.SimulationLinkDatum<GraphNode> {
  id: string;
  source: string | GraphNode;
  target: string | GraphNode;
  linkType: 'primary-axis' | 'secondary-axis' | 'book-membership' | 'story-crosslink';
}

interface MasnaviForceGraphProps {
  onOpenPdfPage: (page: number) => void;
  onSelectStoryModal: (story: FullStoryNode) => void;
}

const THEME_COLOR_MAP: Record<ThemeKey, string> = {
  amor: '#9A3412', // Terracotta
  ego: '#78350F', // Bronze
  forma: '#1E3A8A', // Deep Lapis
  corazon: '#14532D', // Forest Ink
  albedrio: '#581C87' // Royal Plum
};

export default function MasnaviForceGraph({
  onOpenPdfPage,
  onSelectStoryModal
}: MasnaviForceGraphProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const zoomBehaviorRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(
    null
  );

  const [layoutMode, setLayoutMode] = useState<GraphLayoutMode>('axes');
  const [filterBook, setFilterBook] = useState<number | 'all'>('all');
  const [filterTheme, setFilterTheme] = useState<ThemeKey | 'all'>('all');
  const [showCrossLinks, setShowCrossLinks] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedNodeId, setSelectedNodeId] = useState<string>('b1-prologue');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Build filtered graph nodes & links
  const { nodes, links } = useMemo(() => {
    const graphNodes: GraphNode[] = [];
    const graphLinks: GraphLink[] = [];

    // 1. Add the 5 Philosophical Axis Hub Nodes
    PHILOSOPHICAL_AXES_NODES.forEach((ax) => {
      if (filterTheme === 'all' || filterTheme === ax.themeKey) {
        graphNodes.push({
          id: ax.id,
          nodeType: 'axis',
          label: ax.label,
          shortLabel: ax.shortLabel,
          themeKey: ax.themeKey,
          color: ax.color,
          radius: 22
        });
      }
    });

    // 2. Add the 6 Book Hub Nodes
    BOOKS_DATA.forEach((b) => {
      if (filterBook === 'all' || filterBook === b.number) {
        graphNodes.push({
          id: `book-${b.number}`,
          nodeType: 'book',
          label: `Libro ${b.number}: ${b.titleEs.split('—')[1]?.trim() || ''}`,
          shortLabel: `Libro ${b.number}`,
          bookNumber: b.number,
          color: '#1C1917',
          radius: 17,
          pdfPage: b.pdfStartPage
        });
      }
    });

    // 3. Filter and add the 82 Story Nodes (+ Prologue)
    const activeStories = ALL_82_STORIES.filter((s) => {
      const matchBook = filterBook === 'all' || s.bookNumber === filterBook;
      const matchTheme =
        filterTheme === 'all' ||
        s.themeKey === filterTheme ||
        (showCrossLinks && s.secondaryThemes.includes(filterTheme));
      return matchBook && matchTheme;
    });

    const nodeIdSet = new Set<string>(graphNodes.map((n) => n.id));
    activeStories.forEach((s) => {
      nodeIdSet.add(s.id);
      graphNodes.push({
        id: s.id,
        nodeType: 'story',
        label: s.titleEs,
        shortLabel:
          s.storyNumber === 0
            ? `L${s.bookNumber}·Pról.`
            : `L${s.bookNumber}·H${s.storyNumber}`,
        bookNumber: s.bookNumber,
        storyNumber: s.storyNumber,
        themeKey: s.themeKey,
        color: THEME_COLOR_MAP[s.themeKey],
        radius: s.storyNumber === 0 ? 11 : 8.5,
        storyData: s,
        pdfPage: s.pdfPage
      });
    });

    // 4. Create Links
    activeStories.forEach((s) => {
      const primaryAxisId = `axis-${s.themeKey}`;
      if (nodeIdSet.has(primaryAxisId)) {
        graphLinks.push({
          id: `link-${s.id}-${primaryAxisId}`,
          source: s.id,
          target: primaryAxisId,
          linkType: 'primary-axis'
        });
      }

      const bookNodeId = `book-${s.bookNumber}`;
      if (nodeIdSet.has(bookNodeId)) {
        graphLinks.push({
          id: `link-${s.id}-${bookNodeId}`,
          source: s.id,
          target: bookNodeId,
          linkType: 'book-membership'
        });
      }

      if (showCrossLinks) {
        s.secondaryThemes.forEach((secTheme) => {
          const secAxisId = `axis-${secTheme}`;
          if (nodeIdSet.has(secAxisId)) {
            graphLinks.push({
              id: `link-sec-${s.id}-${secAxisId}`,
              source: s.id,
              target: secAxisId,
              linkType: 'secondary-axis'
            });
          }
        });

        s.relatedStoryIds.forEach((targetStoryId) => {
          if (nodeIdSet.has(targetStoryId) && s.id < targetStoryId) {
            graphLinks.push({
              id: `link-cross-${s.id}-${targetStoryId}`,
              source: s.id,
              target: targetStoryId,
              linkType: 'story-crosslink'
            });
          }
        });
      }
    });

    return { nodes: graphNodes, links: graphLinks };
  }, [filterBook, filterTheme, showCrossLinks]);

  // Compute adjacency map for hover/selection highlighting
  const adjacencyMap = useMemo(() => {
    const map = new Map<string, Set<string>>();
    nodes.forEach((n) => map.set(n.id, new Set([n.id])));
    links.forEach((l) => {
      const sId = typeof l.source === 'string' ? l.source : l.source.id;
      const tId = typeof l.target === 'string' ? l.target : l.target.id;
      map.get(sId)?.add(tId);
      map.get(tId)?.add(sId);
    });
    return map;
  }, [nodes, links]);

  const selectedNode = useMemo(() => {
    return (
      nodes.find((n) => n.id === selectedNodeId) ||
      nodes.find((n) => n.nodeType === 'story') ||
      nodes[0]
    );
  }, [nodes, selectedNodeId]);

  // Render D3 Force-Directed / Radial Graph
  useEffect(() => {
    const svgEl = svgRef.current;
    if (!svgEl) return;

    const width = 880;
    const height = 640;
    const centerX = width / 2;
    const centerY = height / 2;

    const svg = d3.select(svgEl);
    svg.selectAll('*').remove();

    // Subtle radial background guide circles
    const gRoot = svg.append('g').attr('class', 'graph-root');

    const guideRadii =
      layoutMode === 'radial' ? [110, 200, 275] : [140, 250];
    gRoot
      .append('g')
      .attr('class', 'guides')
      .selectAll('circle')
      .data(guideRadii)
      .join('circle')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', (d) => d)
      .attr('fill', 'none')
      .attr('stroke', '#E7E2D8')
      .attr('stroke-dasharray', '3,5')
      .attr('stroke-width', 1);

    // Clone nodes & links so D3 mutation doesn't corrupt React state
    const simNodes: GraphNode[] = nodes.map((n) => ({ ...n }));
    const simLinks: GraphLink[] = links.map((l) => ({ ...l }));

    // Position anchors for axes and books
    const axisAngles: Record<ThemeKey, number> = {
      amor: -Math.PI / 2,
      ego: -Math.PI / 2 + (2 * Math.PI) / 5,
      forma: -Math.PI / 2 + (4 * Math.PI) / 5,
      corazon: -Math.PI / 2 + (6 * Math.PI) / 5,
      albedrio: -Math.PI / 2 + (8 * Math.PI) / 5
    };

    const getBookAngle = (bookNum: number) =>
      -Math.PI / 2 + ((bookNum - 1) * 2 * Math.PI) / 6;

    // Configure D3 Simulation Forces based on layoutMode
    const simulation = d3
      .forceSimulation<GraphNode>(simNodes)
      .force(
        'link',
        d3
          .forceLink<GraphNode, GraphLink>(simLinks)
          .id((d) => d.id)
          .distance((l) => {
            if (layoutMode === 'axes') {
              if (l.linkType === 'primary-axis') return 75;
              if (l.linkType === 'book-membership') return 145;
              return 130;
            }
            if (layoutMode === 'books') {
              if (l.linkType === 'book-membership') return 70;
              if (l.linkType === 'primary-axis') return 150;
              return 135;
            }
            return 100;
          })
          .strength((l) => {
            if (layoutMode === 'axes') {
              return l.linkType === 'primary-axis'
                ? 0.65
                : l.linkType === 'book-membership'
                ? 0.15
                : 0.08;
            }
            if (layoutMode === 'books') {
              return l.linkType === 'book-membership'
                ? 0.7
                : l.linkType === 'primary-axis'
                ? 0.18
                : 0.08;
            }
            return 0.15;
          })
      )
      .force(
        'charge',
        d3.forceManyBody<GraphNode>().strength((d) => {
          if (d.nodeType === 'axis') return -380;
          if (d.nodeType === 'book') return -300;
          return -85;
        })
      )
      .force(
        'collide',
        d3
          .forceCollide<GraphNode>()
          .radius((d) => d.radius + (d.nodeType === 'story' ? 7 : 16))
          .iterations(2)
      );

    if (layoutMode === 'radial') {
      simulation
        .force(
          'r',
          d3
            .forceRadial<GraphNode>(
              (d) => {
                if (d.nodeType === 'axis') return 110;
                if (d.nodeType === 'book') return 200;
                return 275;
              },
              centerX,
              centerY
            )
            .strength(0.92)
        )
        .force(
          'x',
          d3
            .forceX<GraphNode>((d) => {
              if (d.nodeType === 'axis' && d.themeKey) {
                return centerX + Math.cos(axisAngles[d.themeKey]) * 110;
              }
              if (d.nodeType === 'book' && d.bookNumber) {
                return centerX + Math.cos(getBookAngle(d.bookNumber)) * 200;
              }
              if (d.nodeType === 'story' && d.bookNumber) {
                const baseAngle = getBookAngle(d.bookNumber);
                const offset = ((d.storyNumber || 0) - 8) * 0.055;
                return centerX + Math.cos(baseAngle + offset) * 275;
              }
              return centerX;
            })
            .strength(0.55)
        )
        .force(
          'y',
          d3
            .forceY<GraphNode>((d) => {
              if (d.nodeType === 'axis' && d.themeKey) {
                return centerY + Math.sin(axisAngles[d.themeKey]) * 110;
              }
              if (d.nodeType === 'book' && d.bookNumber) {
                return centerY + Math.sin(getBookAngle(d.bookNumber)) * 200;
              }
              if (d.nodeType === 'story' && d.bookNumber) {
                const baseAngle = getBookAngle(d.bookNumber);
                const offset = ((d.storyNumber || 0) - 8) * 0.055;
                return centerY + Math.sin(baseAngle + offset) * 275;
              }
              return centerY;
            })
            .strength(0.55)
        );
    } else if (layoutMode === 'axes') {
      simulation
        .force(
          'x',
          d3
            .forceX<GraphNode>((d) => {
              if (d.nodeType === 'axis' && d.themeKey) {
                return centerX + Math.cos(axisAngles[d.themeKey]) * 175;
              }
              if (d.nodeType === 'book' && d.bookNumber) {
                return centerX + Math.cos(getBookAngle(d.bookNumber)) * 270;
              }
              if (d.themeKey) {
                return centerX + Math.cos(axisAngles[d.themeKey]) * 165;
              }
              return centerX;
            })
            .strength((d) => (d.nodeType === 'axis' ? 0.85 : 0.25))
        )
        .force(
          'y',
          d3
            .forceY<GraphNode>((d) => {
              if (d.nodeType === 'axis' && d.themeKey) {
                return centerY + Math.sin(axisAngles[d.themeKey]) * 175;
              }
              if (d.nodeType === 'book' && d.bookNumber) {
                return centerY + Math.sin(getBookAngle(d.bookNumber)) * 270;
              }
              if (d.themeKey) {
                return centerY + Math.sin(axisAngles[d.themeKey]) * 165;
              }
              return centerY;
            })
            .strength((d) => (d.nodeType === 'axis' ? 0.85 : 0.25))
        );
    } else {
      // layoutMode === 'books'
      simulation
        .force(
          'x',
          d3
            .forceX<GraphNode>((d) => {
              if (d.nodeType === 'book' && d.bookNumber) {
                return centerX + Math.cos(getBookAngle(d.bookNumber)) * 185;
              }
              if (d.nodeType === 'axis' && d.themeKey) {
                return centerX + Math.cos(axisAngles[d.themeKey]) * 75;
              }
              if (d.bookNumber) {
                return centerX + Math.cos(getBookAngle(d.bookNumber)) * 185;
              }
              return centerX;
            })
            .strength((d) => (d.nodeType === 'book' ? 0.85 : 0.3))
        )
        .force(
          'y',
          d3
            .forceY<GraphNode>((d) => {
              if (d.nodeType === 'book' && d.bookNumber) {
                return centerY + Math.sin(getBookAngle(d.bookNumber)) * 185;
              }
              if (d.nodeType === 'axis' && d.themeKey) {
                return centerY + Math.sin(axisAngles[d.themeKey]) * 75;
              }
              if (d.bookNumber) {
                return centerY + Math.sin(getBookAngle(d.bookNumber)) * 185;
              }
              return centerY;
            })
            .strength((d) => (d.nodeType === 'book' ? 0.85 : 0.3))
        );
    }

    // Draw Links
    const linkGroup = gRoot.append('g').attr('class', 'links');
    const linkElements = linkGroup
      .selectAll('line')
      .data(simLinks)
      .join('line')
      .attr('stroke', (d) => {
        if (d.linkType === 'primary-axis') return '#A8A29E';
        if (d.linkType === 'book-membership') return '#D6D3D1';
        if (d.linkType === 'story-crosslink') return '#9A3412';
        return '#E7E5E4';
      })
      .attr('stroke-width', (d) => {
        if (d.linkType === 'primary-axis') return 1.3;
        if (d.linkType === 'book-membership') return 1;
        return 0.8;
      })
      .attr('stroke-dasharray', (d) =>
        d.linkType === 'secondary-axis' || d.linkType === 'story-crosslink'
          ? '3,3'
          : null
      )
      .attr('stroke-opacity', 0.55);

    // Draw Nodes
    const nodeGroup = gRoot.append('g').attr('class', 'nodes');
    const nodeElements = nodeGroup
      .selectAll<SVGGElement, GraphNode>('g.node-item')
      .data(simNodes, (d) => d.id)
      .join('g')
      .attr('class', 'node-item')
      .style('cursor', 'pointer')
      .on('click', (_event, d) => {
        setSelectedNodeId(d.id);
      })
      .on('mouseenter', (_event, d) => {
        setHoveredNodeId(d.id);
      })
      .on('mouseleave', () => {
        setHoveredNodeId(null);
      });

    // Enable D3 Dragging
    const dragBehavior = d3
      .drag<SVGGElement, GraphNode>()
      .on('start', (event, d) => {
        if (!event.active) simulation.alphaTarget(0.25).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on('drag', (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });

    nodeElements.call(dragBehavior);

    // Node Circles / Shapes
    nodeElements
      .append('circle')
      .attr('class', 'node-circle')
      .attr('r', (d) => d.radius)
      .attr('fill', (d) => d.color)
      .attr('stroke', (d) => (d.nodeType === 'axis' ? '#FBF9F5' : '#FFFFFF'))
      .attr('stroke-width', (d) => (d.nodeType === 'story' ? 1.5 : 2.5));

    // Node Labels
    nodeElements
      .append('text')
      .attr('class', 'node-label')
      .attr('dy', (d) =>
        d.nodeType === 'axis'
          ? d.radius + 13
          : d.nodeType === 'book'
          ? d.radius + 12
          : -d.radius - 4
      )
      .attr('text-anchor', 'middle')
      .attr('font-family', (d) =>
        d.nodeType === 'story'
          ? 'JetBrains Mono, monospace'
          : 'Plus Jakarta Sans, sans-serif'
      )
      .attr('font-size', (d) =>
        d.nodeType === 'axis' ? 11 : d.nodeType === 'book' ? 10.5 : 8.5
      )
      .attr('font-weight', (d) => (d.nodeType === 'story' ? 500 : 700))
      .attr('fill', '#1C1917')
      .attr('paint-order', 'stroke')
      .attr('stroke', '#FBF9F5')
      .attr('stroke-width', 3)
      .attr('stroke-linecap', 'round')
      .attr('stroke-linejoin', 'round')
      .text((d) => d.shortLabel);

    // Simulation Tick Handler
    simulation.on('tick', () => {
      linkElements
        .attr('x1', (d) => (d.source as GraphNode).x || 0)
        .attr('y1', (d) => (d.source as GraphNode).y || 0)
        .attr('x2', (d) => (d.target as GraphNode).x || 0)
        .attr('y2', (d) => (d.target as GraphNode).y || 0);

      nodeElements.attr('transform', (d) => `translate(${d.x || 0},${d.y || 0})`);
    });

    // D3 Zoom & Pan Behavior
    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.45, 3.5])
      .on('zoom', (event) => {
        gRoot.attr('transform', event.transform.toString());
      });

    svg.call(zoom);
    zoomBehaviorRef.current = zoom;

    return () => {
      simulation.stop();
    };
  }, [nodes, links, layoutMode]);

  // Update visual highlighting on hover, selection, or search query without restarting simulation
  useEffect(() => {
    const svgEl = svgRef.current;
    if (!svgEl) return;
    const svg = d3.select(svgEl);

    const focusId = hoveredNodeId || selectedNodeId;
    const connectedSet = focusId ? adjacencyMap.get(focusId) : null;
    const q = searchQuery.trim().toLowerCase();

    svg
      .selectAll<SVGGElement, GraphNode>('g.node-item')
      .transition()
      .duration(150)
      .style('opacity', (d) => {
        if (q) {
          const matchesSearch =
            d.label.toLowerCase().includes(q) ||
            d.shortLabel.toLowerCase().includes(q) ||
            d.storyData?.synopsis.toLowerCase().includes(q) ||
            d.storyData?.keyFigures.some((f) => f.toLowerCase().includes(q));
          return matchesSearch ? 1 : 0.15;
        }
        if (!hoveredNodeId) return 1;
        return connectedSet?.has(d.id) ? 1 : 0.2;
      });

    svg
      .selectAll<SVGCircleElement, GraphNode>('circle.node-circle')
      .attr('stroke', (d) => {
        if (d.id === selectedNodeId) return '#F59E0B';
        if (d.id === hoveredNodeId) return '#1C1917';
        return '#FFFFFF';
      })
      .attr('stroke-width', (d) => {
        if (d.id === selectedNodeId) return 3.5;
        return d.nodeType === 'story' ? 1.5 : 2.5;
      });

    svg
      .selectAll<SVGLineElement, GraphLink>('g.links line')
      .transition()
      .duration(150)
      .attr('stroke-opacity', (l) => {
        const sId = typeof l.source === 'string' ? l.source : l.source.id;
        const tId = typeof l.target === 'string' ? l.target : l.target.id;
        if (hoveredNodeId) {
          return sId === hoveredNodeId || tId === hoveredNodeId ? 0.95 : 0.08;
        }
        if (sId === selectedNodeId || tId === selectedNodeId) return 0.9;
        return 0.4;
      })
      .attr('stroke-width', (l) => {
        const sId = typeof l.source === 'string' ? l.source : l.source.id;
        const tId = typeof l.target === 'string' ? l.target : l.target.id;
        if (sId === (hoveredNodeId || selectedNodeId) || tId === (hoveredNodeId || selectedNodeId)) {
          return 2.2;
        }
        return l.linkType === 'primary-axis' ? 1.2 : 0.8;
      });
  }, [hoveredNodeId, selectedNodeId, searchQuery, adjacencyMap]);

  const handleZoom = (factor: number) => {
    if (!svgRef.current || !zoomBehaviorRef.current) return;
    d3.select(svgRef.current)
      .transition()
      .duration(200)
      .call(zoomBehaviorRef.current.scaleBy, factor);
  };

  const handleResetZoom = () => {
    if (!svgRef.current || !zoomBehaviorRef.current) return;
    d3.select(svgRef.current)
      .transition()
      .duration(250)
      .call(zoomBehaviorRef.current.transform, d3.zoomIdentity);
  };

  const reciteStory = (story: FullStoryNode) => {
    if (isSpeaking) {
      stopGlobalCastilianAudio();
      setIsSpeaking(false);
      return;
    }

    const script = `Libro ${story.bookNumber}, ${
      story.storyNumber === 0 ? 'Prólogo' : `Historia ${story.storyNumber}`
    }: ${story.titleEs}. ... ${story.synopsis} ... Enseñanza mística: ${
      story.mysticalMoral
    } ... Verso de Rumi: ${story.keyQuoteEs}`;

    setIsSpeaking(true);
    playCastilianStoryAudio(
      `story-${story.id}`,
      script,
      () => setIsSpeaking(true),
      () => setIsSpeaking(false),
      () => setIsSpeaking(false)
    );
  };

  return (
    <div className="bg-white border border-stone-200">
      {/* Top Controls Bar */}
      <div className="bg-[#F3EFE6] border-b border-stone-200 p-4 flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-4">
        {/* Layout Selector */}
        <div className="flex flex-wrap items-center gap-1 bg-[#EBE6DF] p-1 rounded">
          <button
            onClick={() => setLayoutMode('axes')}
            className={`px-3 py-1.5 text-xs font-medium rounded flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
              layoutMode === 'axes'
                ? 'bg-[#1C1917] text-[#FBF9F5]'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Constelación por Ejes Filosóficos</span>
          </button>
          <button
            onClick={() => setLayoutMode('books')}
            className={`px-3 py-1.5 text-xs font-medium rounded flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
              layoutMode === 'books'
                ? 'bg-[#1C1917] text-[#FBF9F5]'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Agrupación por los 6 Libros</span>
          </button>
          <button
            onClick={() => setLayoutMode('radial')}
            className={`px-3 py-1.5 text-xs font-medium rounded flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
              layoutMode === 'radial'
                ? 'bg-[#1C1917] text-[#FBF9F5]'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            <Network className="w-3.5 h-3.5" />
            <span>Mandala Concéntrico Sufí</span>
          </button>
        </div>

        {/* Search & Book Filter */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Resaltar relato o personaje..."
              className="w-full pl-8 pr-3 py-1.5 bg-white border border-stone-300 rounded text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#78350F]"
            />
          </div>

          <select
            value={filterBook}
            onChange={(e) =>
              setFilterBook(
                e.target.value === 'all' ? 'all' : Number(e.target.value)
              )
            }
            className="px-3 py-1.5 bg-white border border-stone-300 rounded text-xs text-stone-800 focus:outline-none focus:border-[#78350F]"
            aria-label="Filtrar por libro"
          >
            <option value="all">Todos los Libros (82 relatos)</option>
            {[1, 2, 3, 4, 5, 6].map((b) => (
              <option key={b} value={b}>
                Solo Libro {b}
              </option>
            ))}
          </select>

          <label className="flex items-center gap-1.5 text-xs text-stone-700 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={showCrossLinks}
              onChange={(e) => setShowCrossLinks(e.target.checked)}
              className="accent-[#78350F]"
            />
            <span>Enlaces secundarios</span>
          </label>
        </div>
      </div>

      {/* Color Legend & Philosophical Axis Filter Bar */}
      <div className="px-4 py-2.5 bg-[#FBF9F5] border-b border-stone-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] uppercase tracking-wider text-stone-500 mr-1">
            Filtrar Eje Filosófico:
          </span>
          <button
            onClick={() => setFilterTheme('all')}
            className={`px-2.5 py-1 text-xs rounded border transition-colors cursor-pointer ${
              filterTheme === 'all'
                ? 'bg-stone-900 text-white border-stone-900 font-medium'
                : 'bg-white text-stone-700 border-stone-300 hover:border-stone-500'
            }`}
          >
            Todos los Ejes (5)
          </button>
          {PHILOSOPHICAL_AXES_NODES.map((ax) => (
            <button
              key={ax.id}
              onClick={() =>
                setFilterTheme(
                  filterTheme === ax.themeKey ? 'all' : ax.themeKey
                )
              }
              className={`px-2.5 py-1 text-xs rounded border transition-colors flex items-center gap-1.5 cursor-pointer ${
                filterTheme === ax.themeKey
                  ? 'bg-stone-900 text-white border-stone-900 font-medium'
                  : 'bg-white text-stone-700 border-stone-300 hover:border-stone-500'
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full inline-block shrink-0"
                style={{ backgroundColor: ax.color }}
              />
              <span>{ax.shortLabel}</span>
            </button>
          ))}
        </div>

        <div className="text-xs font-mono-tabular text-stone-500">
          Nodos activos: {nodes.length} · Conexiones: {links.length}
        </div>
      </div>

      {/* Main Split View: D3 SVG Canvas (Left 7 cols) + Inspector Panel (Right 5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left: Interactive D3 Canvas */}
        <div className="lg:col-span-7 xl:col-span-8 relative bg-[#FBF9F5] border-b lg:border-b-0 lg:border-r border-stone-200 min-h-[520px] flex items-center justify-center overflow-hidden">
          <svg
            ref={svgRef}
            viewBox="0 0 880 640"
            className="w-full h-[540px] lg:h-[640px] select-none"
          />

          {/* Floating Zoom Controls */}
          <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/95 border border-stone-300 p-1 rounded shadow-xs">
            <button
              onClick={() => handleZoom(1.25)}
              className="p-1.5 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded cursor-pointer"
              title="Acercar"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleZoom(0.8)}
              className="p-1.5 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded cursor-pointer"
              title="Alejar"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              className="p-1.5 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded cursor-pointer"
              title="Restablecer vista"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          <div className="absolute top-3 left-4 pointer-events-none text-[11px] text-stone-500 bg-[#FBF9F5]/85 px-2.5 py-1 rounded border border-stone-200">
            Arrastra cualquier nodo para reorganizar la red · Usa la rueda para hacer zoom · Haz clic en un nodo para inspeccionarlo
          </div>
        </div>

        {/* Right: Curatorial Node Inspector Panel */}
        <div className="lg:col-span-5 xl:col-span-4 p-6 lg:p-8 flex flex-col justify-between bg-white">
          {selectedNode?.nodeType === 'story' && selectedNode.storyData ? (
            <>
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-stone-200 mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono-tabular text-stone-500">
                    <span>LIBRO {selectedNode.storyData.bookNumber}</span>
                    <span aria-hidden="true">·</span>
                    <span>
                      {selectedNode.storyData.storyNumber === 0
                        ? 'PRÓLOGO'
                        : `HISTORIA ${selectedNode.storyData.storyNumber}`}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>PÁG. {selectedNode.storyData.pdfPage}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-display font-semibold text-stone-900 leading-snug">
                  {selectedNode.storyData.titleEs}
                </h3>
                <p className="text-xs text-stone-500 italic mt-0.5 mb-4">
                  {selectedNode.storyData.titleEn}
                </p>

                <div className="mb-4">
                  <div className="text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                    Eje Filosófico Principal
                  </div>
                  <div className="text-xs font-semibold text-[#78350F]">
                    {selectedNode.storyData.themeLabel}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs uppercase tracking-widest text-stone-500 mb-1">
                    Sinopsis de la Parábola
                  </h4>
                  <p className="font-prose text-sm text-stone-700 leading-relaxed">
                    {selectedNode.storyData.synopsis}
                  </p>
                </div>

                <div className="bg-[#F3EFE6] border border-stone-200 p-3.5 mb-4">
                  <h4 className="text-xs uppercase tracking-widest text-[#78350F] mb-1">
                    Sentido Esotérico (Ma&apos;nā)
                  </h4>
                  <p className="font-prose text-xs text-stone-800 leading-relaxed">
                    {selectedNode.storyData.mysticalMoral}
                  </p>
                </div>

                <blockquote className="font-display italic text-base text-stone-900 border-y border-stone-200 py-3 mb-4">
                  &ldquo;{selectedNode.storyData.keyQuoteEs}&rdquo;
                </blockquote>

                {/* Cross-linked stories in the graph */}
                {selectedNode.storyData.relatedStoryIds.length > 0 && (
                  <div className="mb-4">
                    <div className="text-[11px] uppercase tracking-wider text-stone-400 mb-2">
                      Relatos Conectados Temáticamente:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedNode.storyData.relatedStoryIds.map((relId) => {
                        const relStory = ALL_82_STORIES.find(
                          (s) => s.id === relId
                        );
                        if (!relStory) return null;
                        return (
                          <button
                            key={relId}
                            onClick={() => setSelectedNodeId(relId)}
                            className="px-2.5 py-1 text-xs bg-[#FBF9F5] hover:bg-[#F3EFE6] border border-stone-300 rounded text-stone-800 transition-colors cursor-pointer text-left"
                          >
                            L{relStory.bookNumber}·H{relStory.storyNumber}:{' '}
                            {relStory.titleEs.slice(0, 28)}...
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-stone-200 flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() =>
                      onOpenPdfPage(selectedNode.storyData!.pdfPage)
                    }
                    className="px-3 py-2 text-xs font-medium bg-[#1C1917] text-white hover:bg-[#78350F] rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Abrir PDF (Pág. {selectedNode.storyData.pdfPage})</span>
                  </button>
                  <button
                    onClick={() => reciteStory(selectedNode.storyData!)}
                    className="px-3 py-2 text-xs font-medium bg-[#78350F] text-white hover:bg-stone-900 rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{isSpeaking ? 'Detener Voz' : 'Escuchar Relato'}</span>
                  </button>
                </div>
                <button
                  onClick={() => onSelectStoryModal(selectedNode.storyData!)}
                  className="w-full px-3 py-2 text-xs font-medium border border-stone-300 hover:border-stone-800 text-stone-800 rounded flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Ver Ficha Bilingüe Completa</span>
                </button>
              </div>
            </>
          ) : selectedNode?.nodeType === 'axis' ? (
            <div>
              <div className="text-xs uppercase tracking-widest text-[#78350F] mb-1">
                Eje Filosófico Sufí
              </div>
              <h3 className="text-2xl font-display font-semibold text-stone-900 mb-3">
                {selectedNode.label}
              </h3>
              <p className="font-prose text-sm text-stone-700 leading-relaxed mb-6">
                {
                  PHILOSOPHICAL_AXES_NODES.find((a) => a.id === selectedNode.id)
                    ?.description
                }
              </p>
              <div className="text-xs uppercase tracking-wider text-stone-500 mb-2">
                Relatos Gobernados por este Eje:
              </div>
              <div className="max-h-[340px] overflow-y-auto divide-y divide-stone-200 border-t border-stone-200">
                {ALL_82_STORIES.filter(
                  (s) => s.themeKey === selectedNode.themeKey
                ).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedNodeId(s.id)}
                    className="w-full py-2 text-left text-xs hover:text-[#78350F] flex items-center justify-between gap-2 cursor-pointer"
                  >
                    <span className="truncate font-medium">
                      L{s.bookNumber}·H{s.storyNumber}: {s.titleEs}
                    </span>
                    <span className="font-mono-tabular text-stone-400 shrink-0">
                      p.{s.pdfPage}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : selectedNode?.nodeType === 'book' ? (
            <div>
              <div className="text-xs uppercase tracking-widest text-[#78350F] mb-1">
                Volumen del Masnavi
              </div>
              <h3 className="text-2xl font-display font-semibold text-stone-900 mb-2">
                {selectedNode.label}
              </h3>
              <p className="font-prose text-xs text-stone-600 leading-relaxed mb-4">
                {
                  BOOKS_DATA.find((b) => b.number === selectedNode.bookNumber)
                    ?.coreThesis
                }
              </p>
              <div className="text-xs uppercase tracking-wider text-stone-500 mb-2">
                Historias de este Libro (Haz clic para inspeccionar):
              </div>
              <div className="max-h-[320px] overflow-y-auto divide-y divide-stone-200 border-t border-stone-200">
                {ALL_82_STORIES.filter(
                  (s) => s.bookNumber === selectedNode.bookNumber
                ).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedNodeId(s.id)}
                    className="w-full py-2 text-left text-xs hover:text-[#78350F] flex items-center justify-between gap-2 cursor-pointer"
                  >
                    <span className="truncate font-medium">
                      {s.storyNumber === 0 ? 'Prólogo' : `Historia ${s.storyNumber}`}:{' '}
                      {s.titleEs}
                    </span>
                    <span className="font-mono-tabular text-stone-400 shrink-0">
                      p.{s.pdfPage}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
