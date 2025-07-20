# Vite + React + Tampermonkey 创建模板

个人自用模板

## 安装使用
```shell
npm create nbc-app < projectName| 可选 >
```
> 当然也可以直接克隆项目

### 项目简介
- 支持 Tampermonkey、Violentmonkey、Greasemonkey、ScriptCat 等脚本引擎的辅助开发
- 打包自动注入脚本配置头部注释
- 当第一次启动或脚本配置注释改变时自动在默认浏览器打开脚本安装
- 利用 @require 配置库的 CDN 的方案，减少构建脚本大小
- 利用 @resource 配置外部资源 CDN 的方案，额外减少构建脚本大小
- 通过 ESM 导入的方式使用 GM_api，附带类型提示
- 智能收集使用到的 GM_api，自动配置 @grant 注释
- 支持 top level await 和单文件下的 dynamic import
- 预览模式下自动打开浏览器安装构建好的脚本
- 完全的 Typescript 和 Vite 的开发体验，比如模块热替换，秒启动
- [更多配置和使用方法...](https://github.com/lisonge/vite-plugin-monkey/blob/main/README_zh.md)

### 第三方库
- Less - 样式预处理
