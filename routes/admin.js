const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')


router.get('/', auth, function (req, res, next) {
  res.render('admin/index', {
    layout: 'layout',
    title: 'AdminPage'
  });
});

module.exports = router;
