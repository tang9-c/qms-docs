# QMS 帮助文档网站创建计划

## 背景

当前项目 `qms-docs/fmea-docs/` 目录下已有大量 Markdown 格式的 FMEA 帮助文档内容，包含以下模块：
- **getting-started** (入门指南: 3篇)
- **feature-guide** (功能指南: 10篇)
- **collaboration** (协同与集成: 2篇)
- **knowledgebase** (知识库: 3篇)
- **support** (支持: 2篇)

总计约 20 篇文档，结构清晰，适合迁移到 VitePress。

## 需求分析

1. **多模块架构**：总首页 `/`，每个模块有独立首页（如 `/fmea/`、`/spc/`）
2. **多语言支持**：中英文切换
3. **UI 规范**：必须遵循 `UI-design-spec.md` 和 `交互-design-spec.md`

## 推荐方案

**VitePress + Vue i18n + 静态网站托管 (Vercel/Netlify)**

### 方案优势
- 轻量级、构建速度快
- 默认主题美观，支持响应式
- 内置全文搜索
- 支持国际化 (Vue i18n)
- 与现有 Markdown 格式完全兼容

## 目录结构

```
qms-docs/
├── docs/                         # VitePress 文档根目录
│   ├── .vitepress/
│   │   ├── config.ts            # VitePress 主配置
│   │   └── theme/
│   │       ├── index.ts         # 主题配置 + 多语言
│   │       ├── style.css       # 自定义样式（遵循设计规范）
│   │       └── components/     # 自定义组件
│   ├── public/                  # 静态资源
│   │   └── images/             # 文档图片
│   ├── locales/                # 多语言配置
│   │   ├── en.json             # 英文翻译
│   │   └── zh.json             # 中文翻译
│   ├── fmea/                   # FMEA 模块
│   │   ├── index.md            # FMEA 首页 (/fmea/)
│   │   ├── getting-started/    # 入门指南
│   │   ├── feature-guide/      # 功能指南
│   │   ├── collaboration/       # 协同与集成
│   │   ├── knowledgebase/      # 知识库
│   │   └── support/            # 支持
│   ├── spc/                    # SPC 模块（未来）
│   │   └── index.md
│   └── index.md                # 总首页 (/)
├── package.json
└── fmea-docs/                  # 现有文档（可保留或迁移）
```

## 设计规范应用

### 色彩系统
| 元素 | 色值 |
|------|------|
| 主色 Primary | `#0062FF` |
| 成功 | `#00BF7F` |
| 警告 | `#FB9D30` |
| 危险 | `#FF5340` |
| 页面背景 | `#F4F7FA` |
| 卡片背景 | `#FFFFFF` |
| 主要文字 | `rgba(0,0,0,0.85)` |
| 次级文字 | `rgba(0,0,0,0.65)` |

### 字体与间距
- 中文字体: PingFang SC
- 字号: 16px(标题), 14px(正文), 12px(小号)
- 页面/卡片内边距: 24px
- 卡片圆角: 4px
- 按钮圆角: 2px

## 实施步骤

### 1. 初始化 VitePress 项目

```bash
cd qms-docs
npm init -y
npm install -D vitepress vue vue-i18n@next
npx vitepress init
```

### 2. 安装依赖

```bash
npm install -D @vitejs/plugin-vue unocss @unocss/preset-icons @iconify-json/ph
```

### 3. 配置 UnoCSS (docs/.vitepress/unocss.config.ts)

```typescript
import { defineConfig, presetUno, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle'
      }
    })
  ]
})
```

### 4. 配置 VitePress (docs/.vitepress/config.ts)

