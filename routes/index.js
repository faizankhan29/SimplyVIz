var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/bar', function(req, res, next) {
  res.render('bar', { title: 'Bar' });
});

router.get('/line', function(req, res, next) {
  res.render('line', { title: 'Line' });
});

router.get('/scatterplot', function(req, res, next) {
  res.render('scatterplot', { title: 'Scatterplot' });
});

router.get('/radarchart', function(req, res, next) {
  res.render('radarchart', { title: 'Radarchart' });
});

router.get('/linedata', function(req, res, next) {
  res.render('linedata', { title: 'Linedata' });
});

router.get('/bubble', function(req, res, next) {
  res.render('bubble', { title: 'Bubble' });
});

router.get('/stream', function(req, res, next) {
  res.render('streamgraph', { title: 'Streamgraph' });
});
/*
router.post('/line',function(req,res,next){
// var height=req.body.LineHeight;
 //var width=req.body.LineWidth;
 //var c1=req.body.data1;
 //var c2=req.body.data2;
 //console.log('Height:'+height);
 //res.send(html);
 res.render('line',{height:height,width:width,datax:c1,datay:c2});
});*/
module.exports = router;
