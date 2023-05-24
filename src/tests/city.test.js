const request = require('supertest');
const app = require('../app');

let cityId;

test('POST /cities debe crear una ciudad', async() => {
    const city = {
        name: "Buenos Aires",
        country: "Argentina",
        isCapital: true
    }
    const res = await request(app).post('/cities').send(city);
    cityId = res.body.id;
    expect(res.status).toBe(201);
})

test('GET /cities debe retornar todas las ciudades', async() => {
    const res = await request(app).get('/cities');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
})

test('PUT /cities/:id debe actualizar una ciudad', async() => {
    const cityUpdated = {
        name: "Buenos Aires Actualizado"
    }
    const res = await request(app)
        .put(`/cities/${cityId}`)
        .send(cityUpdated);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(cityUpdated.name);
})

test('DELETE /cities/:id debe eliminar una ciudad', async() => {
    const res = await request(app).delete(`/cities/${cityId}`);
    expect(res.status).toBe(204);
})
