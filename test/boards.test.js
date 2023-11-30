const request = require('supertest');
const app = require('../app');
const Board = require('../models/board'); 

it('Responde json cointaining', done =>{
    request(app)
    .get('/boards')
        .set('Accept', 'application/json')
        .expect('Content-Type',/json/)
        .expect(200, done);
});

describe('Probar board', () => {
  test('Debería obtener la información de un board', (done) => {
    
    const testBoard = new Board({
      _name: 'Test Board',
      _columns: 'Test Columns',
    });

    testBoard.save((err, board) => { 
      if (err) return done(err);

      supertest(app)
        .get(`/boards/${board._id}`) 
        .expect(200)
        .end(function(err, res){
          if (err) return done(err);
          expect(res.body.name).toBe(testBoard.name);
          expect(res.body.columns)
          .toEqual(expect.arrayContaining(testBoard.columns.map((column) => column.toString())));
          done();
        });
    });
  });
});