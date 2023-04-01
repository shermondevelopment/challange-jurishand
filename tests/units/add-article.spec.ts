import { Article } from '@prisma/client'
import { IArticleRepository } from '../../app/modules/repositories/IArticleRepository'
import AddArticleUseCase from '../../app/modules/usecases/AddArticle/AddArticleUseCase'
import { IArticleParams } from '../../app/modules/usecases/AddArticle/IAddArticle'
import { IListArticleQuery } from '../../app/modules/usecases/ListArticle/IListArticleUseCase'

class ArticleRepositoryMock implements IArticleRepository {
  articles: Article[] = []

  async create(articleParams: IArticleParams): Promise<void> {
    this.articles.push({ ...articleParams, id: 'any_id' })
  }
  async findArticle(articleParams: IListArticleQuery): Promise<Article[]> {
    return new Promise((resolved) => {
      const r = this.articles.filter(
        (item) => articleParams.key && item.content.includes(articleParams.key)
      )
      resolved(r)
    })
  }
}

let addArticleRepositoryMock: ArticleRepositoryMock
let addArticleUseCase: AddArticleUseCase

describe('Create article', () => {
  beforeAll(() => {
    addArticleRepositoryMock = new ArticleRepositoryMock()
    addArticleUseCase = new AddArticleUseCase(addArticleRepositoryMock)
  })

  it('should be able to create a new article', async () => {
    const article = {
      title: 'any_title',
      author: 'any_author',
      category: 'any_category',
      content: 'any_content',
      date: new Date()
    }
    addArticleUseCase.execute(article)
    const articleFind = await addArticleRepositoryMock.findArticle({
      key: 'content'
    })
    expect(articleFind[0]).toHaveProperty('id')
  })
})
