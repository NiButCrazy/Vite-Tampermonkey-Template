import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import monkey, { cdn } from 'vite-plugin-monkey'
import { resolve } from 'path'

// 设置使用的浏览器
process.env.BROWSER = ''

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
      userscript: {
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'vite-tampermonkey-template',
        description: '一个脚本测试模板',
        author: 'Ni But Crazy',
        match: [
          '*://www.google.com.hk'
        ],
      },
      build: {
        externalGlobals: {
          'react': cdn.jsdelivr('React', 'umd/react.production.min.js'),
          'react-dom': cdn.jsdelivr('ReactDOM', 'umd/react-dom.production.min.js')
        },
      },
    }),
  ],
})
