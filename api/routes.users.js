const express = require('express');
const router = express.Router();
const UserController = require('../src/controllers/UserController'); 

/**
     * @api {get} /api/user Users list
     * @apiVersion 1.0.0
     * @apiName GetAllUsers
     * @apiGroup Users
     *
     * 
     * @apiSuccess {json} Users list.
     * @apiSuccessExample {json} Success-Response:
     *    [ 
     *      {
     *        "id": 1,
     *        "firstname": "Jeni",
     *        "lastname": "Beauvais",
     *        "email": "jbeauvais0@jimdo.com",
     *        "password": "N72u9SBG3yPi",
     *        "date": "2021-09-01T15:11:41.000Z"
     *      },  
     *    ...]
     */


// Récupére tous les utilisateurs
router.get('/', (req, res) => {
    (new UserController).getAll(req, res);
});

/**
     * @api {get} /api/user/:id User by id
     * @apiVersion 1.0.0
     * @apiName GetUserById
     * @apiGroup Users
     *
     * 
     * @apiSuccess {json} Users list.
     * @apiSuccessExample {json} Success-Response:
     *    [ 
     *      {
     *        "id": 1,
     *        "firstname": "Jeni",
     *        "lastname": "Beauvais",
     *        "email": "jbeauvais0@jimdo.com",
     *        "password": "N72u9SBG3yPi",
     *        "date": "2021-09-01T15:11:41.000Z"
     *      }
     *    ]
     */

// Récupére 1 utilisateur via son ID
router.get('/:id', (req, res) => {
    (new UserController).get(req, res);
});

/**
     * @api {post} /api/user Add User
     * @apiVersion 1.0.0
     * @apiName AddUser
     * @apiGroup Users
     *
     * 
     * @apiSuccess {json} Changes.
     * @apiSuccessExample {json} Success-Response:
     *       STATUS 201
     *[
     *    {
     *        "fieldCount": 0,
     *        "affectedRows": 1,
     *        "insertId": 1002,
     *        "info": "",
     *        "serverStatus": 2,
     *        "warningStatus": 0
     *    },
     *    null
     *]
     */
// Création d'un utilisateur
router.post('/', (req, res) => {
    (new UserController).post(req, res);
});

/**
     * @api {put} /api/users/:id User by id
     * @apiVersion 1.0.0
     * @apiName EditUser
     * @apiGroup Users
     *
     * 
     * @apiSuccess {json} Changes.
     * @apiSuccessExample {json} Success-Response:
     *          STATUS 200
     *    [
     *      {
     *          "fieldCount": 0,
     *          "affectedRows": 1,
     *          "insertId": 0,
     *          "info": "Rows matched: 1  Changed: 1  Warnings: 0",
     *          "serverStatus": 2,
     *          "warningStatus": 0,
     *          "changedRows": 1
     *      },
     *      null
     *     ]
     */
// Modification d'un utilisateur via son ID
router.put('/:id', (new UserController).modify);

/**
     * @api {delete} /api/user Users list
     * @apiVersion 1.0.0
     * @apiName DeleteUser
     * @apiGroup Users
     *
     * 
     * @apiSuccess {json} Changes.
     * @apiSuccessExample {json} Success-Response:
     *              STATUS 200
     *    [
     *        {
     *            "fieldCount": 0,
     *            "affectedRows": 1,
     *            "insertId": 0,
     *            "info": "",
     *            "serverStatus": 2,
     *            "warningStatus": 0
     *        },
     *        null
     *    ]
     */
// Suppression d'un utilisateur via son ID
router.delete('/:id', (new UserController).remove);
 
// Les autres méthodes sont donc non allouées
router.route('/').all((req,res) => { res.status(405).send(); });
router.route('/:id').all((req,res) => { res.status(405).send(); });
 
module.exports = router;