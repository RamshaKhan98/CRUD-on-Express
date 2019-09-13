const express = require('express');
const router = express.Router();
const conn = require('../config/database');

//Get all heroes
router.get('/heroes',(req,res)=>{
    conn.query("SELECT * FROM heroes",(err, result)=>{
        if (err) throw err;
        res.json(result)
        console.log(result);
      });
})

//Get all heroes by id
router.get('/heroes/:id',(req,res)=>{
    const id = req.params.id
    conn.query(`SELECT * FROM heroes Where id='${id}'`,(err, result)=>{
        if (err) throw err;
        res.json(result)
        console.log(result);
      });
})

//Post 
router.post('/heroes',(req,res)=>{
    // const name = req.body.name;
    const {name} = req.body
    conn.query(`Insert into heroes(name) Values('${name}') `,(err, result)=>{
        if (err) throw err;
        res.json(result)
        console.log(result);
      });
})


module.exports=router;