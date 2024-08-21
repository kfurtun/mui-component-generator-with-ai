import { htmlBase } from './htmlBase';

interface DynamicComponentRendererProps {
  code: string;
}

const DynamicComponentRenderer = ({ code }: DynamicComponentRendererProps) => {
  const srcDoc = htmlBase(code);

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
