import { Article } from '@prisma/client'
import { IArticleParams } from '../usecases/addArticle/IAddArticle'

export interface IArticleRepository {
  create(articleParams: IArticleParams): Promise<void>
  findArticle(articleParams): Promise<Article[]>
}