```typescript
import { defineConfig } from 'vitepress'
import { resolve } from 'path'

export default defineConfig({
  title: "QMS 帮助中心",
  description: "质量管理系统帮助文档",
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'QMS 帮助中心',
      description: '质量管理系统帮助文档'
    },
    '/en/': {
      lang: 'en-US',
      title: 'QMS Help Center',
      description: 'Quality Management System Documentation'
    }
  },
  themeConfig: {
    logo: '/images/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: 'FMEA', link: '/fmea/' },
      { text: 'SPC', link: '/spc/' },
      { text: 'English', link: '/en/' }
    ],
    sidebar: {
      '/fmea/': [
        {
          text: 'FMEA',
          items: [
            { text: '什么是 FMEA', link: '/fmea/getting-started/what-is-fmea' },
            { text: '快速入门', link: '/fmea/getting-started/quick-start' },
            { text: '核心界面', link: '/fmea/getting-started/core-interface' }
          ]
        },
        {
          text: '功能指南',
          items: [
            { text: '基础数据配置', link: '/fmea/feature-guide/basic-data' },
            { text: '项目创建与管理', link: '/fmea/feature-guide/project-creation' },
            { text: '结构分析', link: '/fmea/feature-guide/structure-analysis' },
            { text: '功能分析', link: '/fmea/feature-guide/function-analysis' },
            { text: '失效分析', link: '/fmea/feature-guide/failure-analysis' },
            { text: '风险分析', link: '/fmea/feature-guide/risk-analysis' },
            { text: '优化措施', link: '/fmea/feature-guide/optimization' },
            { text: '评审与发布', link: '/fmea/feature-guide/review-release' },
            { text: '变更管理', link: '/fmea/feature-guide/change-management' },
            { text: 'FMEA 看板', link: '/fmea/feature-guide/dashboard' }
          ]
        },
        {
          text: '协同与集成',
          items: [
            { text: '团队协同', link: '/fmea/collaboration/team-collaboration' },
            { text: 'QCP', link: '/fmea/collaboration/qcp' }
          ]
        },
        {
          text: '知识库',
          items: [
            { text: '基础 FMEA', link: '/fmea/knowledgebase/basic-fmea' },
            { text: '经验案例库', link: '/fmea/knowledgebase/case-library' },
            { text: '批量导入/导出', link: '/fmea/knowledgebase/import-export' }
          ]
        },
        {
          text: '支持',
          items: [
            { text: '常见问题', link: '/fmea/support/faq' },
            { text: '支持与联系', link: '/fmea/support/contact' }
          ]
        }
      ],
      '/spc/': [
        // SPC 模块侧边栏（待添加）
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-repo' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Feigenbaum'
    }
  }
})
```

### 5. 自定义主题与多语言 (docs/.vitepress/theme/index.ts)

```typescript
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import 'virtual:uno.css'
import './style.css'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 自定义布局插槽
    })
  },
  enhanceApp({ app }) {
    // 注册全局组件
  }
} satisfies Theme
```

### 6. 图标使用

在 Markdown 中使用 UnoCSS Icons：

```markdown
# 使用方式

- 首页: `i-carbon-home`
- 文档: `i-carbon-document`
- 设置: `i-carbon-settings`
- 用户: `i-carbon-user`
- 搜索: `i-carbon-search`
- 菜单: `i-carbon-menu`
- 关闭: `i-carbon-close`
- 警告: `i-carbon-warning`
- 成功: `i-carbon-checkmark-filled`
- 错误: `i-carbon-error-filled`
```

常用图标映射（参考设计规范）：

| 场景 | 图标 |
|------|------|
| 导航/首页 | `i-carbon-home` |
| 文档/指南 | `i-carbon-document` |
| 设置 | `i-carbon-settings` |
| 用户 | `i-carbon-user-avatar` |
| 搜索 | `i-carbon-search` |
| 菜单 | `i-carbon-menu` |
| 成功 | `i-carbon-checkmark-filled` |
| 警告 | `i-carbon-warning` |
| 错误 | `i-carbon-close-filled` |
| 信息 | `i-carbon-information` |

### 7. 自定义样式 (docs/.vitepress/theme/style.css)

