const express = require('express');
const ConfigDb  = require('./dbConfig');
const fetchData = require('./src/Controller/HodlioController.js');
const router = require('./src/Router/routes.js');


const app = express();
const PORT = 3000;

ConfigDb();

fetchData();
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
