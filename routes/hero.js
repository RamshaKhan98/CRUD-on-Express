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

module.exports=router;