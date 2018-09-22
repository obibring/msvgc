module.exports = {
  import: {
    react: () => `import React from "react";`,
    reactOnTypescript: () => `import * as React from "react";`,
    reactNaiveSvg: svgTags => `import { Svg } from "expo";\n\nconst { ${svgTags.join(', ')} } = Svg;`
  },
  componentDeclaration: componentName => `\nconst ${componentName} = props => (`,
  endOfDeclaration: () => `);`,
  exportingString: componentName => `\nexport default ${componentName};`
}
