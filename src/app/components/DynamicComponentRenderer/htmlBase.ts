import { reactComponents } from './reactComponents';
import { type ImportsMap } from './extractImports';

export const htmlBase = (code: string, imports: ImportsMap) => {
  return `<html>
      <head>
        <script src="https://unpkg.com/react/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
        <script src="/js/Mui.bundle.js"></script>
        <script src="/js/MuiIcons.bundle.js"></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body>
        <div id="root"></div>

        <script type="text/babel">
         ${reactComponents}
         const {CssBaseline}=Mui.default;
         
         ${imports?.Mui && `const {${imports.Mui}}=Mui.default;`}
         ${imports?.MuiIcons && `const {${imports.MuiIcons}}=MuiIcons.default;`}

          ${code}

          const rootElement = document.getElementById('root'); 
          const root = ReactDOM.createRoot(rootElement); 
          root.render(
          <div>
            <CssBaseline />
            {React.createElement(DynamicComponent)}
          </div>
          );
        </script>
      </body>
    </html>`;
};
