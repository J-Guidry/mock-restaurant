import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: "src/main.js",
  output: {
    dir: 'dist/js',
    format: 'umd'
  },
  plugins: [ commonjs(), resolve() ]
};