/* connection with db */
import prisma from '../../settings/prisma'

/* article entity */
import { Article } from '@prisma/client'

/* interface */
import { IArticleRepository } from './IArticleRepository'

class ArticleRepository implements IArticleRepository {
  async create(articleParams: Article): Promise<void> {
    await prisma.article.create({
      data: articleParams
    })
  }
}

export default ArticleRepository
