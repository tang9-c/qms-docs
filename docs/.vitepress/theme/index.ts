import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import 'virtual:uno.css'
import './style.css'
import type { Theme } from 'vitepress'
import HomeFeature from './components/HomeFeature.vue'

// 导入 UnoCSS 自动生成的样式
import '@unocss/reset/tailwind.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 自定义布局插槽
    })
  },
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('HomeFeature', HomeFeature)
  }
} satisfies Theme
