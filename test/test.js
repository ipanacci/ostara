const assert = require('assert');
const { acceptsCharsets } = require('express/lib/request');
require('dotenv').config();
const Repo = require('../src/repository/UserRepository.js');

describe('Test du repository User', async () => {
    await it('Tester le count', (done) => {
      const User = new Repo();
      let originalCount = 0;
      User.countAll().then(count => {  
          originalCount = count; 
          User.delete(21).then(result=>{
              User.countAll().then(count1 => {
                  assert.equal(count1, originalCount-1);
                  done();
                });
            });
        });
    });

    await it(`Tester la récupération d'un utilisateur`, (done) => {
        const User = new Repo();
        User.get(50).then(user =>{
            assert.equal(user[0].id, 50);
            done();
        });
    });

    await it(`Créer un utilisateur`, (done) => {
        const User = new Repo();
        let originalCount = 0;
        entity = {
            firstname: "Pinco",
            lastname: "Pallino",
            email: "pincopallino@gmail.coom",
            password: "lalala", 
        }
        User.countAll().then(count => {  
            originalCount = count; 
            User.insert(entity).then(result=>{
                User.countAll().then(count1 => {
                    assert.equal(count1, originalCount+1);
                    done();
                });
            });
        });
        done();
    });

    await it(`Modifier un utilisateur`, (done) => {
        const User = new Repo();
        entity = {
            firstname: "Pinco",
        }
        User.update(50, entity).then(result=>{
            User.get(50).then(user=>{
                assert.equal(user[0].firstname, "Pinco");
                done();
            });
        });
    });


    await it(`Supprimer un utilisateur`, (done) => {
        const User = new Repo();
        User.delete(100).then(result=>{
            User.get(100).then(user => {
                    assert.equal(user.length, 0);
                    done();
            });
        });
    });
});