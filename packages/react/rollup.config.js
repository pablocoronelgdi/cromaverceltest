import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
export default {
  input: ['src/index.ts'],
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
    preserveModules: true
  },
  plugins: [typescript(), commonjs()]
}
