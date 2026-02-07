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
  header: [
    Component.PageTitle({ 
      align: 'center',
      variant: 'large'
    }),
  ],
  footer: Component.Footer({
    links: {
      "首页": "/",
      "价格行为学": "/价格行为学丨笔记",
      "知识图谱": "/graph",
      "GitHub": "https://github.com/zfun3018/PA",
    },
  }),
  afterBody: [],
}

// 这里的组件会出现在"内容页"（文章页）
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer({ 
      title: "🔖文章目录", 
      sortFn: sortByDateDesc 
    }),
  ],
  right: [
    Component.Graph(),
    Component.RecentNotes({ 
      title: "📅最近更新", 
      limit: 5 
    }),
    Component.TableOfContents(),
    Component.Backlinks(),
  ],
}

// 这里的组件会出现在"列表页"（如文件夹页面、标签页面）
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer({ 
      title: "🔖文章目录", 
      sortFn: sortByDateDesc 
    }),
  ],
  right: [
    Component.RecentNotes({ 
      title: "📅最近更新", 
      limit: 5 
    }),
  ],
}
