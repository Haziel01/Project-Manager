const request = require('supertest');

const app = require('../app');

it('Responde con un json cointaining ', done =>{
    request(app)
    .get('/backlogs')
        .set('Accept', 'application/json')
        .expect('Content-Type',/json/)
        .expect(200, done);
});

describe("Obtener en backlogs",() =>{
    test("Esto debe generar un array", async ()=>{
        const response = await request(app).get('/backlogs').send()
        expect(response.body).toBeinstanceOf(Array)
    });
});