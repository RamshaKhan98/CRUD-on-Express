const express=require('express');
const bodyParser=require('body-parser');
const con = require('./config/database')
const heroRoutes=require('./routes//hero')
const app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
app.use('/api',heroRoutes)

const port=5000;

app.listen(port,console.log(`listening server on port ${port}`));
