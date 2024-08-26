import { muiComponents } from './muiComponents';
import { reactComponents } from './reactComponents';

export const htmlBase = (code: string) => {
  return `<html>
      <head>
        <script src="https://unpkg.com/react/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/@mui/material@5.0.0/umd/material-ui.development.js"></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body>
        <div id="root"></div>

        <script type="text/babel">
       
          ${muiComponents}
          ${reactComponents}

          ${code}

          const rootElement = document.getElementById('root'); const root =
          ReactDOM.createRoot(rootElement); root.render(
          <div>
            <CssBaseline />
            {React.createElement(DynamicComponent)}
          </div>
          );
        </script>
      </body>
    </html>`;
};
