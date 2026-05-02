import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/firemote-card.ts',
  output: {
    file: 'dist/firemote-card.js',
    format: 'esm',
    sourcemap: false,
  },
  plugins: [
    resolve({ browser: true }),
    commonjs(),
    json(),
    typescript({ tsconfig: './tsconfig.json' }),
    terser(),
  ],
};
