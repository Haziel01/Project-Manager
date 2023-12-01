const request = require('supertest');
const app = require('../app');

process.env.NODE_ENV = 'test';

const config = require('config');
config.util.getConfigSources(); 

it('Se despliega la informacion sobre el error', done => {
    request(app)
        .get('/')
        .set('Accept', 'application/json')
        .expect(200, done);
});
