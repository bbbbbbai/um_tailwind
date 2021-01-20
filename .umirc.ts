import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    BUILD_TIME: new Date().toLocaleString(),
  },
  dynamicImport: {
    loading: '@/components/PageLoading',
  },
  esbuild: {},
  extraPostCSSPlugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({ stage: 3 }),
  ],
  favicon: `/favicon.jpg`,
  hash: true,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  title: 'UT3',
});
