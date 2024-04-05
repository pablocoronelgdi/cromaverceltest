import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy'
export default {
  input: ['src/index.ts'],
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
    preserveModules: true
  },
  external: ['react/jsx-runtime','react','react-native'],
  plugins: [
    copy({
      targets: [{ src: 'src/assets', dest: 'dist' }]
    }),
    typescript(),
    commonjs()
  ]
}
