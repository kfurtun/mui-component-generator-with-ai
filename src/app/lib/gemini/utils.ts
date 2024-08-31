export const normalizeGeminiResponse = (response: string): string => {
  // Step 1: Remove all import statements
  let code = response
    .replace(/import\s+\{[^}]+\}\s+from\s+['"][^'"]+['"];\s*/gm, '')
    .replace(/import\s+[\w\s,{}*]+from\s+['"][^'"]+['"];\s*/g, '');

  // Step 2: Remove all export statements
  code = code
    .replace(/export\s+default\s+.*?;\s*/, '')
    .replace(/export\s+\{\s*.*?\s*\};\s*/, '');

  return code.trim();
};

export const removeBackticksAndGetLanguage = (
  response: string
): { language: string; code: string } => {
  const backtickRegex = /```(\w+)\n([\s\S]+?)\n```/g;
  const matches = backtickRegex.exec(response);
  if (matches) {
    const language = matches[1];
    const code = matches[2].replace(/`/g, '');
    return { language, code };
  }
  return { language: '', code: '' };
};

export const constantPrompts = [
  `Always use Material-UI components for building the UI.`,
  `Don't give any explanation, just generate code`,
  `Always name the main component as "DynamicComponent"`,
  `Don't use any export statements`,
];
