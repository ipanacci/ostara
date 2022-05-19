const express = require('express');
const apiUsersRoutes = require('./routes.users.js');
const apiRealtyRoutes = require('./routes.realty.js');
const apiRTypesRoutes = require('./routes.realty.type.js');

const router = express.Router();
 
// ... chargement de vos prochaines routes ici
router.use('/user', apiUsersRoutes);
router.use('/realty/type', apiRTypesRoutes);
router.use('/realty', apiRealtyRoutes);

 
// Si une route n'existe pas, erreur 404
router.route("*").all((req,res) => { res.status(404).send(); });
module.exports = router;