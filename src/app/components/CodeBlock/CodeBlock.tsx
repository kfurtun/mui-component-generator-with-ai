import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
  codeString: string;
  language?: string;
}

const CodeBlock = ({ codeString, language = 'javascript' }: CodeBlockProps) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={tomorrow}
      customStyle={{ flex: 1 }}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
