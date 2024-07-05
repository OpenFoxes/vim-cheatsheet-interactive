import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import esLintConfigPrettier from "eslint-config-prettier";

export default [
  { ignores: ["**/*.{js,mjs,cjs}"]},
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  esLintConfigPrettier,
];
