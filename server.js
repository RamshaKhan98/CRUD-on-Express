const express=require('express');
const bodyParser=require('body-parser');
const con = require('./config/database')
const heroRoutes=require('./routes//hero')
const app=express();
const cors = require('cors')
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 204 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
app.use('/api',heroRoutes)

const port=5000;

app.listen(port,console.log(`listening server on port ${port}`));
