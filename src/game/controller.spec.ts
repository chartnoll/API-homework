import 'jest'
import * as request from 'supertest'
import { app } from '../index'
import setupDb from '../db'

beforeAll(async () => {
    await setupDb()
})

describe('GameController', () => {
    test('/games', async () => {
        await request(await app.callback())
            .get('/games')
            .set('Accept', 'application/json')
            .set('x-user-roles', 'teacher')
            .expect(200)
    })
})