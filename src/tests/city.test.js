const request = require('supertest');
const app = require('../app');

test('POST /cities debe crear una ciudad', async() => {
    const city = {
        name: "Buenos Aires",
        country: "Argentina",
        isCapital: true
    }
    const res = await request(app).post('/cities').send(city);
    expect(res.status).toBe(201);
})

test('GET /cities debe retornar todas las ciudades', async() => {
    const res = await request(app).get('/cities');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
})
