'use client';

import React, { useState } from 'react';
import DynamicComponentRenderer from '@/app/components/DynamicComponentRenderer';
import CodeBlock from '@/app/components/CodeBlock';
import extractImports from './components/DynamicComponentRenderer/extractImports';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState({ code: '', language: '' });
  const [normalizedAiResponse, setNormalizedAiResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [imports, setImports] = useState({});

  const onPromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };
  const callAi = async () => {
    setLoading(true);
    const response = await fetch('/api/ai/generate-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: prompt,
        // max_tokens: 1000,
      }),
    });

    const result = await response.json();

    setImports(extractImports(result.rawData.code));
    setAiResponse(result.rawData);
    setNormalizedAiResponse(result.normalizedData);
    setLoading(false);
  };

  return (
    <main>
      <div style={{ marginLeft: '100px' }}>
        <textarea onChange={onPromptChange} value={prompt} />
        <button onClick={callAi}> Call AI</button>
        {loading ? (
          <div>...Loading</div>
        ) : normalizedAiResponse ? (
          <div style={{ display: 'flex', width: '100%' }}>
            <CodeBlock
              codeString={aiResponse.code}
              language={aiResponse.language}
            />
            <DynamicComponentRenderer
              code={normalizedAiResponse}
              imports={imports}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
}
