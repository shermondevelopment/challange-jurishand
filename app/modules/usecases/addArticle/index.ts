import ArticleRepository from '../../repositories/ArticleRepository'
import AddArticleController from './AddArticleController'
import AddArticleUseCase from './AddArticleUseCase'

const articleRepository = new ArticleRepository()
const articleUseCase = new AddArticleUseCase(articleRepository)
const articleController = new AddArticleController(articleUseCase)

export default articleController
