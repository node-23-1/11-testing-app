const request = require('supertest');
const app = require('../app');

test('POST /products debe retornar status 201', async() => {
    const body = {
        name: "iPhone 14",
        category: "smartphones",
        price: 1000
    }
    const res = await request(app).post('/products').send(body);
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
})

test('GET /products debe retornar todos los productos', async() => {
    const res = await request(app).get('/products');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
})
