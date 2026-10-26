import { GoogleGenAI } from '@google/genai';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Método no permitido. Usa POST.' });
    return;
  }

  try {
    const { text, voiceName = 'Charon', stylePrompt } = req.body || {};
    if (!text || typeof text !== 'string') {
      res.status(400).json({ error: 'Se requiere el texto para narrar.' });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      res.status(503).json({
        error:
          'Configura la variable de entorno GEMINI_API_KEY en el panel de tu proyecto en Vercel (Settings > Environment Variables).',
        fallback: true
      });
      return;
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });

    const validVoices = ['Charon', 'Fenrir', 'Puck', 'Kore', 'Zephyr'];
    const chosenVoice = validVoices.includes(voiceName) ? voiceName : 'Charon';

    const castilianPoeticStyle =
      stylePrompt ||
      'Native Castilian Spanish speaker from Madrid, Spain (es-ES, Peninsular Spanish with strict distinción of z and ce/ci as interdental theta /θ/, and apical s). Deep, warm, poetic male baritone voice reciting classical mystical Sufi poetry slowly with reverent pauses and emotional depth.';

    let response;
    try {
      response = await ai.models.generateContent({
        model: 'gemini-3.8-flash-tts',
        contents: [
          {
            role: 'user',
            parts: [
              {
                text,
                // @ts-ignore
                speechMetadata: {
                  style: castilianPoeticStyle
                }
              }
            ]
          }
        ],
        config: {
          responseModalities: ['AUDIO'],
          speechConfig: {
            languageCode: 'es-ES',
            voiceConfig: {
              prebuiltVoiceConfig: {
                voiceName: chosenVoice
              }
            }
          }
        }
      });
    } catch {
      response = await ai.models.generateContent({
        model: 'gemini-3.8-flash-lite-tts',
        contents: [
          {
            role: 'user',
            parts: [
              {
                text,
                // @ts-ignore
                speechMetadata: {
                  style: castilianPoeticStyle
                }
              }
            ]
          }
        ],
        config: {
          responseModalities: ['AUDIO'],
          speechConfig: {
            languageCode: 'es-ES',
            voiceConfig: {
              prebuiltVoiceConfig: {
                voiceName: chosenVoice
              }
            }
          }
        }
      });
    }

    const part = response.candidates?.[0]?.content?.parts?.[0];
    const base64Audio = part?.inlineData?.data;
    const mimeType = part?.inlineData?.mimeType || 'audio/wav';

    if (!base64Audio) {
      res.status(500).json({
        error: 'No se recibió audio del modelo TTS.',
        fallback: true
      });
      return;
    }

    res.status(200).json({
      audioBase64: base64Audio,
      mimeType,
      voiceName: chosenVoice,
      languageCode: 'es-ES'
    });
  } catch (error: any) {
    console.error('Error en función serverless /api/tts:', error?.message || error);
    res.status(500).json({
      error: error?.message || 'Error al generar la voz poética en es-ES.',
      fallback: true
    });
  }
}
