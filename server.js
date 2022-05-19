const express = require('express');
const app = express();
require('dotenv').config()
app.use(express.urlencoded({extended:true}));
// app.use(express.json()); forse non serve
 
//--------------------------------------------------------------------
//      Chargement des routes
//--------------------------------------------------------------------
const apiRoutes = require('./api/routes');
app.use('/api', apiRoutes);
 
//--------------------------------------------------------------------
//     Ecoute du serveur HTTP
//--------------------------------------------------------------------
app.listen(process.env.PORT_HTTP, () => {
    console.log(`Le serveur est démarré : http://localhost:${process.env.PORT_HTTP}` );
});
