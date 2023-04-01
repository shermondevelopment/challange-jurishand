import { Router } from 'express'

const articleRouter = Router()

/* controller */
import addArticleController from '../modules/usecases/addArticle'
import listArticleController from '../modules/usecases/ListArticle'

articleRouter.post('/add', (req, res) => {
  return addArticleController.handle(req, res)
})
articleRouter.get('/', (req, res) => {
  return listArticleController.handle(req, res)
})

export default articleRouter
