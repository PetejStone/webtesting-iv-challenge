
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
})