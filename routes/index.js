var express = require('express');
var router = express.Router();
const quizCtrl = require('../controllers/quiz');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/*GET creditos. */
router.get('/credits', function(req, res, next) {
  res.render('credits', { title: 'Creditos' });
});

/*GET quizzes.*/
router.get('/quizzes', quizCtrl.index);

module.exports = router;
