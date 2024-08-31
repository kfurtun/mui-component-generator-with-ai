export type ImportsMap = { [key: string]: string[] };

function extractImports(code: string): ImportsMap {
  const componentMap: ImportsMap = {};

  const importRegex = /import\s+(\{[^}]+\}|\w+)\s+from\s+['"]([^'"]+)['"];?/g;

  let match;
  while ((match = importRegex.exec(code)) !== null) {
    const importedComponents = match[1]
      .replace(/\{|\}/g, '')
      .split(',')
      .map((c) => c.trim());
    const modulePath = match[2];

    let category: string;
    if (modulePath.startsWith('@mui/material')) {
      category = 'Mui';
    } else if (modulePath.startsWith('@mui/icons-material')) {
      category = 'MuiIcons';
    } else {
      category = 'Other';
    }

    if (!componentMap[category]) {
      componentMap[category] = [];
    }

    importedComponents.forEach((component) => {
      let componentName = modulePath.split('/').pop();
      if (componentName === 'material' || componentName === 'icons-material') {
        componentName = component;
      }
      if (component !== componentName) {
        componentMap[category].push(`${componentName}:${component}`);
      } else {
        componentMap[category].push(component);
      }
    });
  }

  return componentMap;
}
export default extractImports;
