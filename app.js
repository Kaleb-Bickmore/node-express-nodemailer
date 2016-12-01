var express=require('express');
var app=express();
var request=require('superagent');
var parser=require('body-parser');
app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.use(express.static(__dirname + '/views/css'));

app.use(parser.urlencoded({extended:false}))
app.use(parser.json())
app.get('/',function(req,res){
  res.render('index');
});

app.post('/results',function(req,res){
  var emailSent = req.body.email;
    var messageSent = req.body.message;
res.render('results', {
  email: emailSent,
  message:messageSent,
  heading:"Message Sent!",
 });
         });

app.listen(3000);
console.log('port 3000')
