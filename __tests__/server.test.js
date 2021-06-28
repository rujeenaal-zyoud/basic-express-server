const server = require('../src/server')
const supertest = require('supertest');
//const mockRequest = supertest(server);

const request=supertest(server.app);


describe('basic-express-server',()=>{
  
    it(' status 200',async()=>{
        const response =await request.get('/person?name=rujeena');
        expect(response.status).toBe(200);
        expect(response.text).toBe('{"yourName":"rujeena"}');
      });
    

   
    
  })

