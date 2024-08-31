import { htmlBase } from './htmlBase';
import { type ImportsMap } from './extractImports';

interface DynamicComponentRendererProps {
  code: string;
  imports: ImportsMap;
}

const DynamicComponentRenderer = ({
  code,
  imports,
}: DynamicComponentRendererProps) => {
  const srcDoc = htmlBase(code, imports);

  return (
    <iframe
      title="MUI Component"
      style={{
        border: 'solid 1px black',
        height: '500px',
        flex: 1,
      }}
      srcDoc={srcDoc}
    />
  );
};

export default DynamicComponentRenderer;
