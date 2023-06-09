/*
-------------------------------------------------
if .env file is not available or no Database URI link provided in it,
Insert (db_url) string as written below in (db_url.js) file:
const db_url='mongodb+srv://<username>:<password>@<clusterName>.<auto-generated-code>.mongodb.net/?retryWrites=true&w=majority';
-------------------------------------------------
*/
// const db_url_link = require('./db_urls');

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const {router} = require('./routes/routes');


// **********database connection**********
const db_URI = process.env.DB_URI; //(use this line if .env file has the DB_URI link)
// const db_URI = db_url_link; //remove this line if .env file is available
mongoose.connect(db_URI);
const db_Connection = mongoose.connection;
db_Connection.on('error', error => console.log(error));
db_Connection.once('connected', ()=>console.log(`db_Connection Connection OK`));
// ****************************************


// middlewares
const app = express();
app.use(express.json());
app.use('/api', router);

const PORT = process.env.PORT || 8885;


// GET request
app.get('/', (req, res)=>{
    res.send(`<h5>${db_URI}</h5>success !`);
});


app.listen(PORT, ()=>{
    // console.log(`\ndb_url_link--> ${db_url_link}\n`);
    console.log(`URI--> ${db_URI}`);
    console.log(`listening on port ${PORT}...`);
});
