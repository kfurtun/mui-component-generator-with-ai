import { NextRequest, NextResponse } from 'next/server';
import { runAi } from '@/app/lib/gemini/gemini';
import {
  normalizeGeminiResponse,
  removeBackticksAndGetLanguage,
} from '@/app/lib/gemini/utils';

export async function POST(req: NextRequest) {
  try {
    const { prompt, max_tokens = 1000 } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { success: false, error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const result = await runAi(prompt);
    const data = result.text();
    const normalizedData = normalizeGeminiResponse(data);
    const rawData = removeBackticksAndGetLanguage(data);

    return NextResponse.json(
      { success: true, normalizedData, rawData },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: (error as Error).message || 'An error occurred',
      },
      { status: 500 }
    );
  }
}
