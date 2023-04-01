import { Router } from 'express'

const articleRouter = Router()

/* controller */
import addArticleController from '../modules/usecases/AddArticle'
import listArticleController from '../modules/usecases/ListArticle'

/* middleware */
import validation from '../middlewares/validation'

/* article */
import articleValidation from '../validations/article-validation'

articleRouter.post('/add', validation(articleValidation), (req, res) => {
  return addArticleController.handle(req, res)
})
articleRouter.get('/', (req, res) => {
  return listArticleController.handle(req, res)
})

export default articleRouter
