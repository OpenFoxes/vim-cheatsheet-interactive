import pluginJs from "@eslint/js";
import esLintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { ignores: ["**/*.{js,mjs,cjs}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  esLintConfigPrettier,
];
