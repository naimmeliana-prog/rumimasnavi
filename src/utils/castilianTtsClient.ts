// Client utility to request and cache Castilian Spanish (es-ES) WAV audio from /api/tts

const audioBlobUrlCache = new Map<string, string>();
let activeGlobalAudio: HTMLAudioElement | null = null;

export function stopGlobalCastilianAudio() {
  if (activeGlobalAudio) {
    activeGlobalAudio.pause();
    activeGlobalAudio.currentTime = 0;
    activeGlobalAudio = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

export async function generateCastilianWavUrl(
  cacheKey: string,
  text: string,
  voiceName: 'Charon' | 'Fenrir' | 'Puck' = 'Charon',
  stylePrompt?: string
): Promise<string> {
  const fullKey = `${cacheKey}::${voiceName}`;
  const cached = audioBlobUrlCache.get(fullKey);
  if (cached) {
    return cached;
  }

  const response = await fetch('/api/tts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text,
      voiceName,
      stylePrompt:
        stylePrompt ||
        'Native Castilian Spanish speaker from Madrid, Spain (es-ES, Peninsular Spanish with strict distinción of z and ce/ci as interdental theta /θ/, and apical s). Deep, warm, poetic male baritone voice reciting classical mystical Sufi poetry slowly with reverent pauses and emotional depth.'
    })
  });

  const data = await response.json();
  if (!response.ok || !data.audioBase64) {
    throw new Error(data.error || 'No se pudo generar el audio en Español de España (es-ES).');
  }

  const binary = atob(data.audioBase64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  const blob = new Blob([bytes], { type: data.mimeType || 'audio/wav' });
  const blobUrl = URL.createObjectURL(blob);
  audioBlobUrlCache.set(fullKey, blobUrl);
  return blobUrl;
}

export async function playCastilianStoryAudio(
  cacheKey: string,
  text: string,
  onStart?: () => void,
  onEnd?: () => void,
  onError?: (msg: string) => void
) {
  try {
    stopGlobalCastilianAudio();
    const url = await generateCastilianWavUrl(cacheKey, text, 'Charon');
    const audio = new Audio(url);
    activeGlobalAudio = audio;
    audio.onplay = () => onStart?.();
    audio.onended = () => {
      activeGlobalAudio = null;
      onEnd?.();
    };
    audio.onerror = () => {
      activeGlobalAudio = null;
      onError?.('Error al reproducir el audio.');
    };
    await audio.play();
  } catch (err: any) {
    onError?.(err?.message || 'Error al generar el audio en Español de España.');
  }
}
