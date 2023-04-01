/* entity article */
import { Article } from '@prisma/client'

export interface IListArticleQuery {
  category?: string
  key?: string
}

export interface IListArticleUseCase {
  execute(articleQuery: IListArticleQuery): Promise<Article[]>
}
