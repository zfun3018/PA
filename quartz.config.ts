import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "价格行为学笔记", // 浏览器标签页标题
    enableSPA: true,
    enablePopovers: true,
    analytics: { provider: "google", tagId: "YOUR-TAG-ID" },
    baseUrl: "zfun3018.github.io/PA", // 你的门牌号：GitHub的仓库网址
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk", // 标题字体：现代、无衬线
        body: "Source Sans Pro",      // 正文字体：高可读性
        code: "IBM Plex Mono",      // 代码字体：极客感
      },
      colors: {
        lightMode: {
          light: "#faf8f8",         // 亮色模式背景
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          dark: "#2b2b2b",
          darkgray: "#4e4e4e",
          secondary: "#284b63",     // 链接与图标色
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#0b0e14",         // 深色背景：深炭黑色，更有金融终端感
          lightgray: "#1e222a",     // 搜索框、分割线背景
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",          // 正文字体色
          secondary: "#00f5d4",     // 强调色：极光绿，象征股市上涨
          tertiary: "#ff9f1c",      // 辅助色：橙色，象征预警或重点
          highlight: "rgba(0, 245, 212, 0.1)", // 选中行高亮色
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "filesystem"] }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
