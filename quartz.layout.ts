import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// 全局通用的组件（如页眉、页脚）
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [], // 头部保持简洁
  footer: Component.Footer({
    links: {
      "GitHub": "https://github.com/zfun3018",
      "Newsletter": "https://your-newsletter.com", // 金融号必备订阅
    },
  }),
}

// 普通页面的布局（如笔记内容页）
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(), // 面包屑导航，方便理清金融知识层级
    Component.ArticleTitle(), // 笔记标题
    Component.ContentMeta(), // 显示阅读时间、修改日期
    Component.TagList(),     // 标签列表
  ],
  left: [
    Component.PageTitle(),   // 左上角站点名
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),      // 搜索框（现代风核心）
    Component.Darkmode(),    // 切换亮/暗模式
    Component.DesktopOnly(Component.Explorer()), // 文件浏览器
  ],
  right: [
    Component.Graph(),       // 关系图谱（金融知识联想极佳）
    Component.DesktopOnly(Component.TableOfContents()), // 右侧目录
    Component.Backlinks(),   // 反向链接
  ],
}

// 文件夹列表页面的布局（如点击某个文件夹时显示的内容）
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
