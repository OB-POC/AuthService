const assert = require('chai').assert;
const request = require('supertest');
const deepEqual = require('assert').deepEqual
const host_url = 'http://localhost:3000'
const expect = require('expect')
let authentication_token = ''

var container = request.agent(require('../app'));

describe('Auth service project test',function(){
    xdescribe('1.A node js server acting as a RESTful API accepting a POST request with body containing username and password ',function(){
        it('and returning a token in JSON format',function(done){
            console.log(host_url)
            container
            .post('/login')
            .send({'username':'alice','password':'wonderland'})
            .expect(200,{"authenticated":true,"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsaWNlIiwiaWF0IjoxNTM5MDA0Njc4LCJleHAiOjE1MzkwOTEwNzh9.353x-Of_4FRhDFopkaLKQdoQZi14tge21ktLRi8cjtw"},done())
            .end(function(err,res){
                console.log(res.body)
                authentication_token=res.body.token
                describe('2.A node js server acting as a RESTful API accepting a GET request with header containing x-access-token',function(){
                    authentication_token.length != 0 ?    
                    it('and returing username, iat and expiry date',function(done){
                        container
                        .get('/authenticate')
                        .set("x-access-token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsaWNlIiwiaWF0IjoxNTM4OTk0ODQ2LCJleHAiOjE1MzkwODEyNDZ9.rJWIZ28ovPCIbDWq13eHo6I1KAbX0hrpQQ1Vn8axDTs")
                        .expect(200,{
                            "username": "alice",
                            "iat": 1538994846,
                            "exp": 1539081246
                        },done())
                    }) :
                    it.skip('skip this test case as the input is not obtained',function(done){
                        done()
                    })
                })
                
            })
        })
    })
})
