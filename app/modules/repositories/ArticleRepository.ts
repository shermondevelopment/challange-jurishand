/* connection with db */
import prisma from '../../settings/prisma'

/* article entity */
import { Article } from '@prisma/client'

/* interface */
import { IArticleRepository } from './IArticleRepository'
import { IListArticleQuery } from '../usecases/ListArticle/IListArticleUseCase'
import ammountQuery from '../../utils/query'

class ArticleRepository implements IArticleRepository {
  async create(articleParams: Article): Promise<void> {
    await prisma.article.create({
      data: articleParams
    })
  }

  async findArticle(articleParams: IListArticleQuery): Promise<Article[]> {
    const query = ammountQuery(articleParams)
    const article = await prisma.article.findMany({
      ...query,
      orderBy: {
        date: 'desc'
      }
    })
    return article
  }
}

export default ArticleRepository
