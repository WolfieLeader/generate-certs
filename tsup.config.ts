import { defineConfig, type Options } from 'tsup';

export default defineConfig((options: Options) => ({
  name: 'generate-certs',
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
  sourcemap: true,
  treeshake: true,
  splitting: false,
  minify: true,
  tsconfig: 'tsconfig.json',
  skipNodeModulesBundle: true,
  external: ['express', 'cookie-parser'],
  ...options,
}));
