import { Request, Response } from 'express'
import { IAddArticle } from './IAddArticle'

class AddArticleController {
  constructor(private createArticleUseCase: IAddArticle) {}

  async handle(req: Request, res: Response) {
    const articleParams = req.body
    this.createArticleUseCase.execute(articleParams)
    res.sendStatus(204)
  }
}

export default AddArticleController
