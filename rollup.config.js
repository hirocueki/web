import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/loader.js',
  output: {
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js'
  },
  plugins: [svelte(), resolve()]

};
