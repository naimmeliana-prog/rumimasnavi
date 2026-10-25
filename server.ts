import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '5mb' }));

  // Server-side Gemini TTS route strictly configured with languageCode: 'es-ES' (Castilian Spanish from Spain)
  app.post('/api/tts', async (req, res) => {
    try {
      const { text, voiceName = 'Charon', stylePrompt } = req.body;
      if (!text || typeof text !== 'string') {
        res.status(400).json({ error: 'Se requiere el texto para narrar.' });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        res.status(503).json({
          error: 'Clave GEMINI_API_KEY no disponible en el servidor.',
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
        // Use flagship voice design model gemini-3.8-flash-tts with explicit languageCode: 'es-ES'
        response = await ai.models.generateContent({
          model: 'gemini-3.8-flash-tts',
          contents: [
            {
              role: 'user',
              parts: [
                {
                  text,
                  // @ts-ignore - speechMetadata supported by Gemini 3.8 TTS
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
      } catch (innerErr) {
        // Fallback to lite TTS still enforcing languageCode: 'es-ES'
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

      res.json({
        audioBase64: base64Audio,
        mimeType,
        voiceName: chosenVoice,
        languageCode: 'es-ES'
      });
    } catch (error: any) {
      console.error('Error en /api/tts:', error?.message || error);
      res.status(500).json({
        error: error?.message || 'Error al generar la voz poética en es-ES.',
        fallback: true
      });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
