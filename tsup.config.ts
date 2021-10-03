import type { Options } from 'tsup'
export const tsup: Options = {
  splitting: false,
  sourcemap: 'external',
  clean: true,
  dts: true,
  entryPoints: ['src/*.ts'],
  format: ['esm', 'cjs'],
}
