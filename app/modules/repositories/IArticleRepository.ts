import { IArticleParams } from '../usecases/addArticle/IAddArticle'

export interface IArticleRepository {
  create(articleParams: IArticleParams): Promise<void>
}
