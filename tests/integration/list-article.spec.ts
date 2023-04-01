import supertest from 'supertest'
import app from '../../app/settings/app'

describe('List article', () => {
  it('should get all articles sorted by data', async () => {
    const response = await supertest(app).get('/')
    expect(response.statusCode).toBe(200)
    expect(response.body).not.toBeNull()
  })
})
