/* controller */
import ListArticleController from './ListArticleController'

/* useCase */
import ListArticleUseCase from './ListArticleUseCase'

/* repository */
import ArticleRepository from '../../repositories/ArticleRepository'

const listArticleRepository = new ArticleRepository()
const listArticleUseCase = new ListArticleUseCase(listArticleRepository)
const listArticleController = new ListArticleController(listArticleUseCase)

export default listArticleController
