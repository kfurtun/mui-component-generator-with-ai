export const normalizeGeminiResponse = (response: string): string => {
  // Step 1: Remove all import statements
  let code = response.replace(/import\s+.*?;?\s*\n/g, '');

  // Step 2: Remove all export statements
  code = code
    .replace(/export\s+default\s+.*?;\s*/, '')
    .replace(/export\s+\{\s*.*?\s*\};\s*/, '');
  const startIndex = code.indexOf('{');
  const endIndex = code.lastIndexOf('}');

  // Extract the string between the first '{' and last '}'
  if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    return code.substring(startIndex + 1, endIndex).trim();
  }

  // If no matching brackets found, return an empty string or handle it as needed
  return '';
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
  `Don't use useState or any other hooks directly, always use them with 'React.' prefix.`,
  `Always use Material-UI components for building the UI.`,
  `Don't give any explanation, just generate code`,
];
