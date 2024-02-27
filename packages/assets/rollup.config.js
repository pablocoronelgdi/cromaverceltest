import typescript from '@rollup/plugin-typescript'
import svg from 'rollup-plugin-svg'

export default {
  input: ['src/index.ts'],
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
    preserveModules: true
  },
  plugins: [typescript(), svg()]
}
