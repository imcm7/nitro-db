//https://nitro.unjs.io/config
export default defineNitroConfig({
  esbuild: {
    options: {
      tsconfigRaw: {
        compilerOptions: {
          experimentalDecorators: true,
        }
      }
    }
  },
});
