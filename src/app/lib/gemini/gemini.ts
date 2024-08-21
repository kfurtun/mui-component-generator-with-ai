import { GoogleGenerativeAI } from '@google/generative-ai';
import { constantPrompts } from './utils';

const apiKey = process.env.GEMINI_API_KEY!;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
  tools: [
    {
      codeExecution: {},
    },
  ],
});

export async function runAi(text: string) {
  const codeGeneration = await model.generateContent([
    text,
    ...constantPrompts,
  ]);

  return codeGeneration.response;
}
