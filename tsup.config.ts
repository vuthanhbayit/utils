import type { Options } from 'tsup'
export const tsup: Options = {
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: true,
  entryPoints: ['src/*.ts'],
  format: ['esm'],
}
