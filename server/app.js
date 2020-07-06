const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const router = require('./routes');
const dbConfig = require('./config/db.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

app
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({extended: true}))
    .use(router)
    .listen(port, () => {
        console.log('listening on port -> ', port);
    })

mongoose.connect(dbConfig.url)
    .then(() => {
        console.log("Successfully Sekarang Anda Terkonek Ke database");    
    }).catch(err => {
        console.log('Error database Tidak Terkoneksi atau Tidak Ada');
        process.exit();
    });