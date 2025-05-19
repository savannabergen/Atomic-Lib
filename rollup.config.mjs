import path from "path";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import alias from "@rollup/plugin-alias";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/atomic-lib.js",
      format: "cjs",
    },
    {
      file: "dist/atomic-lib.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    alias({
      entries: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "src"),
        },
      ],
    }),
    typescript({
      jsx: "react-jsx",
      declaration: true,
      declarationDir: "dist/types",
    }),
    resolve(),
    commonjs(),
  ],
  external: ["react", "react-dom", "react/jsx-runtime"],
};
