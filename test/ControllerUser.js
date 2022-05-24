const assert = require('assert');
require('dotenv').config();
const Controller = require('../src/controllers/UserController.js');
const req = require('./mocks/request.js');
const res = require('./mocks/response.js');

describe('Test du controller User', async () => {
    await it('Récupérer tous les utilisateurs', (done) =>{
        res.callbackTest = (data) => {
            assert.ok(Array.isArray(data));
            done();
        };
        const User = new Controller();
        User.getAll(req, res);
    })

    await it('Récupérer un utilisateur', (done) => {        
        req.params.id = 107; 
        res.callbackTest = (data) => {
            assert.equal(data[0].id, req.params.id);
            done();
        };
        const User = new Controller();
        User.get(req, res);
    });

    await it('Modifier un utilisateur', (done)=>{
        req.params.id = 105;
        req.body.lastname = "Falangee";
        res.callbackTest = (data) => {
            assert.equal(data[0].affectedRows, 1);
            done();
        };
        const User = new Controller();
        User.modify(req, res);
    })

    await it('Ajouter un utilisateur', (done)=>{
        req.body.firstname = "Regina";
        req.body.lastname = "Falangee";
        req.body.email = "r_falangee3@gmail.com";
        req.body.password = "lalala";
        res.callbackTest = (data) => {
            assert.equal(data[0].affectedRows, 1);
            done();
        };
        const User = new Controller();
        User.post(req, res);
    })


    await it('Éliminer un utilisateur', (done)=>{
        req.params.id = 110;
        res.callbackTest = (data) => {
            assert.equal(data[0].affectedRows, 1);
            done();
        };
        const User = new Controller();
        User.remove(req, res);
    })

})
