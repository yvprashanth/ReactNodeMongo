var express = require('express');
var router = express.Router();

router.get('/heroes', function(req, res, next) {
  const heroes = [
    {
      id:0, 
      name : 'The Tick', 
      saying : 'Prashanth!!!'
    }
  ];
  res.json(heroes);
});

module.exports = router;