```css
:root {
  /* 主色 */
  --vp-c-primary: #0062FF;
  --vp-c-primary-light: #3381FF;
  --vp-c-primary-dark: #004ECC;
  --vp-c-primary-soft: rgba(0, 98, 255, 0.10);

  /* 功能色 */
  --vp-c-success: #00BF7F;
  --vp-c-warning: #FB9D30;
  --vp-c-danger: #FF5340;

  /* 文字色 */
  --vp-c-text-1: rgba(0, 0, 0, 0.85);
  --vp-c-text-2: rgba(0, 0, 0, 0.65);
  --vp-c-text-3: rgba(0, 0, 0, 0.45);

  /* 背景色 */
  --vp-c-bg: #F4F7FA;
  --vp-c-bg-soft: #FFFFFF;
  --vp-c-bg-light: #F8FAFD;

  /* 圆角 */
  --vp-button-brand-border-radius: 2px;
  --vp-button-alt-border-radius: 2px;
  --vp-code-block-bg: #F5F7FA;
}

/* 卡片样式 */
.vp-doc div[class*='container'] {
  background: #FFFFFF;
  border-radius: 4px;
  box-shadow: 0px 12px 32px 4px rgba(0,0,0,0.04), 0px 8px 20px rgba(0,0,0,0.08);
}

/* 按钮样式 */
.VPButton.medium {
  border-radius: 2px;
  height: 32px;
  padding: 6px 16px;
}

/* 侧边栏样式 */
.VPSidebar {
  background: #FFFFFF;
}

/* 导航栏样式 */
.VPNavBar {
  background: #FFFFFF;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
```

### 8. 多语言切换

使用 VitePress 内置的 locale 配置实现中英文切换：

- 中文: `/`
- 英文: `/en/`

语言切换通过导航栏链接实现。

### 9. 迁移现有文档

#### 9.1 迁移文档内容

将 `qms-docs/fmea-docs/` 下的内容迁移到 `docs/fmea/`：

```
fmea-docs/getting-started/*.md   → docs/fmea/getting-started/
fmea-docs/feature-guide/*.md     → docs/fmea/feature-guide/
fmea-docs/collaboration/*.md     → docs/fmea/collaboration/
fmea-docs/knowledgebase/*.md     → docs/fmea/knowledgebase/
fmea-docs/support/*.md           → docs/fmea/support/
```

#### 9.2 迁移图片资源

```bash
# 1. 创建目标目录
mkdir -p docs/public/images

# 2. 移动图片
cp -r qms-docs/fmea-docs/images/* docs/public/images/

# 3. 修改文档中的图片路径
# 原路径: ![图片](./images/logo.png)
# 新路径: ![图片](/images/logo.png)
```

#### 9.3 文档 Frontmatter

为每个文档添加 frontmatter：

```yaml
---
title: 文档标题
description: 文档描述
---
```

### 10. 创建各模块首页

- **总首页** (`docs/index.md`): 模块选择入口
- **FMEA 首页** (`docs/fmea/index.md`): FMEA 模块介绍
- **SPC 首页** (`docs/spc/index.md`): SPC 模块入口（预留）

### 11. 配置 package.json

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
}
```

### 12. 本地预览

```bash
npm run docs:dev
```

### 13. 部署配置

#### Vercel 部署（推荐）
创建 `vercel.json`:
```json
{
  "框架": "vitepress",
  "buildCommand": "npm run docs:build",
  "outputDirectory": "docs/.vitepress/dist"
}
```

## 关键文件

| 文件路径 | 说明 |
|---------|------|
| `docs/.vitepress/config.ts` | VitePress 主配置（含多语言） |
| `docs/.vitepress/theme/index.ts` | 主题配置 |
| `docs/.vitepress/theme/style.css` | 自定义样式（遵循设计规范） |
| `docs/index.md` | 总首页 |
| `docs/fmea/index.md` | FMEA 模块首页 |
| `docs/public/images/` | 文档图片资源 |

## 验证方式

1. 本地运行 `npm run docs:dev`，访问 `http://localhost:5173`
2. 检查总首页模块入口是否正常显示
3. 检查 `/fmea/` 模块首页和侧边栏
4. 检查语言切换功能（中英文）
5. 检查所有图片是否正确显示
6. 部署到 Vercel/Netlify 后验证生产环境

## 待添加模块

- **SPC**: 创建 `docs/spc/` 目录和首页
- 其他模块按相同模式添加
