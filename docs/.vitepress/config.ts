import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
import { resolve } from 'path'

export default defineConfig({
  title: "Feigenbaum 帮助中心",
  vite: {
    plugins: [UnoCSS()]
  },
  description: "质量管理系统帮助文档",
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Feigenbaum 帮助中心',
      description: '质量管理系统帮助文档'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Feigenbaum QMS',
      description: 'Quality Management System Documentation'
    }
  },
  themeConfig: {
    logo: '/images/logo.png',
    appearance: false,
    nav: [
      { text: '首页', link: '/' },
      { text: 'FMEA', link: '/fmea/' },
      { text: 'English', link: '/en/' }
    ],
    sidebar: {
      '/fmea/': [
        {
          text: '入门指南',
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
      ],
      '/en/fmea/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'What is FMEA?', link: '/en/fmea/getting-started/what-is-fmea' },
            { text: 'Quick Start', link: '/en/fmea/getting-started/quick-start' },
            { text: 'Core Interface', link: '/en/fmea/getting-started/core-interface' }
          ]
        },
        {
          text: 'Feature Guide',
          items: [
            { text: 'Basic Data Configuration', link: '/en/fmea/feature-guide/basic-data' },
            { text: 'Project Creation', link: '/en/fmea/feature-guide/project-creation' },
            { text: 'Structure Analysis', link: '/en/fmea/feature-guide/structure-analysis' },
            { text: 'Function Analysis', link: '/en/fmea/feature-guide/function-analysis' },
            { text: 'Failure Analysis', link: '/en/fmea/feature-guide/failure-analysis' },
            { text: 'Risk Analysis', link: '/en/fmea/feature-guide/risk-analysis' },
            { text: 'Optimization', link: '/en/fmea/feature-guide/optimization' },
            { text: 'Review & Release', link: '/en/fmea/feature-guide/review-release' },
            { text: 'Change Management', link: '/en/fmea/feature-guide/change-management' },
            { text: 'FMEA Dashboard', link: '/en/fmea/feature-guide/dashboard' }
          ]
        },
        {
          text: 'Collaboration',
          items: [
            { text: 'Team Collaboration', link: '/en/fmea/collaboration/team-collaboration' },
            { text: 'QCP', link: '/en/fmea/collaboration/qcp' }
          ]
        },
        {
          text: 'Knowledge Base',
          items: [
            { text: 'Basic FMEA', link: '/en/fmea/knowledgebase/basic-fmea' },
            { text: 'Case Library', link: '/en/fmea/knowledgebase/case-library' },
            { text: 'Import/Export', link: '/en/fmea/knowledgebase/import-export' }
          ]
        },
        {
          text: 'Support',
          items: [
            { text: 'FAQ', link: '/en/fmea/support/faq' },
            { text: 'Contact', link: '/en/fmea/support/contact' }
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    footer: {
      copyright: 'Copyright © 2024-present Feigenbaum'
    }
  }
})
