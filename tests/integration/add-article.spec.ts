import supertest from 'supertest'
import app from '../../app/settings/app'

describe('Creating article', () => {
  it("should get an error if the user doesn't provide a title", async () => {
    const response = await supertest(app).post('/add').send({
      author: 'any_author',
      content: 'any_content',
      date: new Date(),
      category: 'any_category'
    })
    expect(response.statusCode).toBe(422)
    expect(response.body).toEqual({ error: '"title" is required' })
  })
})
