const express = require('express');
const router = express.Router();
const UserController = require('../src/controllers/UserController'); 

// Récupére tous les utilisateurs
router.get('/', (req, res) => {
    (new UserController).getAll(req, res);
});
// Récupére 1 utilisateur via son ID
router.get('/:id', (req, res) => {
    (new UserController).get(req, res);
});
// Création d'un utilisateur
router.post('/', (req, res) => {
    (new UserController).post(req, res);
});
// Modification d'un utilisateur via son ID
router.put('/:id', (new UserController).modify);
// Suppression d'un utilisateur via son ID
router.delete('/:id', (new UserController).remove);
 
// Les autres méthodes sont donc non allouées
router.route('/').all((req,res) => { res.status(405).send(); });
router.route('/:id').all((req,res) => { res.status(405).send(); });
 
module.exports = router;