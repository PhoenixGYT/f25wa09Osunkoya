var express = require('express');
var router = express.Router();

/* Function */
let fn = "Math.sqrt()";
let x = Math.random();
let y = Math.sqrt(x);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(`${fn} applied to ${x} is ${y}`);
});

module.exports = router;
