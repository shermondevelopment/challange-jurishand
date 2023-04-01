import { Article } from '@prisma/client'
import { IListArticleQuery } from '../usecases/ListArticle/IListArticleUseCase'
import { IArticleParams } from '../usecases/AddArticle/IAddArticle'

export interface IArticleRepository {
  create(articleParams: IArticleParams): Promise<void>
  findArticle(articleParams: IListArticleQuery): Promise<Article[]>
}
