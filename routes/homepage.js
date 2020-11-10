
const express = require('express');
const router = express.Router();

router.post('/',(req, res) => {
    res.render('publicusersearch/homepage')
  });

module.exports = router;
