import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "价格行为学 | 笔记", // 网站顶部的标题
    enableSPA: true, // 开启单页应用模式，切换页面不刷新，更丝滑
    enablePopovers: true, // 开启鼠标悬停预览笔记功能
    analytics: { provider: "google", tagId: "YOUR-ID" }, // 统计功能（可选）
    baseUrl: "zfun3018.github.io/PA", // 你的门牌号
    ignorePatterns: ["private", "templates", ".obsidian"], // 忽略这些文件夹，不发到网上
    defaultDateType: "created", // 默认显示笔记的创建日期
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk", // 标题字体，现代感强
        body: "Inter",               // 正文字体，极简清晰
        code: "Fira Code",           // 代码字体
      },
      colors: {
        lightMode: {
          light: "#faf8f8",          // 浅色模式背景
          lightgray: "#e5e5e5",      // 搜索框背景色
          gray: "#b8b8b8",           // 辅助文字
          darkgray: "#4e4e4e",       // 正文字体
          dark: "#2b2b2b",           // 标题字体
          secondary: "#284b63",      // 链接颜色
          tertiary: "#84a59d",       // 鼠标悬停色
          highlight: "rgba(143, 159, 169, 0.15)", // 搜索高亮
        },
        darkMode: {
          light: "#0b0e14",          // 深色模式背景（深蓝黑，金融终端感）
          lightgray: "#1a1f29",      // 边框色
          gray: "#646464",           // 辅助文字
          darkgray: "#d4d4d4",       // 正文文字
          dark: "#ebebec",           // 标题文字（亮白色）
          secondary: "#00ff9d",      // 主题色（极光绿，像股票上涨的颜色）
          tertiary: "#ffcc00",       // 强调色（黄金色）
          highlight: "rgba(0, 255, 157, 0.1)", // 高亮色
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(), // 解析笔记开头的 YAML 属性
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "filesystem"] }), // 自动读取日期
      Plugin.SyntaxHighlighting(), // 代码高亮
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }), // 完美支持 Obsidian 语法
      Plugin.GitHubFlavoredMarkdown(), // 支持 GitHub 语法
      Plugin.TableOfContents(), // 自动生成目录
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }), // 解析双链
      Plugin.Latex({ renderEngine: "katex" }), // 金融公式必备：支持 Latex
    ],
    filters: [Plugin.RemoveDrafts()], // 不显示标记为 draft: true 的草稿
    emitters: [
      Plugin.AliasRedirects(), // 处理别名跳转
      Plugin.ComponentResources(), // 打包组件资源
      Plugin.ContentPage(), // 生成文章页面
      Plugin.FolderPage(), // 生成文件夹页面
      Plugin.TagPage(), // 生成标签页面
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(), // 处理图片等静态资源
      Plugin.Static(), // 处理静态网页
      Plugin.NotFoundPage(), // 404 页面
    ],
  },
}

export default config
