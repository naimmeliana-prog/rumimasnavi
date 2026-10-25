/**
 * Helper to select the best Peninsular Spanish (Español de España, es-ES) male voice
 * available in the browser's SpeechSynthesis API.
 */
export function getCastilianMaleVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return null;
  }

  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  // 1. Strict filter for Spain Spanish (es-ES or es_ES or name containing Spain / España)
  const spainVoices = voices.filter((v) => {
    const lang = v.lang.replace('_', '-').toLowerCase();
    const name = v.name.toLowerCase();
    return (
      lang === 'es-es' ||
      name.includes('spain') ||
      name.includes('españa') ||
      name.includes('castellano') ||
      name.includes('jorge') ||
      name.includes('alvaro') ||
      name.includes('álvaro') ||
      name.includes('pablo')
    );
  });

  // Known male Peninsular Spanish voice identifiers across Chrome, Edge, Safari, macOS, Windows
  const maleSpainRegex =
    /jorge|alvaro|álvaro|pablo|dario|darío|arnau|teo|male|hombre|masculin|eloy|enrique/i;

  // 2. First priority: Male voice strictly from Spain (es-ES)
  const maleSpainVoice = spainVoices.find((v) => maleSpainRegex.test(v.name));
  if (maleSpainVoice) return maleSpainVoice;

  // 3. Second priority: Any es-ES voice (e.g. "Google español" which is es-ES Castilian)
  const exactEsEs = spainVoices.find(
    (v) => v.lang.replace('_', '-').toLowerCase() === 'es-es'
  );
  if (exactEsEs) return exactEsEs;

  if (spainVoices.length > 0) return spainVoices[0];

  // 4. Fallback: Any Spanish voice if the OS has no es-ES installed
  const anySpanish = voices.find((v) =>
    v.lang.toLowerCase().startsWith('es')
  );
  return anySpanish || null;
}

export function getAllSpainVoices(): SpeechSynthesisVoice[] {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return [];
  }
  const voices = window.speechSynthesis.getVoices();
  const spain = voices.filter((v) => {
    const lang = v.lang.replace('_', '-').toLowerCase();
    const name = v.name.toLowerCase();
    return (
      lang === 'es-es' ||
      name.includes('spain') ||
      name.includes('españa')
    );
  });
  return spain.length > 0
    ? spain
    : voices.filter((v) => v.lang.toLowerCase().startsWith('es'));
}
