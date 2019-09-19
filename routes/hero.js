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
        res.json(result[0])
        console.log(result[0]);
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

//DELETE
router.delete('/heroes/:id', (req, res) => {
  let id = req.params.id
  conn.query(`DELETE FROM heroes Where id=${id}`, function (err, hero, fields) {
    if (err)
      res.json({ msg: err.message });;
    res.json(hero[0])

  });
})

//UPDATE

router.put('/heroes/:id', (req, res) => {
  var id = req.params.id;
  const name = req.body.name;
  //const {name}=req.body
  conn.query(`UPDATE heroes SET name ='${name}' WHERE id = '${id}'`, function (err, hero) {
    if (err)
      res.json({ msg: err.message });
    res.json(hero[0])

  });
})
//GET all POWERS
router.get('/powers',(req,res)=>{
  conn.query("SELECT * FROM powers",(err, result)=>{
      if (err) throw err;
      res.json(result)
      console.log(result);
    });
})
//Get all powers by id
router.get('/powers/:pid',(req,res)=>{
  const pid = req.params.pid
  conn.query(`SELECT * FROM powers Where pid='${pid}'`,(err, result)=>{
      if (err) throw err;
      res.json(result[0])
      console.log(result[0]);
    });
})

//Post 
router.post('/powers',(req,res)=>{
  // const name = req.body.name;
  const {pname} = req.body
  conn.query(`Insert into powers(pname) Values('${pname}') `,(err, result)=>{
      if (err) throw err;
      res.json(result)
      console.log(result);
    });
})

//DELETE
router.delete('/powers/:pid', (req, res) => {
let pid = req.params.pid
conn.query(`DELETE FROM powers Where pid=${pid}`, function (err, power, fields) {
  if (err)
    res.json({ msg: err.message });;
  res.json(power[0])

});
})

//UPDATE

router.put('/powers/:pid', (req, res) => {
var pid = req.params.pid;
const pname = req.body.pname;
//const {name}=req.body
conn.query(`UPDATE powers SET pname ='${pname}' WHERE pid = '${pid}'`, function (err, power) {
  if (err)
    res.json({ msg: err.message });
  res.json(power[0])

});
})

module.exports=router;