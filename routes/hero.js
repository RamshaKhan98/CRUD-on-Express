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
//Get all hero Powers

router.get('/bridgeTable',(req,res)=>{
    conn.query("SELECT * FROM bridgeTable"
      ,(err, result)=>{
        if (err) throw err;
        res.json(result)
        console.log(result);
      });
})


//Get all hero powers by id
router.get('/bridgeTable/:id',(req,res)=>{
  const id = req.params.id
  conn.query(`SELECT * FROM heroes LEFT JOIN bridgetable ON heroes.id = bridgetable.id LEFT JOIN powers ON powers.pid = bridgetable.pid where heroes.id = '${id}'`,(err, result)=>{
      if (err) throw err;
      res.json(result)
      console.log(result);
    });
})

//Post 
router.post('/bridgeTable/:id/:pid',(req,res)=>{
  // const name = req.body.name;
  const id = req.params.id
  const pid = req.params.pid
  conn.query(`Insert into bridgeTable (id , pid) Values ('${id}','${pid}')`,(err, result)=>{
      if (err) throw err;
      res.json(result)
      console.log(result);
    });
})

//DELETE
router.delete('/bridgeTable/:btId', (req, res) => {
let btId = req.params.btId
// "DELETE FROM bridgeTable Where btId=" + {btId}
conn.query(`DELETE FROM bridgeTable Where btId=${btId}`, function (err, power, fields) {
  if (err)
    res.json({ msg: err.message });;
  res.json(btId[0])

});
})

//UPDATE

router.put('/bridgeTable/:btId', (req, res) => {

var btId = req.params.btId;
const id = req.body.id;
const pid = req.body.pid;
//const {name}=req.body
conn.query(`UPDATE bridgeTable SET id ='${id}' , pid ='${pid}' WHERE btId = '${btId}'`, function (err, bridgeTable) {
  if (err)
    res.json({ msg: err.message });
  res.json(bridgeTable)

});
})
//Get all costumes
router.get('/costumes',(req,res)=>{
  conn.query("SELECT * FROM costumes",(err, result)=>{
      if (err) throw err;
      res.json(result)
      console.log(result);
    });
})

//Get all costumes by id
router.get('/costumes/:cid',(req,res)=>{
  const cid = req.params.id
  conn.query(`SELECT * FROM costumes Where cid='${cid}'`,(err, result)=>{
      if (err) throw err;
      res.json(result[0])
      console.log(result[0]);
    });
})

//Post 
router.post('/costumes',(req,res)=>{
  // const name = req.body.name;
  const {cname} = req.body
  conn.query(`Insert into costumes(cname) Values('${cname}') `,(err, result)=>{
      if (err) throw err;
      res.json(result)
      console.log(result);
    });
})

//DELETE
router.delete('/costumes/:cid', (req, res) => {
let cid = req.params.cid
conn.query(`DELETE FROM costumes Where cid=${cid}`, function (err, costume, fields) {
  if (err)
    res.json({ msg: err.message });;
  res.json(costume[0])

});
})

//UPDATE

router.put('/costumes/:cid', (req, res) => {
var cid = req.params.cid;
const cname = req.body.cname;
//const {name}=req.body
conn.query(`UPDATE costumes SET cname ='${cname}' WHERE cid = '${cid}'`, function (err, costume) {
  if (err)
    res.json({ msg: err.message });
  res.json(costume[0])

});
})
//Get all hero costumes

router.get("/herocostumes/:id", function(req,res){
  var id = req.params.id;
  conn.query(`SELECT heroes.cid , costumes.cname  FROM costumes, heroes  WHERE heroes.cid = costumes.cid AND heroes.id = '${id}'`, function(err, results){
      if(err){
          throw err;
      }
      res.send(results);
  });

});


//Delete COSTUME FROM HERO

//we are using PUT as HTTP VERB because we want to edit/update only ONE SINGLE column, NOT the whole row.
router.put('/herocostumes/:id' , function(req,res){
  var id = req.params.id
 
  conn.query(`UPDATE heroes SET cid = NULL WHERE id = '${id}'` , function(error , result ) {
      if(error) throw error;
      return res.send(result);
  });
});

// adding new costume to hero
router.put("/herocostumes/:id/:cid", function (req, res) {
  let id = req.params.id;
  let cid = req.params.cid;
  conn.query(`UPDATE heroes SET cid ='${cid}' WHERE id ='${id}'` , function (err, result) {
      if (err) throw err;
  return res.send(result);
});
});

module.exports=router;