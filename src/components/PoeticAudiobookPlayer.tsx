import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Square,
  Volume2,
  Download,
  Sparkles,
  Music,
  Loader2,
  FileText
} from 'lucide-react';
import {
  POETIC_AUDIOBOOK_CHAPTERS,
  AudiobookChapter
} from '../data/literaryAnalysisData';
import {
  generateCastilianWavUrl,
  stopGlobalCastilianAudio
} from '../utils/castilianTtsClient';

interface PoeticAudiobookPlayerProps {
  onOpenPdfPage: (page: number) => void;
}

type VoicePersona = 'Charon' | 'Fenrir' | 'Puck';

export default function PoeticAudiobookPlayer({
  onOpenPdfPage
}: PoeticAudiobookPlayerProps) {
  const [selectedChapter, setSelectedChapter] = useState<AudiobookChapter>(
    POETIC_AUDIOBOOK_CHAPTERS[0]
  );
  const [voicePersona, setVoicePersona] = useState<VoicePersona>('Charon');
  const [isGeneratingAi, setIsGeneratingAi] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeVerseIndex, setActiveVerseIndex] = useState<number>(-1);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [ambientDroneOn, setAmbientDroneOn] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const droneCtxRef = useRef<AudioContext | null>(null);

  // Stop any active narration when chapter or voice changes
  useEffect(() => {
    stopAllPlayback();
    setAudioUrl(null);
    setStatusMessage(null);
  }, [selectedChapter.id, voicePersona]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAllPlayback();
      stopAmbientDrone();
    };
  }, []);

  const toggleAmbientDrone = () => {
    if (ambientDroneOn) {
      stopAmbientDrone();
      setAmbientDroneOn(false);
    } else {
      startAmbientDrone();
      setAmbientDroneOn(true);
    }
  };

  const startAmbientDrone = () => {
    try {
      stopAmbientDrone();
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
      droneCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 2);
      masterGain.connect(ctx.destination);

      // Warm Sufi Ney / Tanpura fifths (D3 = 146.83 Hz, A3 = 220 Hz, D4 = 293.66 Hz)
      const freqs = [146.83, 220.0, 293.66];
      freqs.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const oscGain = ctx.createGain();

        osc.type = idx === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(f, ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(420, ctx.currentTime);

        oscGain.gain.setValueAtTime(idx === 0 ? 0.5 : 0.22, ctx.currentTime);

        osc.connect(filter);
        filter.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();
      });
    } catch (e) {
      console.error('No se pudo iniciar la atmósfera acústica:', e);
    }
  };

  const stopAmbientDrone = () => {
    if (droneCtxRef.current) {
      try {
        droneCtxRef.current.close();
      } catch {
        // ignore
      }
      droneCtxRef.current = null;
    }
  };

  const stopAllPlayback = () => {
    stopGlobalCastilianAudio();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setActiveVerseIndex(-1);
  };

  // Generate & play Castilian Spanish (es-ES) WAV audio from /api/tts
  const startCastilianAiPoeticRecital = async () => {
    stopGlobalCastilianAudio();

    if (audioUrl && audioRef.current) {
      await audioRef.current.play();
      setIsPlaying(true);
      setStatusMessage(
        `Reproduciendo en Español de España (es-ES · Voz masculina ${voicePersona})...`
      );
      return;
    }

    setIsGeneratingAi(true);
    setStatusMessage(
      `Sintetizando voz poética masculina en Español de España (es-ES · Timbre ${voicePersona})...`
    );

    try {
      const fullPoeticScript = [
        selectedChapter.introNarrativeEs,
        '',
        ...selectedChapter.poeticVersesEs
      ].join('\n\n');

      const url = await generateCastilianWavUrl(
        selectedChapter.id,
        fullPoeticScript,
        voicePersona,
        selectedChapter.voiceStylePrompt
      );

      setAudioUrl(url);
      setIsGeneratingAi(false);
      setStatusMessage(
        `Audio en Español de España (es-ES) listo · Voz masculina ${voicePersona} (24kHz WAV).`
      );

      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch(() => {});
          setIsPlaying(true);
        }
      }, 120);
    } catch (err: any) {
      console.error('Error generando TTS en es-ES:', err);
      setIsGeneratingAi(false);
      setStatusMessage(
        err?.message || 'Error al generar el audio en Español de España.'
      );
    }
  };

  const handlePlayPause = () => {
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }
    startCastilianAiPoeticRecital();
  };

  const handleTimeUpdate = () => {
    const el = audioRef.current;
    if (!el || !el.duration || el.duration <= 0) return;
    const progress = el.currentTime / el.duration;
    const totalVerses = selectedChapter.poeticVersesEs.length;
    const idx = Math.min(
      totalVerses - 1,
      Math.max(0, Math.floor(progress * totalVerses))
    );
    setActiveVerseIndex(idx);
  };

  return (
    <div className="bg-white border border-stone-200 p-6 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Chapter Selector & Castilian Voice Configuration */}
        <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-200 pb-6 lg:pb-0 lg:pr-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#78350F] mb-2">
              Recitales Poéticos en Español de España (es-ES)
            </div>
            <h3 className="text-2xl font-display font-semibold text-stone-900 mb-4">
              Selecciona un Capítulo del Audiolibro
            </h3>

            <div className="space-y-2 mb-6">
              {POETIC_AUDIOBOOK_CHAPTERS.map((chap) => {
                const isSelected = chap.id === selectedChapter.id;
                return (
                  <button
                    key={chap.id}
                    onClick={() => setSelectedChapter(chap)}
                    className={`w-full text-left p-3.5 rounded border transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#1C1917] text-[#FBF9F5] border-[#1C1917]'
                        : 'bg-[#FBF9F5] text-stone-800 border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 text-xs font-mono-tabular opacity-75 mb-1">
                      <span>Libro {chap.bookNumber} · Pág. {chap.pdfPage}</span>
                      <span>{chap.durationEstimate}</span>
                    </div>
                    <div className="font-display font-semibold text-base leading-snug">
                      {chap.titleEs}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Voice Persona & Acoustic Settings */}
          <div className="bg-[#F3EFE6] border border-stone-200 p-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-semibold text-stone-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#78350F]" />
                <span>Timbre Masculino Castellano (es-ES)</span>
              </span>
              <span className="text-[11px] font-mono-tabular text-[#78350F]">
                Idioma: es-ES
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                {
                  id: 'Charon',
                  label: 'Charon',
                  desc: 'Barítono Castellano'
                },
                {
                  id: 'Fenrir',
                  label: 'Fenrir',
                  desc: 'Grave y Solemne'
                },
                {
                  id: 'Puck',
                  label: 'Puck',
                  desc: 'Cálido y Poético'
                }
              ].map((v) => (
                <button
                  key={v.id}
                  onClick={() => setVoicePersona(v.id as VoicePersona)}
                  className={`p-2.5 text-left rounded border text-xs transition-colors cursor-pointer ${
                    voicePersona === v.id
                      ? 'bg-[#78350F] text-white border-[#78350F]'
                      : 'bg-white text-stone-800 border-stone-300 hover:border-stone-500'
                  }`}
                >
                  <div className="font-semibold">{v.label}</div>
                  <div className="text-[10px] opacity-85 mt-0.5">{v.desc}</div>
                </button>
              ))}
            </div>

            {/* Optional Ambient Sufi Drone Toggle */}
            <div className="pt-3 border-t border-stone-300 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-stone-700">
                <Music className="w-3.5 h-3.5 text-[#78350F]" />
                <span>Armonía Acústica de Fondo (Tónica Re)</span>
              </div>
              <button
                onClick={toggleAmbientDrone}
                className={`px-3 py-1 text-xs font-medium rounded cursor-pointer transition-colors ${
                  ambientDroneOn
                    ? 'bg-[#78350F] text-white'
                    : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                }`}
              >
                {ambientDroneOn ? 'Activada' : 'Activar'}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Active Recital Stage & Synchronized Poetic Text */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-stone-200">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono-tabular text-stone-500 mb-1">
                  <span>LIBRO {selectedChapter.bookNumber}</span>
                  <span aria-hidden="true">·</span>
                  <span>PÁGINA {selectedChapter.pdfPage} DEL PDF</span>
                  <span aria-hidden="true">·</span>
                  <span>ACENTO ESPAÑOL DE ESPAÑA (es-ES)</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-display font-semibold text-stone-900">
                  {selectedChapter.titleEs}
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  {selectedChapter.subtitleEs}
                </p>
              </div>

              <button
                onClick={() => onOpenPdfPage(selectedChapter.pdfPage)}
                className="px-3 py-1.5 text-xs font-medium border border-stone-300 hover:border-stone-800 rounded flex items-center gap-1.5 text-stone-700 cursor-pointer shrink-0"
              >
                <FileText className="w-3.5 h-3.5 text-[#78350F]" />
                <span>Ver Pág. {selectedChapter.pdfPage} en PDF</span>
              </button>
            </div>

            {/* Audio Controls Bar */}
            <div className="my-6 bg-[#FBF9F5] border border-stone-200 p-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePlayPause}
                  disabled={isGeneratingAi}
                  className="px-5 py-2.5 bg-[#78350F] hover:bg-stone-900 disabled:opacity-60 text-white text-xs font-medium rounded flex items-center gap-2 transition-colors cursor-pointer"
                >
                  {isGeneratingAi ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Generando Voz en Español de España (es-ES)...</span>
                    </>
                  ) : isPlaying ? (
                    <>
                      <Pause className="w-4 h-4" />
                      <span>Pausar Recitación</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>Escuchar en Español de España (es-ES)</span>
                    </>
                  )}
                </button>

                {isPlaying && (
                  <button
                    onClick={stopAllPlayback}
                    className="p-2.5 border border-stone-300 hover:border-stone-800 text-stone-700 rounded cursor-pointer"
                    title="Detener"
                  >
                    <Square className="w-4 h-4" />
                  </button>
                )}
              </div>

              {audioUrl && (
                <a
                  href={audioUrl}
                  download={`${selectedChapter.id}_${voicePersona}_es-ES.wav`}
                  className="px-3.5 py-2 text-xs font-medium bg-[#F3EFE6] hover:bg-stone-200 text-stone-900 rounded flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#78350F]" />
                  <span>Descargar Audiolibro (.WAV es-ES)</span>
                </a>
              )}
            </div>

            {statusMessage && (
              <div className="mb-4 flex items-center gap-2 text-xs text-[#78350F] font-medium">
                <Volume2 className="w-4 h-4 shrink-0" />
                <span>{statusMessage}</span>
              </div>
            )}

            {audioUrl && (
              <audio
                ref={audioRef}
                src={audioUrl}
                onTimeUpdate={handleTimeUpdate}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => {
                  setIsPlaying(false);
                  setActiveVerseIndex(-1);
                  setStatusMessage('Recitación en Español de España finalizada.');
                }}
                controls
                className="w-full h-10 mb-6"
              />
            )}

            {/* Poetic Verses Scrollable Reading Pane */}
            <div className="bg-[#FBF9F5] border border-stone-200 p-6 max-h-[420px] overflow-y-auto space-y-4">
              <div className="text-xs uppercase tracking-widest text-stone-400 pb-2 border-b border-stone-200">
                Texto Poético en Español de España (Traducción Lírica del Texto de Whinfield)
              </div>

              {selectedChapter.poeticVersesEs.map((verse, idx) => {
                const isCurrentVerse = activeVerseIndex === idx;
                return (
                  <p
                    key={idx}
                    className={`font-display text-lg lg:text-xl leading-relaxed transition-colors p-2 rounded ${
                      isCurrentVerse
                        ? 'bg-[#78350F]/10 text-[#78350F] font-semibold'
                        : 'text-stone-800'
                    }`}
                  >
                    {verse}
                  </p>
                );
              })}

              <div className="pt-6 mt-6 border-t border-stone-200">
                <div className="text-xs uppercase tracking-widest text-stone-400 mb-3">
                  Versos Originales en Inglés (Traducción de E. H. Whinfield, 1898)
                </div>
                <div className="space-y-2">
                  {selectedChapter.poeticVersesEn.map((vEn, idx) => (
                    <p
                      key={idx}
                      className="font-prose italic text-xs text-stone-500 leading-relaxed"
                    >
                      {vEn}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
