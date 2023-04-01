export interface IArticleParams {
  title: string
  author: string
  content: string
  date: Date
  category: string
}

export interface IAddArticle {
  execute(articleParams: IArticleParams): Promise<void>
}
