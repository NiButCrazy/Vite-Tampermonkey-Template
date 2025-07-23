import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import monkey from 'vite-plugin-monkey'
import { resolve } from 'path'

// 设置使用的浏览器
process.env.BROWSER = 'chrome'

// https://cn.vitejs.dev/config/
export default defineConfig({
  css: {
    devSourcemap: true,
    modules: {
      localsConvention: 'dashesOnly',
      generateScopedName: '[local]-[hash:5]'
    }
  },
  resolve: {
    alias: {
      '@styles': resolve(__dirname, './src/assets/styles'),
      '@components': resolve(__dirname, './src/components'),
      '@assets': resolve(__dirname, './src/assets'),
      '@global': resolve(__dirname, './src/global'),
      '@hooks': resolve(__dirname, './src/global')
    }
  },
  plugins: [
    react(),
    monkey({
      entry: 'src/main.tsx',
      server: {
        prefix: name => `开发版：${ name }.user.js`,
      },
      userscript: {
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'vite-tampermonkey-template',
        description: '一个脚本测试模板',
        author: 'Ni But Crazy',
        match: [
          '*://www.google.com',
          '*://www.google.com*',  // 这种奇妙的语法油猴不适用，但脚本猫(ScriptCat)可以匹配
        ]
      },
      build: {
        externalGlobals: {
          'react': [ 'React', () =>
            'https://cdn.jsdelivr.net/npm/umd-react/dist/react.production.min.js' ],
          'react-dom/client': [ 'ReactDOM', () =>
            'https://cdn.jsdelivr.net/npm/umd-react/dist/react-dom.production.min.js' ]
        },
      },
    }),
  ],
})
