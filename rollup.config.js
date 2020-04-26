import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/main.js",
  output: {
    dir: 'dist/js',
    format: 'umd'
  },
  plugins: [ commonjs(), resolve(), terser()]
};