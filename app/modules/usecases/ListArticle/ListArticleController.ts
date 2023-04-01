import { Request, Response } from 'express'
import { IListArticleQuery, IListArticleUseCase } from './IListArticleUseCase'

class ListArticleController {
  constructor(private listArticleUseCase: IListArticleUseCase) {}

  async handle(req: Request, res: Response) {
    const params = req.query
    const article = await this.listArticleUseCase.execute(
      params as IListArticleQuery
    )
    res.status(200).json(article)
  }
}

export default ListArticleController
