const express = require('express');
const cors = require("cors");
const app = express();
require('dotenv').config()
app.use(express.urlencoded({extended:true}));
// app.use(express.json()); forse non serve
app.use(cors());
//--------------------------------------------------------------------
//      Chargement des routes
//--------------------------------------------------------------------

const apiRoutes = require('./api/routes');
app.use('/api', apiRoutes);

//--------------------------------------------------------------------
//     Ecoute du serveur HTTP
//--------------------------------------------------------------------
app.listen(process.env.PORT, () => {
    console.log(`Le serveur est démarré : http://localhost:${process.env.PORT}` );
});
