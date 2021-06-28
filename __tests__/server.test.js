'use strict';
const server=require('../src/server.js');
const supertest=require('supertest');
const request=supertest(server.app);


describe('basic-express-server', ()=>{

  it('status 404 for bad method ',async()=>{
    const response =await request.post('/person');
    expect(response.status).toBe(404);
  });

  it('status 404 for bad route ',async()=>{
    const response =await request.post('/foo');
    expect(response.status).toBe(404);
  });

  it('status 500',async()=>{
    const response =await request.get('/person?name=');
    expect(response.status).toBe(500);
  });
  it(' name in query string', async ()=>{
    const response = await request.get('/person?name=rujeena');
    expect(response.body).toEqual({ yourName: 'rujeena' });
  });

  
    it(' status 200',async()=>{
        const response =await request.get('/person?name=rujeena');
        expect(response.status).toBe(200);
        expect(response.text).toBe('{"yourName":"rujeena"}');
      });
    

   
    
  })

