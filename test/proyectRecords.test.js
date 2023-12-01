const supertest = require('supertest');
const app = require('../app');
var key = '';
var id = '';


describe('Deberia probar las rutas de los proyectRecords', ()=>{
    it('Deberia de crear un proyectRecord', (done)=> {
        jest.setTimeout(10000);
        supertest(app).post('/proyectRecords')
            .send({
                name: 'proyecto_1',
                requestDate: '2023-01-01',
                startDate: '2023-10-12',
                proyectManagerName: 'Valeria',
                proyectManagerLastName: 'Martinez',
                productOwnerName: 'Valeria',
                productOwnerLastName: 'Martinez',
                description: 'Proyecto Web',
                status: true,
                developmentTeam: [
                    ''
                ]
            })
            .set('Authorization', `Bearer ${key}`)
            .end(function(err, res){
                if(err){
                    done(err);
                }else{
                    id = res.body.objs_id;
                    expect(res.statusCode).toEqual(200);
                    done();
                }
            })
    });
    it('Deberia obtener la lista de proyectRecords', (done) => {
        supertest(app).get('/proyectRecords')
            .set('Authorization', `Bearer ${key}`)
            .end(function(err, res){
                if(err){
                    done(err);
                }else{
                    expect(res.statusCode).toEqual(200);
                    done();
                }
            })
    });
    it('Deberia encontrar un proyectRecord', (done)=>{
        supertest(app).get(`/proyectRecords/${id}`)
            .set('Authorization', `Bearer ${key}`)
            .end(function(err, res){
                if(err){
                    done(err);
                }else{
                    expect(res.statusCode).toEqual(200);
                    done();
                }
            })
    });
    it('Deberia editar un proyectRecord', (done) => {
        jest.setTimeout(10000);
        supertest(app).patch(`/proyectManager/${id}`)
            .send({
                name: 'proyecto_1',
                requestDate: '2023-01-01',
                startDate: '2023-10-12',
                proyectManagerName: 'Brandon',
                proyectManagerLastName: 'Ceballos',
                productOwnerName: 'Brandon',
                productOwnerLastName: 'Ceballos',
                description: 'Proyecto Web',
                status: true,
                developmentTeam: [
                    ''
                ]
            })
            .set('Authorization', `Bearer ${key}`)
            .end(function(err, res){
                if(err){
                    done(err);
                }else{
                    expect(res.statusCode).toEqual(200);
                    done();
                }
            })
    });
    it('Deberia reemplazar un proyectRecord', (done) => {
        jest.setTimeout(10000);
        supertest(app).put(`/proyectManager/${id}`)
            .send({
                name: 'proyecto_1',
                requestDate: '2023-01-01',
                startDate: '2023-10-12',
                proyectManagerName: 'Brandon',
                proyectManagerLastName: 'Ceballos',
                productOwnerName: 'Brandon',
                productOwnerLastName: 'Ceballos',
                description: 'Proyecto Web',
                status: true,
                developmentTeam: [
                    ''
                ]
            })
            .set('Authorization', `Bearer ${key}`)
            .end(function(err, res){
                if(err){
                    done(err);
                }else{
                    expect(res.statusCode).toEqual(200);
                    done();
                }
            })
    })
})