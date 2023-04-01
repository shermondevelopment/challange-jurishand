import { Router } from 'express'

const articleRouter = Router()

/* controller */
import articleController from '../modules/usecases/addArticle'

articleRouter.post('/add', (req, res) => {
  return articleController.handle(req, res)
})

export default articleRouter
