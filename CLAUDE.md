# QMS 帮助文档网站项目

> 本项目为 QMS（质量管理系统）帮助文档网站，使用 VitePress 构建。

## 项目概述

- **技术栈**: VitePress + Vue i18n + UnoCSS
- **部署平台**: Vercel / Netlify
- **当前模块**: FMEA（后续可扩展 SPC 等）
- **语言**: 中文 + 英文

## 目录结构

```
qms-docs/
├── docs/                         # VitePress 文档根目录
│   ├── .vitepress/
│   │   ├── config.ts            # VitePress 主配置
│   │   └── theme/
│   │       ├── index.ts         # 主题配置 + 多语言
│   │       └── style.css       # 自定义样式
│   ├── public/                  # 静态资源
│   │   └── images/             # 文档图片
│   ├── fmea/                   # FMEA 模块
│   │   ├── index.md            # FMEA 首页 (/fmea/)
│   │   ├── getting-started/    # 入门指南
│   │   ├── feature-guide/      # 功能指南
│   │   ├── collaboration/       # 协同与集成
│   │   ├── knowledgebase/      # 知识库
│   │   └── support/            # 支持
│   ├── spc/                    # SPC 模块（未来）
│   └── index.md                # 总首页 (/)
├── plan/                        # 项目计划文档
│   └── qms-help-docs-plan.md
└── qms-docs/                   # 原始文档（待迁移）
    ├── UI-design-spec.md       # UI 设计规范
    ├── 交互-design-spec.md     # 交互设计规范
    └── fmea-docs/              # FMEA 文档内容
```

## 设计规范

所有 UI 和交互设计必须遵循以下规范：

- **UI 设计规范**: `qms-docs/UI-design-spec.md`
- **交互设计规范**: `qms-docs/交互-design-spec.md`

### 关键设计规范速查

#### 色彩系统

| 元素 | 色值 | 用途 |
|------|------|------|
| 主色 Primary | `#0062FF` | 主要按钮、链接、激活状态 |
| 主色悬停 | `#3381FF` | 主色按钮悬停状态 |
| 主色深色 | `#004ECC` | 主色按钮按下状态 |
| 成功 Success | `#00BF7F` | 成功消息、通过状态 |
| 警告 Warning | `#FB9D30` | 警告消息、待处理状态 |
| 危险 Danger | `#FF5340` | 危险操作、失败状态 |
| 页面背景 | `#F4F7FA` | 整个页面底层背景 |
| 卡片背景 | `#FFFFFF` | 卡片、弹窗、输入框 |
| 主要文字 | `rgba(0,0,0,0.85)` | 标题、表格内容 |
| 次级文字 | `rgba(0,0,0,0.65)` | 表单标签、辅助信息 |

#### 字体与间距

- **中文字体**: PingFang SC
- **英文/数字字体**: DIN Alternate Bold
- **字号**: 16px(标题), 14px(正文), 12px(小号)
- **页面/卡片内边距**: 24px
- **卡片圆角**: 4px
- **按钮圆角**: 2px

#### 按钮规范

| 尺寸 | 高度 | 内边距 | 最小宽度 | 圆角 |
|------|------|--------|---------|------|
| Small | 24px | 上下 2px / 左右 8px | 44px | 2px |
| Medium（默认） | 32px | 上下 6px / 左右 16px | 60px | 2px |
| Large | 40px | 上下 8px / 左右 24px | 80px | 2px |

#### 状态标签配方

使用「10% 透明度背景 + 实色文字」配方：

| 状态 | 背景色 | 文字色 |
|------|--------|--------|
| 成功 / 通过 | `rgba(0, 191, 127, 0.10)` | `#00BF7F` |
| 警告 / 待处理 | `rgba(251, 157, 48, 0.10)` | `#FB9D30` |
| 危险 / 失败 | `rgba(255, 83, 64, 0.10)` | `#FF5340` |
| 主色 / 进行中 | `rgba(0, 98, 255, 0.10)` | `#0062FF` |

#### 动效时间

| 动效类型 | 时间 | 缓动函数 |
|--------|------|---------|
| 快速反馈 | 100ms | ease-out |
| 标准过渡 | 200ms | ease-in-out |
| 弹窗打开 | 300ms | ease-in-out |
| 弹窗关闭 | 250ms | ease-out |

## 图标方案

使用 **UnoCSS Icons** (Carbon 图标集)。

### 常用图标

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

### 使用方式

```markdown
<i class="i-carbon-home" />
```

## 路由结构

| 路径 | 说明 |
|------|------|
| `/` | 总首页（模块选择） |
| `/fmea/` | FMEA 模块首页 |
| `/fmea/getting-started/*` | FMEA 入门指南 |
| `/fmea/feature-guide/*` | FMEA 功能指南 |
| `/fmea/collaboration/*` | FMEA 协同与集成 |
| `/fmea/knowledgebase/*` | FMEA 知识库 |
| `/fmea/support/*` | FMEA 支持 |
| `/spc/` | SPC 模块首页（预留） |
| `/en/` | 英文版首页 |

## 开发命令

```bash
# 安装依赖
npm install

# 本地开发
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 关键配置

### VitePress 配置

- 多语言支持通过 `locales` 配置
- 搜索使用本地搜索 (`provider: 'local'`)
- 侧边栏按模块分组 (`/fmea/`, `/spc/`)

### 多语言

- 中文: `/`
- 英文: `/en/`

语言切换通过导航栏的链接实现。

## 待完成任务

1. 初始化 VitePress 项目
2. 配置 UnoCSS 图标
3. 迁移现有 FMEA 文档
4. 创建各模块首页
5. 实现多语言切换
6. 部署上线

## 参考文档

- [VitePress 官方文档](https://vitepress.dev/)
- [UnoCSS Icons](https://unocss.dev/presets/icons)
- [UI 设计规范](./qms-docs/UI-design-spec.md)
- [交互设计规范](./qms-docs/交互-design-spec.md)
