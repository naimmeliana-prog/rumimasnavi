import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  FileText,
  ArrowUpRight,
  ChevronRight,
  Compass,
  X,
  Volume2,
  Headphones,
  Users,
  Layers,
  GitBranch,
  Network
} from 'lucide-react';
import {
  WORK_METADATA,
  EXECUTIVE_OVERVIEW,
  BOOKS_DATA,
  PHILOSOPHICAL_PILLARS,
  StoryItem
} from './data/masnaviData';
import {
  THEMES_AND_MOTIFS_ANALYSIS,
  MAJOR_CHARACTERS_ANALYSIS,
  PLOT_STRUCTURE_ANALYSIS
} from './data/literaryAnalysisData';
import { ALL_82_STORIES } from './data/all82StoriesGraphData';
import {
  playCastilianStoryAudio,
  stopGlobalCastilianAudio
} from './utils/castilianTtsClient';
import CanvasPdfViewer from './components/CanvasPdfViewer';
import PoeticAudiobookPlayer from './components/PoeticAudiobookPlayer';
import MasnaviForceGraph from './components/MasnaviForceGraph';

type ThemeFilter = 'all' | 'amor' | 'ego' | 'forma' | 'albedrio' | 'corazon';
type DeepAnalysisTab = 'temas' | 'personajes' | 'trama' | 'pilares';

