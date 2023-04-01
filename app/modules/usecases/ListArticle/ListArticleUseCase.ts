/* entity article */
import { Article } from '@prisma/client'

/* interface */
import { IArticleRepository } from '../../repositories/IArticleRepository'
import { IListArticleQuery, IListArticleUseCase } from './IListArticleUseCase'

class ListArticleUseCase implements IListArticleUseCase {
  constructor(private articleRepository: IArticleRepository) {}

  async execute(articleQuery: IListArticleQuery): Promise<Article[]> {
    const article = await this.articleRepository.findArticle(articleQuery)
    return article
  }
}

export default ListArticleUseCase
