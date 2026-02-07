import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// 自定义排序函数：按发布时间从近到远排序
const sortByDateDesc = (a: any, b: any) => {
  const dateA = a.data?.date ? new Date(a.data.date).getTime() : 0
  const dateB = b.data?.date ? new Date(b.data.date).getTime() : 0
  return dateB - dateA // 降序排列（从近到远）
}

// 这里定义所有页面通用的组件（页眉和页脚）
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      "GitHub": "https://github.com/zfun3018/PA",
      "价格行为学": "价格行为学丨笔记", // 你可以根据自己的文件夹修改
    },
  }),
  afterBody: [],
}

// 这里的组件会出现在"内容页"（文章页）
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),      // 面包屑导航：方便在复杂金融分类中找位置
    Component.ArticleTitle(),     // 文章标题
    Component.ContentMeta(),      // 文章元数据（阅读时间等）
    Component.TagList(),         // 标签：金融博客必备的分类标签
  ],
  left: [
    Component.PageTitle(),        // 站点标题
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),           // 强大的搜索功能
    Component.Darkmode(),         // 深色模式：现代酷炫感的核心
    Component.DesktopOnly(Component.Explorer({ title: "🔖目录", sortFn: sortByDateDesc })), // 文件资源管理器，按发布时间排序
  ],
  right: [
    Component.Graph(),            // 知识图谱：展示金融知识点之间的关联（非常酷炫）
    Component.DesktopOnly(Component.TableOfContents()), // 文章目录
    Component.Backlinks(),        // 反向链接：查看哪些文章引用了当前篇目
    Component.RecentNotes({ title: "最近更新", limit: 5 }), // 最近更新的 5 篇笔记
  ],
}

// 这里的组件会出现在"列表页"（如文件夹页面、标签页面）
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({ title: "🔖目录", sortFn: sortByDateDesc })),
  ],
  right: [],
}