export default function App() {
  const [selectedBook, setSelectedBook] = useState<number>(1);
  const [storyBookFilter, setStoryBookFilter] = useState<number | 'all'>('all');
  const [themeFilter, setThemeFilter] = useState<ThemeFilter>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeStoryModal, setActiveStoryModal] = useState<StoryItem | null>(null);
  const [pdfViewerOpen, setPdfViewerOpen] = useState<boolean>(false);
  const [pdfPage, setPdfPage] = useState<number>(1);
  const [analysisTab, setAnalysisTab] = useState<DeepAnalysisTab>('temas');
  const [modalSpeaking, setModalSpeaking] = useState<boolean>(false);

  const openPdfAtPage = (page: number) => {
    setPdfPage(page);
    setPdfViewerOpen(true);
  };

  const currentBook = useMemo(
    () => BOOKS_DATA.find((b) => b.number === selectedBook) || BOOKS_DATA[0],
    [selectedBook]
  );

  const filteredStories = useMemo(() => {
    return ALL_82_STORIES.filter((story) => {
      const matchesBook =
        storyBookFilter === 'all' || story.bookNumber === storyBookFilter;
      const matchesTheme =
        themeFilter === 'all' ||
        story.themeKey === themeFilter ||
        story.secondaryThemes.includes(themeFilter);
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        story.titleEs.toLowerCase().includes(q) ||
        story.titleEn.toLowerCase().includes(q) ||
        story.synopsis.toLowerCase().includes(q) ||
        story.mysticalMoral.toLowerCase().includes(q) ||
        story.keyFigures.some((f) => f.toLowerCase().includes(q));
      return matchesBook && matchesTheme && matchesQuery;
    });
  }, [storyBookFilter, themeFilter, searchQuery]);

  const reciteStoryInModal = (story: StoryItem) => {
    if (modalSpeaking) {
      stopGlobalCastilianAudio();
      setModalSpeaking(false);
      return;
    }

    const script = `${story.titleEs}. ... ${story.synopsis} ... Enseñanza mística: ${story.mysticalMoral} ... Verso de Rumi: ${story.keyQuoteEs}`;
    setModalSpeaking(true);
    playCastilianStoryAudio(
      `modal-story-${story.id}`,
      script,
      () => setModalSpeaking(true),
      () => setModalSpeaking(false),
      () => setModalSpeaking(false)
    );
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1C1917] flex flex-col">
      {/* Top Bar Contract: 3 zones separated by gap-8 */}
      <header className="sticky top-0 z-30 bg-[#FBF9F5]/95 backdrop-blur-sm border-b border-stone-200 px-6 lg:px-12 py-4 flex items-center justify-between gap-8">
        <a
          href="#top"
          className="text-xl font-display font-semibold tracking-tight text-stone-900 whitespace-nowrap shrink-0"
        >
          Masnavi-i Ma&apos;navi
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a
            href="#mapa-d3"
            className="hover:text-stone-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Mapa de Relaciones D3
          </a>
          <a
            href="#audiolibro"
            className="hover:text-stone-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Audiolibro Poético
          </a>
          <a
            href="#analisis-literario"
            className="hover:text-stone-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Temas y Personajes
          </a>
          <a
            href="#libros"
            className="hover:text-stone-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Los Seis Libros
          </a>
          <a
            href="#parabolas"
            className="hover:text-stone-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Los 82 Relatos
          </a>
        </nav>

        <div className="flex items-center shrink-0">
          <button
            onClick={() => openPdfAtPage(1)}
            className="px-4 py-2 text-xs font-medium text-[#FBF9F5] bg-[#1C1917] hover:bg-[#78350F] rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Abrir Manuscrito PDF
          </button>
        </div>
      </header>

      {/* Main Content Container */}
      <main id="top" className="flex-1 max-w-[1280px] w-full mx-auto px-6 lg:px-12">
        {/* Hero / Curatorial Marquee */}
        <section className="py-12 lg:py-16 border-b border-stone-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Column: Editorial Lead */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-stone-500 mb-4">
                  <span>Estudio Crítico, Grafo D3.js y Audiolibro Poético</span>
                  <span aria-hidden="true">·</span>
                  <span>Jalalu-&apos;d-Din Rumi (1207–1273)</span>
                  <span aria-hidden="true">·</span>
                  <span>Traducción de E. H. Whinfield (1898)</span>
                </div>

                <h1
                  className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-semibold text-stone-900 leading-[1.08] tracking-tight mb-6"
                  style={{ textWrap: 'balance' }}
                >
                  Masnavi-i Ma&apos;navi: El Océano de los Pareados Espirituales
                </h1>

                <p className="font-prose text-base lg:text-lg text-stone-700 leading-relaxed max-w-2xl mb-6 first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#78350F]">
                  {EXECUTIVE_OVERVIEW.leadParagraph}
                </p>

                <p className="font-prose text-base text-stone-600 leading-relaxed max-w-2xl">
                  {EXECUTIVE_OVERVIEW.architectureParagraph}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-stone-200 flex flex-wrap items-center gap-4">
                <a
                  href="#mapa-d3"
                  className="px-5 py-2.5 text-sm font-medium bg-[#78350F] text-[#FBF9F5] hover:bg-stone-900 rounded transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
                >
                  <Network className="w-4 h-4" />
                  <span>Explorar Mapa Interactivo D3 (82 Relatos)</span>
                </a>
                <a
                  href="#audiolibro"
                  className="px-5 py-2.5 text-sm font-medium bg-[#1C1917] text-[#FBF9F5] hover:bg-[#78350F] rounded transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
                >
                  <Headphones className="w-4 h-4" />
                  <span>Escuchar Audiolibro Poético</span>
                </a>
                <button
                  onClick={() => openPdfAtPage(5)}
                  className="px-5 py-2.5 text-sm font-medium border border-stone-300 text-stone-800 hover:border-stone-900 rounded transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#78350F]" />
                  <span>Ver PDF en Lienzo (Pág. 5)</span>
                </button>
              </div>
            </div>

            {/* Right Column: Archival Catalog Card */}
            <div className="lg:col-span-4 bg-[#F3EFE6] border border-stone-200 p-6 lg:p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-stone-500 pb-3 border-b border-stone-300 mb-5">
                  Ficha Catalográfica de la Edición
                </div>

                <dl className="space-y-4 text-sm">
                  <div className="pb-3 border-b border-stone-200/80">
                    <dt className="text-xs text-stone-500 uppercase tracking-wider">
                      Título Original Persa
                    </dt>
                    <dd className="font-prose font-medium text-stone-900 mt-0.5">
                      Mathnawī-i Ma&apos;nawī (مثنوی معنوی)
                    </dd>
                  </div>
                  <div className="pb-3 border-b border-stone-200/80">
                    <dt className="text-xs text-stone-500 uppercase tracking-wider">
                      Autoría e Inspiración
                    </dt>
                    <dd className="font-prose text-stone-800 mt-0.5">
                      Mawlānā Jalālu-&apos;d-Dīn Rūmī · Inspirado por Shams de Tabriz y dedicado a Husamu-&apos;d-Din
                    </dd>
                  </div>
                  <div className="pb-3 border-b border-stone-200/80">
                    <dt className="text-xs text-stone-500 uppercase tracking-wider">
                      Traductor y Comentador
                    </dt>
                    <dd className="font-prose text-stone-800 mt-0.5">
                      Edward Henry Whinfield (Londres, 1898 · Global Grey 2025)
                    </dd>
                  </div>
                  <div className="pb-3 border-b border-stone-200/80">
                    <dt className="text-xs text-stone-500 uppercase tracking-wider">
                      Estructura del Documento
                    </dt>
                    <dd className="font-mono-tabular text-stone-800 mt-0.5">
                      6 Libros (Daftars) · 82 Relatos + Prólogo · 215 Págs.
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-stone-500 uppercase tracking-wider">
                      Cartografía D3.js y Visor PDF
                    </dt>
                    <dd className="font-prose text-stone-700 mt-0.5 text-xs leading-relaxed">
                      Red interactiva de fuerzas D3.js con los 82 relatos conectados a sus 5 ejes filosóficos y visor PDF en lienzo HTML5.
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8 pt-5 border-t border-stone-300">
                <blockquote className="font-display italic text-lg text-stone-800 leading-snug">
                  &ldquo;Escucha a la flauta de caña cómo se queja, lamentando su destierro del cañaveral...&rdquo;
                </blockquote>
                <p className="text-xs text-stone-500 mt-1.5">
                  Libro I, Prólogo · Pág. 5 del documento
                </p>
              </div>
            </div>
          </div>

          {/* Full-width Operational Metrics Strip below Hero */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-stone-200">
            <div>
              <div className="text-xs uppercase tracking-widest text-stone-500">
                Volúmenes Canónicos
              </div>
              <div className="text-2xl font-display font-semibold text-stone-900 font-mono-tabular mt-1">
                6 Libros (Daftars)
              </div>
              <div className="text-xs text-stone-600 mt-0.5">
                Más nota crítica sobre el Libro VII apócrifo
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-stone-500">
                Grafo Interactivo D3.js
              </div>
              <div className="text-2xl font-display font-semibold text-stone-900 font-mono-tabular mt-1">
                82 Relatos + 5 Ejes
              </div>
              <div className="text-xs text-stone-600 mt-0.5">
                3 modos topológicos y más de 260 enlaces temáticos
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-stone-500">
                Audiolibro Integrado
              </div>
              <div className="text-2xl font-display font-semibold text-stone-900 font-mono-tabular mt-1">
                6 Recitales Poéticos
              </div>
              <div className="text-xs text-stone-600 mt-0.5">
                Voz masculina realista IA (WAV) + Narrador instantáneo
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-stone-500">
                Extensión del PDF
              </div>
              <div className="text-2xl font-display font-semibold text-stone-900 font-mono-tabular mt-1">
                215 Páginas
              </div>
              <div className="text-xs text-stone-600 mt-0.5">
                Visor Canvas de alta resolución sin bloqueo
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: Mapa Interactivo D3.js de Relaciones entre los 82 Relatos y sus Ejes Filosóficos */}
        <section id="mapa-d3" className="py-14 border-b border-stone-200">
          <div className="max-w-3xl mb-8">
            <div className="text-xs uppercase tracking-widest text-[#78350F] mb-2">
              01 / Cartografía Conceptual Interactiva (D3.js)
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-semibold text-stone-900 tracking-tight">
              Mapa de Relaciones de los 82 Relatos y sus Ejes Filosóficos
            </h2>
            <p className="font-prose text-stone-600 mt-2 text-sm leading-relaxed">
              Navega visualmente por el tejido completo del <strong>Masnavi-i Ma&apos;navi</strong>: cada nodo representa uno de los <strong>82 relatos (+ el Prólogo)</strong> conectado a su <strong>Libro (I–VI)</strong>, a sus <strong>5 Ejes Filosóficos Sufíes</strong> y a sus relatos hermanos. Alterna entre la <em>Constelación por Ejes</em>, la <em>Agrupación por Libros</em> y el <em>Mandala Concéntrico</em>, arrastra los nodos o haz clic en cualquiera de ellos para leer su sinopsis, escucharlo o abrir su página en el PDF.
            </p>
          </div>

          <MasnaviForceGraph
            onOpenPdfPage={openPdfAtPage}
            onSelectStoryModal={(story) => setActiveStoryModal(story)}
          />
        </section>

        {/* SECTION 2: Audiolibro Poético con Voz Masculina Realista */}
        <section id="audiolibro" className="py-14 border-b border-stone-200">
          <div className="max-w-3xl mb-8">
            <div className="text-xs uppercase tracking-widest text-[#78350F] mb-2">
              02 / Estudio de Recitación Poética (Voz Masculina Gratuita)
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-semibold text-stone-900 tracking-tight">
              Audiolibro Poético del Masnavi-i Ma&apos;navi
            </h2>
            <p className="font-prose text-stone-600 mt-2 text-sm leading-relaxed">
              Escucha los grandes pasajes líricos de Rumi recitados con voz masculina realista y cadencia poética contemplativa. Puedes elegir entre tres timbres masculinos de inteligencia artificial (<strong>Charon</strong> barítono profundo, <strong>Fenrir</strong> grave solemne o <strong>Puck</strong> tenor cálido, con descarga directa en <code>.WAV</code>) o activar el <strong>Recitador Poético Instantáneo</strong> con lectura verso a verso y armonía acústica sufí de fondo.
            </p>
          </div>

          <PoeticAudiobookPlayer onOpenPdfPage={openPdfAtPage} />
        </section>

        {/* SECTION 3: Análisis Literario Profundo (Temas y Motivos, Personajes Principales, Estructura de la Trama) */}
        <section id="analisis-literario" className="py-14 border-b border-stone-200">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#78350F] mb-2">
                03 / Estudio Literario y Estructural Exhaustivo
              </div>
              <h2 className="text-3xl lg:text-4xl font-display font-semibold text-stone-900 tracking-tight">
                Temas y Motivos, Personajes y Arco de la Trama
              </h2>
            </div>

            {/* Segmented Tab Controls */}
            <div className="flex flex-wrap items-center gap-1 p-1 bg-[#EBE6DF] rounded">
              <button
                onClick={() => setAnalysisTab('temas')}
                className={`px-3.5 py-2 text-xs font-medium rounded transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
                  analysisTab === 'temas'
                    ? 'bg-[#1C1917] text-[#FBF9F5]'
                    : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Temas y Motivos</span>
              </button>
              <button
                onClick={() => setAnalysisTab('personajes')}
                className={`px-3.5 py-2 text-xs font-medium rounded transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
                  analysisTab === 'personajes'
                    ? 'bg-[#1C1917] text-[#FBF9F5]'
                    : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Personajes Principales</span>
              </button>
              <button
                onClick={() => setAnalysisTab('trama')}
                className={`px-3.5 py-2 text-xs font-medium rounded transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
                  analysisTab === 'trama'
                    ? 'bg-[#1C1917] text-[#FBF9F5]'
                    : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                <GitBranch className="w-3.5 h-3.5" />
                <span>Arco de la Trama (5 Etapas)</span>
              </button>
              <button
                onClick={() => setAnalysisTab('pilares')}
                className={`px-3.5 py-2 text-xs font-medium rounded transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
                  analysisTab === 'pilares'
                    ? 'bg-[#1C1917] text-[#FBF9F5]'
                    : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Glosario Sufí</span>
              </button>
            </div>
          </div>

          {/* TAB 1: Temas y Motivos */}
          {analysisTab === 'temas' && (
            <div className="space-y-6">
              {THEMES_AND_MOTIFS_ANALYSIS.map((item) => (
                <article
                  key={item.id}
                  className="bg-white border border-stone-200 p-6 lg:p-8"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200 mb-6">
                    <div>
                      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78350F] mb-1">
                        <span>{item.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.subtitleEn}</span>
                      </div>
                      <h3 className="text-2xl font-display font-semibold text-stone-900">
                        {item.titleEs}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5">
                      {item.pdfPages.map((pg) => (
                        <button
                          key={pg}
                          onClick={() => openPdfAtPage(pg)}
                          className="px-2.5 py-1 text-xs font-mono-tabular bg-[#F3EFE6] hover:bg-stone-200 text-stone-800 rounded cursor-pointer"
                        >
                          Pág. {pg}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-stone-500 mb-2">
                          Significado e Importancia Filosófica
                        </h4>
                        <p className="font-prose text-sm lg:text-base text-stone-800 leading-relaxed mb-6">
                          {item.meaningAndSignificance}
                        </p>
                      </div>

                      <div className="bg-[#FBF9F5] border border-stone-200 p-4">
                        <div className="text-xs uppercase tracking-widest text-[#78350F] mb-1.5">
                          Cita Textual de Referencia
                        </div>
                        <p className="font-prose italic text-xs text-stone-700 leading-relaxed">
                          {item.textualEvidence}
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-7">
                      <h4 className="text-xs uppercase tracking-widest text-stone-500 mb-3">
                        Desarrollo Progresivo a lo largo de la Obra
                      </h4>
                      <div className="space-y-4">
                        {item.developmentAcrossBooks.map((dev, idx) => (
                          <div
                            key={idx}
                            className="bg-[#F3EFE6]/60 border border-stone-200 p-4"
                          >
                            <div className="text-xs font-mono-tabular font-semibold text-stone-900 mb-1">
                              {dev.book}
                            </div>
                            <p className="font-prose text-sm text-stone-700 leading-relaxed">
                              {dev.evolution}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* TAB 2: Análisis de Personajes Principales */}
          {analysisTab === 'personajes' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {MAJOR_CHARACTERS_ANALYSIS.map((char) => (
                <article
                  key={char.id}
                  className="bg-white border border-stone-200 p-6 lg:p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-stone-200 mb-4">
                      <div>
                        <div className="text-xs uppercase tracking-widest text-[#78350F]">
                          {char.archetype}
                        </div>
                        <h3 className="text-2xl font-display font-semibold text-stone-900 mt-0.5">
                          {char.name}
                        </h3>
                        <p className="text-xs text-stone-500 mt-0.5">
                          {char.roleTitle} · {char.booksPresent}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3.5 text-sm font-prose text-stone-700">
                      <div>
                        <strong className="text-xs uppercase tracking-wider font-sans text-stone-900 block mb-0.5">
                          Motivaciones:
                        </strong>
                        <p className="leading-relaxed">{char.motivation}</p>
                      </div>
                      <div>
                        <strong className="text-xs uppercase tracking-wider font-sans text-stone-900 block mb-0.5">
                          Arco de Desarrollo:
                        </strong>
                        <p className="leading-relaxed">{char.developmentArc}</p>
                      </div>
                      <div>
                        <strong className="text-xs uppercase tracking-wider font-sans text-stone-900 block mb-0.5">
                          Relaciones y Simbolismo Interior:
                        </strong>
                        <p className="leading-relaxed">{char.keyRelationships}</p>
                      </div>
                      <div>
                        <strong className="text-xs uppercase tracking-wider font-sans text-stone-900 block mb-0.5">
                          Importancia Narrativa:
                        </strong>
                        <p className="leading-relaxed">{char.narrativeImportance}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-200">
                    <p className="font-display italic text-base text-stone-900 mb-3">
                      {char.signatureQuoteEs}
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-xs text-stone-500 mr-1">
                        Páginas en el PDF:
                      </span>
                      {char.pdfPages.map((p) => (
                        <button
                          key={p}
                          onClick={() => openPdfAtPage(p)}
                          className="px-2 py-0.5 text-xs font-mono-tabular bg-[#F3EFE6] hover:bg-stone-200 text-stone-800 rounded cursor-pointer"
                        >
                          p.{p}
                        </button>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* TAB 3: Estructura Dramática y Puntos de la Trama */}
          {analysisTab === 'trama' && (
            <div className="space-y-6">
              <div className="bg-[#F3EFE6] border border-stone-200 p-6">
                <p className="font-prose text-sm lg:text-base text-stone-800 leading-relaxed">
                  Aunque el <strong>Masnavi-i Ma&apos;navi</strong> entrelaza 82 historias aparentemente independientes, la obra completa posee una <strong>estructura dramática unitaria en cinco actos</strong>: el viaje épico del alma humana desde el dolor de su separación inicial (Libro I) hasta la consumación silenciosa de la Unión con el Amado (Libro VI).
                </p>
              </div>

              {PLOT_STRUCTURE_ANALYSIS.map((stage) => (
                <article
                  key={stage.stageNumber}
                  className="bg-white border border-stone-200 p-6 lg:p-8"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200 mb-5">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono-tabular text-[#78350F] uppercase tracking-widest">
                        <span>ETAPA {stage.stageNumber} DE V</span>
                        <span aria-hidden="true">·</span>
                        <span>{stage.booksSpan}</span>
                      </div>
                      <h3 className="text-2xl font-display font-semibold text-stone-900 mt-1">
                        {stage.stageTitleEs}
                      </h3>
                      <p className="text-xs text-stone-500 italic">{stage.stageTitleEn}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5">
                      {stage.pdfPages.map((pg) => (
                        <button
                          key={pg}
                          onClick={() => openPdfAtPage(pg)}
                          className="px-2.5 py-1 text-xs font-mono-tabular bg-[#F3EFE6] hover:bg-stone-200 text-stone-800 rounded cursor-pointer"
                        >
                          Pág. {pg}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5 space-y-4">
                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-stone-500 mb-1.5">
                          Movimiento Macro-Espiritual
                        </h4>
                        <p className="font-prose text-sm text-stone-800 leading-relaxed">
                          {stage.macroSpiritualMovement}
                        </p>
                      </div>
                      <div className="bg-[#FBF9F5] border border-stone-200 p-4">
                        <h4 className="text-xs uppercase tracking-widest text-[#78350F] mb-1">
                          Culminación Filosófica
                        </h4>
                        <p className="font-prose text-xs text-stone-700 leading-relaxed">
                          {stage.philosophicalCulmination}
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-7">
                      <h4 className="text-xs uppercase tracking-widest text-stone-500 mb-3">
                        Puntos Clave de la Trama en las Parábolas
                      </h4>
                      <ul className="space-y-3 font-prose text-sm text-stone-700">
                        {stage.narrativeManifestations.map((m, i) => (
                          <li
                            key={i}
                            className="p-3.5 bg-[#F3EFE6]/50 border border-stone-200 leading-relaxed"
                          >
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* TAB 4: Glosario y Pilares Sufíes */}
          {analysisTab === 'pilares' && (
            <div className="space-y-6">
              {PHILOSOPHICAL_PILLARS.map((pillar) => (
                <div
                  key={pillar.id}
                  className="bg-white border border-stone-200 p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6"
                >
                  <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-stone-200 pb-4 lg:pb-0 lg:pr-6 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono-tabular text-[#78350F] mb-1">
                        {pillar.termPersian}
                      </div>
                      <h3 className="text-2xl font-display font-semibold text-stone-900 leading-snug">
                        {pillar.titleEs}
                      </h3>
                      <div className="text-xs text-stone-500 italic mt-1">
                        {pillar.subtitleEn}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-stone-100">
                      <div className="text-[11px] uppercase tracking-wider text-stone-400">
                        Referencias en el Documento
                      </div>
                      <div className="text-xs font-mono-tabular text-stone-700 mt-1">
                        {pillar.canonicalReference}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-8 space-y-4">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-stone-500 mb-1.5">
                        Definición Filosófica y Mística
                      </h4>
                      <p className="font-prose text-sm lg:text-base text-stone-800 leading-relaxed">
                        {pillar.definition}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-stone-500 mb-1.5">
                        Aplicación en las Parábolas del Masnavi
                      </h4>
                      <p className="font-prose text-sm text-stone-700 leading-relaxed">
                        {pillar.masnaviApplication}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* SECTION 4: Explorador Detallado de los 6 Libros (Daftars) */}
        <section id="libros" className="py-14 border-b border-stone-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#78350F] mb-2">
                04 / Estructura y Síntesis por Volumen
              </div>
              <h2 className="text-3xl lg:text-4xl font-display font-semibold text-stone-900 tracking-tight">
                Análisis de los Seis Libros (Daftars)
              </h2>
            </div>

            {/* Interactive Book Selector Tabs */}
            <div className="flex flex-wrap items-center gap-1 p-1 bg-[#EBE6DF] rounded">
              {BOOKS_DATA.map((book) => (
                <button
                  key={book.number}
                  onClick={() => setSelectedBook(book.number)}
                  className={`px-3.5 py-2 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    selectedBook === book.number
                      ? 'bg-[#1C1917] text-[#FBF9F5]'
                      : 'text-stone-700 hover:text-stone-900'
                  }`}
                >
                  Libro {book.number}
                </button>
              ))}
            </div>
          </div>

          {/* Active Book Detail View */}
          <div className="bg-white border border-stone-200 p-6 lg:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-200">
              <div>
                <div className="flex items-center gap-2 text-xs text-stone-500 font-mono-tabular mb-1.5">
                  <span>VOLUMEN {currentBook.number} DE 6</span>
                  <span aria-hidden="true">·</span>
                  <span>PÁGINAS {currentBook.pdfStartPage}–{currentBook.pdfEndPage} DEL PDF</span>
                  <span aria-hidden="true">·</span>
                  <span>{currentBook.storyCount} RELATOS PRINCIPALES</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-display font-semibold text-stone-900">
                  {currentBook.titleEs}
                </h3>
                <p className="text-sm text-stone-600 mt-1">{currentBook.subtitleEs}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => openPdfAtPage(currentBook.pdfStartPage)}
                  className="px-4 py-2 text-xs font-medium bg-[#F3EFE6] hover:bg-stone-200 text-stone-900 rounded transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-[#78350F]" />
                  <span>Abrir Libro {currentBook.number} en PDF (Pág. {currentBook.pdfStartPage})</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-stone-500 mb-2">
                    Contexto de Composición
                  </h4>
                  <p className="font-prose text-stone-800 leading-relaxed">
                    {currentBook.historicalContext}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-stone-500 mb-2">
                    Tesis Central del Libro {currentBook.number}
                  </h4>
                  <p className="font-prose text-stone-800 leading-relaxed">
                    {currentBook.coreThesis}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-stone-500 mb-3">
                    Ejes Doctrinales y Filosóficos
                  </h4>
                  <ul className="space-y-2.5 font-prose text-sm text-stone-700">
                    {currentBook.philosophicalArc.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="font-mono-tabular text-xs text-[#78350F] mt-1">
                          0{idx + 1}.
                        </span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Emblematic Quote & All Stories in this Book */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-[#FBF9F5] border border-stone-200 p-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#78350F] mb-3">
                    Verso Emblemático · Libro {currentBook.number}
                  </div>
                  <blockquote className="font-display italic text-xl text-stone-900 leading-relaxed pb-4 border-b border-stone-200">
                    &ldquo;{currentBook.emblematicQuoteEs}&rdquo;
                  </blockquote>
                  <p className="font-prose text-xs text-stone-500 italic mt-3 leading-relaxed">
                    Original (Whinfield): &ldquo;{currentBook.emblematicQuoteEn}&rdquo;
                  </p>

                  <div className="mt-6 pt-6 border-t border-stone-200">
                    <div className="text-xs uppercase tracking-widest text-stone-500 mb-3">
                      Índice Completo de Relatos del Libro {currentBook.number}
                    </div>
                    <div className="space-y-1.5 max-h-[260px] overflow-y-auto pr-1">
                      {ALL_82_STORIES.filter((s) => s.bookNumber === currentBook.number).map(
                        (s) => (
                          <div
                            key={s.id}
                            className="flex items-center justify-between gap-2 py-1.5 border-b border-stone-200/60 text-xs"
                          >
                            <button
                              onClick={() => setActiveStoryModal(s)}
                              className="text-left font-medium text-stone-800 hover:text-[#78350F] transition-colors truncate cursor-pointer"
                            >
                              {s.storyNumber === 0 ? 'Prólogo' : `Historia ${s.storyNumber}`}:{' '}
                              {s.titleEs}
                            </button>
                            <button
                              onClick={() => openPdfAtPage(s.pdfPage)}
                              className="font-mono-tabular text-stone-500 hover:text-stone-900 whitespace-nowrap shrink-0 cursor-pointer"
                            >
                              Pág. {s.pdfPage}
                            </button>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200 flex justify-between items-center">
                  <button
                    onClick={() => {
                      setStoryBookFilter(currentBook.number);
                      document
                        .getElementById('parabolas')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-medium text-[#78350F] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Filtrar las {currentBook.storyCount} historias del Libro {currentBook.number} abajo</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Catálogo Completo de los 82 Relatos + Prólogo */}
        <section id="parabolas" className="py-14">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-widest text-[#78350F] mb-2">
              05 / Catálogo Completo (82 Historias + Prólogo)
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-semibold text-stone-900 tracking-tight">
              Antología Completa de los 82 Relatos y Moralidades Místicas
            </h2>
            <p className="font-prose text-stone-600 mt-2 max-w-2xl text-sm leading-relaxed">
              Explora la totalidad de los 82 relatos numerados de los seis libros del Masnavi junto con su Prólogo. Filtra por volumen, eje filosófico o palabra clave, y haz clic en cualquier tarjeta para leer el análisis completo, escucharlo en voz masculina o abrir su página exacta en el PDF.
            </p>
          </div>

          {/* Filter & Search Toolbar */}
          <div className="bg-[#F3EFE6] border border-stone-200 p-4 mb-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar entre los 82 relatos por título, personaje (Moisés, Ayaz, Loro, Elefante, Luqman) o tema..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-stone-300 rounded text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#78350F]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1 bg-[#EBE6DF] p-1 rounded">
              <button
                onClick={() => setStoryBookFilter('all')}
                className={`px-2.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  storyBookFilter === 'all'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Todos ({ALL_82_STORIES.length})
              </button>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <button
                  key={num}
                  onClick={() => setStoryBookFilter(num)}
                  className={`px-2.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    storyBookFilter === num
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Libro {num}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Filter Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-stone-500 mr-2">
                Eje Temático:
              </span>
              {[
                { key: 'all', label: 'Todos los Temas' },
                { key: 'amor', label: 'Amor Divino y Nostalgia' },
                { key: 'ego', label: 'Aniquilación del Ego (Fana)' },
                { key: 'forma', label: 'Forma vs. Esencia' },
                { key: 'corazon', label: 'Sabiduría del Corazón' },
                { key: 'albedrio', label: 'Libre Albedrío y Providencia' }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setThemeFilter(item.key as ThemeFilter)}
                  className={`px-3 py-1.5 text-xs font-medium rounded border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    themeFilter === item.key
                      ? 'bg-[#78350F] text-[#FBF9F5] border-[#78350F]'
                      : 'bg-white text-stone-700 border-stone-300 hover:border-stone-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="text-xs font-mono-tabular text-stone-500">
              Mostrando {filteredStories.length} de {ALL_82_STORIES.length} relatos
            </div>
          </div>

          {/* Stories Grid */}
          {filteredStories.length === 0 ? (
            <div className="bg-white border border-stone-200 p-12 text-center">
              <p className="font-prose text-stone-600 mb-3">
                No se encontraron parábolas que coincidan con los filtros seleccionados.
              </p>
              <button
                onClick={() => {
                  setStoryBookFilter('all');
                  setThemeFilter('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 text-xs font-medium bg-stone-900 text-white rounded cursor-pointer"
              >
                Restablecer filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStories.map((story) => (
                <article
                  key={story.id}
                  className="bg-white border border-stone-200 p-6 flex flex-col justify-between hover:border-stone-400 transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs text-stone-500 font-mono-tabular mb-2">
                      <span>Libro {story.bookNumber}</span>
                      <span aria-hidden="true">·</span>
                      <span>
                        {story.storyNumber === 0
                          ? 'Prólogo'
                          : `Historia ${story.storyNumber}`}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>Pág. {story.pdfPage}</span>
                    </div>

                    <h3 className="text-xl font-display font-semibold text-stone-900 leading-snug mb-1">
                      {story.titleEs}
                    </h3>
                    <p className="text-xs text-stone-500 italic mb-4">{story.titleEn}</p>

                    <p className="font-prose text-sm text-stone-700 leading-relaxed mb-4 line-clamp-4">
                      {story.synopsis}
                    </p>

                    <div className="pt-3 border-t border-stone-100">
                      <div className="text-[11px] uppercase tracking-wider text-[#78350F] font-medium mb-1">
                        Enseñanza Mística ({story.themeLabel})
                      </div>
                      <p className="font-prose text-xs text-stone-600 leading-relaxed line-clamp-3">
                        {story.mysticalMoral}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-5 border-t border-stone-200 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveStoryModal(story)}
                      className="text-xs font-medium text-stone-900 hover:text-[#78350F] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Leer y escuchar</span>
                    </button>

                    <button
                      onClick={() => openPdfAtPage(story.pdfPage)}
                      className="text-xs font-mono-tabular text-stone-500 hover:text-stone-900 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Ver PDF (p. {story.pdfPage})</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Story Detail Modal */}
      {activeStoryModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => {
            if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
              window.speechSynthesis.cancel();
            }
            setModalSpeaking(false);
            setActiveStoryModal(null);
          }}
        >
          <div
            className="bg-[#FBF9F5] border border-stone-300 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 lg:p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono-tabular text-stone-500 mb-1">
                  <span>Libro {activeStoryModal.bookNumber}</span>
                  <span aria-hidden="true">·</span>
                  <span>
                    {activeStoryModal.storyNumber === 0
                      ? 'Prólogo'
                      : `Historia ${activeStoryModal.storyNumber}`}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Página {activeStoryModal.pdfPage} del PDF</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-display font-semibold text-stone-900">
                  {activeStoryModal.titleEs}
                </h3>
                <p className="text-xs text-stone-500 italic mt-0.5">
                  {activeStoryModal.titleEn}
                </p>
              </div>
              <button
                onClick={() => {
                  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                    window.speechSynthesis.cancel();
                  }
                  setModalSpeaking(false);
                  setActiveStoryModal(null);
                }}
                className="p-1.5 text-stone-500 hover:text-stone-900 rounded cursor-pointer"
                aria-label="Cerrar ventana"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-5 py-6">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-stone-500 mb-1.5">
                  Sinopsis de la Parábola
                </h4>
                <p className="font-prose text-stone-800 leading-relaxed text-sm lg:text-base">
                  {activeStoryModal.synopsis}
                </p>
              </div>

              <div className="bg-[#F3EFE6] border border-stone-200 p-4">
                <h4 className="text-xs uppercase tracking-widest text-[#78350F] mb-1.5">
                  Sentido Esotérico y Enseñanza Moral ({activeStoryModal.themeLabel})
                </h4>
                <p className="font-prose text-stone-800 leading-relaxed text-sm">
                  {activeStoryModal.mysticalMoral}
                </p>
              </div>

              <div className="py-4 border-y border-stone-200">
                <div className="text-xs uppercase tracking-widest text-stone-500 mb-2">
                  Verso Clave Traducido
                </div>
                <blockquote className="font-display italic text-xl text-stone-900 leading-relaxed">
                  &ldquo;{activeStoryModal.keyQuoteEs}&rdquo;
                </blockquote>
                <p className="font-prose text-xs text-stone-500 italic mt-2">
                  Versión de E. H. Whinfield: &ldquo;{activeStoryModal.keyQuoteEn}&rdquo;
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600">
                <span className="uppercase tracking-wider text-stone-400">
                  Figuras del relato:
                </span>
                {activeStoryModal.keyFigures.map((fig, i) => (
                  <React.Fragment key={fig}>
                    <span className="font-medium text-stone-800">{fig}</span>
                    {i < activeStoryModal.keyFigures.length - 1 && (
                      <span aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => {
                    const page = activeStoryModal.pdfPage;
                    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                      window.speechSynthesis.cancel();
                    }
                    setModalSpeaking(false);
                    setActiveStoryModal(null);
                    openPdfAtPage(page);
                  }}
                  className="px-4 py-2 text-xs font-medium bg-[#1C1917] text-[#FBF9F5] hover:bg-[#78350F] rounded transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Ver en Manuscrito PDF (Pág. {activeStoryModal.pdfPage})</span>
                </button>

                <button
                  onClick={() => reciteStoryInModal(activeStoryModal)}
                  className="px-4 py-2 text-xs font-medium bg-[#78350F] text-white hover:bg-stone-900 rounded transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>{modalSpeaking ? 'Detener Narración' : 'Escuchar Relato y Verso'}</span>
                </button>
              </div>

              <button
                onClick={() => {
                  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                    window.speechSynthesis.cancel();
                  }
                  setModalSpeaking(false);
                  setActiveStoryModal(null);
                }}
                className="px-4 py-2 text-xs font-medium border border-stone-300 text-stone-700 hover:text-stone-900 rounded cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* High-Resolution Canvas PDF Viewer (Zero Chrome iframe blocking) */}
      {pdfViewerOpen && (
        <CanvasPdfViewer
          pdfUrl={WORK_METADATA.pdfPath}
          initialPage={pdfPage}
          books={BOOKS_DATA}
          onClose={() => setPdfViewerOpen(false)}
        />
      )}

      {/* Quiet Editorial Footer */}
      <footer className="border-t border-stone-200 bg-[#F3EFE6] py-8 px-6 lg:px-12 mt-12">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <div>
            <span>Masnavi-i Ma&apos;navi de Jalalu-&apos;d-Din Rumi</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>Edición E. H. Whinfield (1898 / Global Grey 2025, 215 págs.)</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => openPdfAtPage(1)}
              className="hover:text-stone-900 underline underline-offset-4 cursor-pointer"
            >
              Consultar documento PDF original (Visor Canvas)
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
