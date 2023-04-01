import { IArticleRepository } from '../../repositories/IArticleRepository'
import { IAddArticle, IArticleParams } from './IAddArticle'

class AddArticleUseCase implements IAddArticle {
  constructor(private articleRepository: IArticleRepository) {}

  async execute(articleParams: IArticleParams): Promise<void> {
    /* string for date */
    articleParams.date = new Date(articleParams.date)
    await this.articleRepository.create(articleParams)
  }
}

export default AddArticleUseCase
