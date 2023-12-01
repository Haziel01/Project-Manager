const request = require('supertest');
const app = require('../app');

process.env.NODE_ENV = 'test';

const config = require('config');
config.util.getConfigSources(); 

it('Responde con json cointaining', done => {
    request(app)
        .get('/teamMember')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
});
