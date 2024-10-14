import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Include browser globals if needed
        ...globals.node,    // Include Node.js globals
      },
      parserOptions: {
        ecmaVersion: 12,
        sourceType: "module", 
      },
    },
  },
  pluginJs.configs.recommended,
];
