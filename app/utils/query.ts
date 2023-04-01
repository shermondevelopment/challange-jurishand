import { IListArticleQuery } from '../modules/usecases/ListArticle/IListArticleUseCase'

const ammountQuery = (queryParams: IListArticleQuery) => {
  let query: any = {}
  for (const param in queryParams) {
    if (param && param === 'category') {
      query = {
        where: {
          AND: {
            category: queryParams.category
          }
        }
      }
    }
    if (param && param === 'key') {
      query = {
        where: {
          ...query.where,
          OR: [
            { content: { contains: queryParams?.key } },
            { title: { contains: queryParams?.key } }
          ]
        }
      }
    }
  }
  return query
}

export default ammountQuery
