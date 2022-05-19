const express = require('express');
const router = express.Router();
const RealtyTypeController = require('../src/controllers/RealtyTypeController'); 

router.get('/', (req, res)=>{
    (new RealtyTypeController).getAll(req, res);
});

router.get('/:id', (req, res)=>{
    (new RealtyTypeController).get(req, res);
});

router.post('/', (req, res)=>{
    (new RealtyTypeController).add(req, res);
});

router.put('/:id', (req, res)=>{
    (new RealtyTypeController).edit(req, res);
})

router.delete('/:id', (req, res)=>{
    (new RealtyTypeController).remove(req, res);
})

module.exports = router;