const request = require('supertest');
const app = require('../app');

let productId;

test('POST /products debe retornar status 201', async() => {
    const body = {
        name: "iPhone 14",
        category: "smartphones",
        price: 1000
    }
    const res = await request(app).post('/products').send(body);
    productId = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
})

test('GET /products debe retornar todos los productos', async() => {
    const res = await request(app).get('/products');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
})

test('PUT /products/:id debe actualizar un producto', async() => {
    const productUpdated = {
        name: "iPhone 14 pro max"
    }
    const res = await request(app)
        .put(`/products/${productId}`)
        .send(productUpdated);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(productUpdated.name);
})

test('DELETE /products/:id debe eliminar un producto', async() => {
    const res = await request(app).delete(`/products/${productId}`)
    expect(res.status).toBe(204);
})

