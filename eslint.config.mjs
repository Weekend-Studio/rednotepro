import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable unused variable warnings
      "@typescript-eslint/no-unused-vars": "off",
      
      // Disable Google Analytics script warning
      "@next/next/next-script-for-ga": "off",
      
      // Disable HTML link warning
      "@next/next/no-html-link-for-pages": "off",
      
      // Disable unescaped entities warning
      "react/no-unescaped-entities": "off",
      
      // Disable react-hooks exhaustive-deps warnings
      "react-hooks/exhaustive-deps": "off"
    }
  }
];

export default eslintConfig;
