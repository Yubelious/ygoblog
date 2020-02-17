var i18n = require('./i18n.json');
var express = require('express');
var router = express.Router();

const lang = 'en-us';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { content: i18n[lang] });
});

module.exports = router;
