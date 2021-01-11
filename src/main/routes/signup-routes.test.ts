import request from 'supertest'
import app from '../config/app'

describe('SingUp Routes', () => {
  test('Sould return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Andre',
        email: 'andre@awtecnologia.com.br',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
