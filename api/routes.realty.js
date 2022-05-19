const express = require('express');
const router = express.Router();
const RealtyController = require('../src/controllers/RealtyController'); 

router.get('/', (req, res)=>{
    (new RealtyController).getAll(req, res);
});

router.get('/:id', (req, res)=>{
    (new RealtyController).getById(req, res);
})

router.post('/', (req, res)=>{
    (new RealtyController).add(req, res);
});

router.put('/:id', (req, res)=>{
    (new RealtyController).edit(req, res);
})

router.delete('/:id', (req, res)=>{
    (new RealtyController).remove(req, res);
})

module.exports = router;