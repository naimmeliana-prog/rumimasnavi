import React, { useEffect, useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Download,
  X,
  FileText,
  Loader2
} from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

interface BookShortcut {
  number: number;
  pdfStartPage: number;
  pdfEndPage: number;
}

interface CanvasPdfViewerProps {
  pdfUrl: string;
  initialPage: number;
  books: BookShortcut[];
  onClose: () => void;
}

export default function CanvasPdfViewer({
  pdfUrl,
  initialPage,
  books,
  onClose
}: CanvasPdfViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pdfDocRef = useRef<pdfjsLib.PDFDocumentProxy | null>(null);
  const renderTaskRef = useRef<any>(null);

  const [currentPage, setCurrentPage] = useState<number>(initialPage || 1);
  const [pageInput, setPageInput] = useState<string>(String(initialPage || 1));
  const [numPages, setNumPages] = useState<number>(215);
  const [scale, setScale] = useState<number>(1.35);
  const [loadingDoc, setLoadingDoc] = useState<boolean>(true);
  const [renderingPage, setRenderingPage] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Load PDF document once as ArrayBuffer so Chrome never blocks it
  useEffect(() => {
    let cancelled = false;
    setLoadingDoc(true);
    setErrorMsg(null);

    async function loadPdf() {
      try {
        const response = await fetch(pdfUrl);
        if (!response.ok) {
          throw new Error(`No se pudo cargar el archivo PDF (${response.status})`);
        }
        const arrayBuffer = await response.arrayBuffer();
        const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
        const pdfDoc = await loadingTask.promise;
        if (cancelled) return;
        pdfDocRef.current = pdfDoc;
        setNumPages(pdfDoc.numPages);
        setLoadingDoc(false);
      } catch (err: any) {
        if (!cancelled) {
          console.error('Error cargando PDF con PDF.js:', err);
          setErrorMsg(err?.message || 'Error al procesar el documento PDF.');
          setLoadingDoc(false);
        }
      }
    }

    loadPdf();
    return () => {
      cancelled = true;
    };
  }, [pdfUrl]);

  // Sync when initialPage prop changes
  useEffect(() => {
    if (initialPage >= 1 && initialPage <= numPages) {
      setCurrentPage(initialPage);
      setPageInput(String(initialPage));
    }
  }, [initialPage, numPages]);

  // Render active page onto HTML5 Canvas
  useEffect(() => {
    const pdfDoc = pdfDocRef.current;
    const canvas = canvasRef.current;
    if (!pdfDoc || !canvas || loadingDoc) return;

    let cancelled = false;
    setRenderingPage(true);

    async function renderPage() {
      try {
        if (renderTaskRef.current) {
          try {
            renderTaskRef.current.cancel();
          } catch {
            // ignore cancel error
          }
        }

        const safePage = Math.max(1, Math.min(pdfDoc!.numPages, currentPage));
        const page = await pdfDoc!.getPage(safePage);
        if (cancelled) return;

        const dpr = window.devicePixelRatio || 1;
        const viewport = page.getViewport({ scale: scale * dpr });
        const context = canvas!.getContext('2d');
        if (!context) return;

        canvas!.width = viewport.width;
        canvas!.height = viewport.height;
        canvas!.style.width = `${viewport.width / dpr}px`;
        canvas!.style.height = `${viewport.height / dpr}px`;

        const renderContext = {
          canvasContext: context,
          viewport,
          canvas: canvas!
        };

        const task = page.render(renderContext as any);
        renderTaskRef.current = task;
        await task.promise;
        if (!cancelled) {
          setRenderingPage(false);
        }
      } catch (err: any) {
        if (err?.name !== 'RenderingCancelledException' && !cancelled) {
          console.error('Error renderizando página:', err);
          setRenderingPage(false);
        }
      }
    }

    renderPage();
    return () => {
      cancelled = true;
    };
  }, [currentPage, scale, loadingDoc]);

  const goToPage = (p: number) => {
    const clamped = Math.max(1, Math.min(numPages, p));
    setCurrentPage(clamped);
    setPageInput(String(clamped));
  };

  const handlePageInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseInt(pageInput, 10);
    if (!isNaN(parsed)) {
      goToPage(parsed);
    } else {
      setPageInput(String(currentPage));
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-xs flex flex-col">
      {/* Top Control Bar */}
      <div className="bg-[#1C1917] text-[#FBF9F5] px-4 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4 border-b border-stone-800">
        <div className="flex items-center gap-3">
          <FileText className="w-4 h-4 text-amber-500 shrink-0" />
          <div>
            <span className="text-sm font-medium">
              Masnavi-i Ma&apos;navi — Visor Digital Directo
            </span>
            <span className="hidden md:inline text-xs text-stone-400 ml-2">
              (Renderizado en lienzo HTML5 · Sin bloqueo de navegador)
            </span>
          </div>
        </div>

        {/* Book Shortcuts */}
        <div className="hidden xl:flex items-center gap-1">
          {books.map((b) => (
            <button
              key={b.number}
              onClick={() => goToPage(b.pdfStartPage)}
              className={`px-2.5 py-1 text-xs rounded transition-colors cursor-pointer whitespace-nowrap ${
                currentPage >= b.pdfStartPage && currentPage <= b.pdfEndPage
                  ? 'bg-[#78350F] text-white font-medium'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              Libro {b.number} (p.{b.pdfStartPage})
            </button>
          ))}
        </div>

        {/* Pagination & Zoom Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage <= 1}
            className="p-1.5 bg-stone-800 hover:bg-stone-700 disabled:opacity-40 rounded text-xs cursor-pointer"
            title="Página anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <form onSubmit={handlePageInputSubmit} className="flex items-center gap-1.5">
            <input
              type="text"
              value={pageInput}
              onChange={(e) => setPageInput(e.target.value)}
              className="w-12 px-2 py-1 text-center text-xs font-mono-tabular bg-stone-900 border border-stone-700 rounded text-white focus:outline-none focus:border-amber-500"
              aria-label="Número de página"
            />
            <span className="text-xs font-mono-tabular text-stone-400">
              / {numPages}
            </span>
          </form>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage >= numPages}
            className="p-1.5 bg-stone-800 hover:bg-stone-700 disabled:opacity-40 rounded text-xs cursor-pointer"
            title="Página siguiente"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="h-4 w-px bg-stone-700 mx-1" />

          <button
            onClick={() => setScale((s) => Math.max(0.75, +(s - 0.2).toFixed(2)))}
            className="p-1.5 bg-stone-800 hover:bg-stone-700 rounded text-xs cursor-pointer"
            title="Reducir zoom"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono-tabular text-stone-300 w-12 text-center">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={() => setScale((s) => Math.min(2.5, +(s + 0.2).toFixed(2)))}
            className="p-1.5 bg-stone-800 hover:bg-stone-700 rounded text-xs cursor-pointer"
            title="Aumentar zoom"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <a
            href={pdfUrl}
            download="Rumi_Masnavi_i_Manavi_Whinfield.pdf"
            className="ml-1 px-3 py-1.5 text-xs bg-stone-800 hover:bg-stone-700 text-stone-200 rounded flex items-center gap-1.5 whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Descargar PDF</span>
          </a>

          <button
            onClick={onClose}
            className="ml-1 px-3 py-1.5 text-xs bg-[#78350F] hover:bg-amber-800 text-white rounded flex items-center gap-1 cursor-pointer whitespace-nowrap"
          >
            <X className="w-4 h-4" />
            <span>Cerrar</span>
          </button>
        </div>
      </div>

      {/* Mobile Book Jump Bar */}
      <div className="xl:hidden bg-stone-900 px-4 py-2 border-b border-stone-800 flex items-center gap-1.5 overflow-x-auto">
        <span className="text-[11px] uppercase tracking-wider text-stone-400 mr-1 shrink-0">
          Ir a:
        </span>
        {books.map((b) => (
          <button
            key={b.number}
            onClick={() => goToPage(b.pdfStartPage)}
            className={`px-2.5 py-1 text-xs rounded transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              currentPage >= b.pdfStartPage && currentPage <= b.pdfEndPage
                ? 'bg-[#78350F] text-white'
                : 'bg-stone-800 text-stone-300'
            }`}
          >
            Libro {b.number} (p.{b.pdfStartPage})
          </button>
        ))}
      </div>

      {/* Canvas Viewport */}
      <div className="flex-1 overflow-auto p-4 sm:p-8 flex justify-center items-start bg-stone-900">
        {loadingDoc ? (
          <div className="my-auto flex flex-col items-center gap-3 text-stone-300">
            <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
            <p className="text-sm font-prose">
              Cargando las 215 páginas del manuscrito Masnavi-i Ma&apos;navi...
            </p>
          </div>
        ) : errorMsg ? (
          <div className="my-auto bg-stone-800 border border-stone-700 p-8 rounded max-w-md text-center text-stone-200">
            <p className="text-sm mb-4">{errorMsg}</p>
            <a
              href={pdfUrl}
              download="Rumi_Masnavi_i_Manavi.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium bg-amber-700 text-white rounded"
            >
              <Download className="w-4 h-4" />
              <span>Descargar PDF directamente</span>
            </a>
          </div>
        ) : (
          <div className="relative shadow-2xl bg-white border border-stone-700">
            {renderingPage && (
              <div className="absolute top-3 right-3 bg-stone-900/80 text-amber-400 px-2.5 py-1 rounded text-xs flex items-center gap-1.5">
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Renderizando pág. {currentPage}...</span>
              </div>
            )}
            <canvas ref={canvasRef} className="block max-w-full h-auto" />
          </div>
        )}
      </div>
    </div>
  );
}
