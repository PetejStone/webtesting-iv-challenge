
//importing supertest from dependencies
const supertest = require('supertest');
//importing server.hs
const server = require('./server.js');

describe('server connection', () => {
    it('should return 200', () => {
        return supertest(server) //supertest checks and runs serer
        .get('/') //declare the route you want to get
        .expect(200) //expecting 200
    })

    //async  and await testing for json response
    it('should return 200', async () => {
        await supertest(server)
        .get('/')
        .expect('Content-Type', /json/i) //expect the content type to be json format
    })

    //checking fone
    it('should return 200', done => {
        supertest(server)
        .get('/')
        .expect(200, done)
    })
})