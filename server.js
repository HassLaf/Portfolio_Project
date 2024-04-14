require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const helmet = require('helmet');
const router = require('./api/routes');

app = express();
app.use(helmet());
app.use(express.json());
app.use('/', router);

const http = require('http');

const port = process.env.PORT ||3000;
const url = process.env.DATABASE_URL || 'localhost';



mongoose.connect(url).then(() => {
  console.log("Connexion à la base de données est OK !");
});



var server = http.createServer(app) 
console.log("Connexion au serveur est Ok !")

server.listen(port,() => {
  console.log(`Your app listening on port ${port}`)
})