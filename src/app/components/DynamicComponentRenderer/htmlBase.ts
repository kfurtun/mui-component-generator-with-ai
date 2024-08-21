export const htmlBase = (code: string) => {
  return `<html>
      <head>
        <script src="https://unpkg.com/react/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/@mui/material@5.0.0/umd/material-ui.development.js"></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      </head>
      <body>
        <div id="root"></div>

        <script type="text/babel">
          const
          {
            colors,
            CssBaseline,
            ThemeProvider,
            Typography,
            Container,
            createTheme,
            Box,
            SvgIcon,
            Link,
            Button,
            Grid,
            TextField
          }
          = MaterialUI; 

          const DynamicComponent = () =>{${code}};

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
