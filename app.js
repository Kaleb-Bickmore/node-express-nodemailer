var express=require('express');
var app=express();
var request=require('superagent');
var parser=require('body-parser');
var nodemailer = require('nodemailer');


app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.use(express.static(__dirname + '/views/css'));

app.use(parser.urlencoded({extended:false}))
app.use(parser.json())
app.get('/',function(req,res){
  res.render('index');
});

app.post('/results',function(req,res){
  var fullName = req.body.name;
  var emailGiven = req.body.email;
    var messageGiven = req.body.message;
  var transporter = nodemailer.createTransport('smtps://example%40gmail.com:pass@smtp.gmail.com');
  var mailOptions = {
      from: emailGiven,
      to: emailGiven,
      subject: 'Hate Mail',
      email:emailGiven,
      text: messageGiven
  };
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
          res.render('results', {
            name: fullName,
            email: emailGiven,
            message:messageGiven,
            heading:"Message was not Sent",

           });
         }
          else{
            res.render('results', {
              name: fullName,
              email: emailGiven,
              message:messageGiven,
              heading:"Message Sent!",
             });

}

});
         });






app.listen(3000);
console.log('server on port 3000')
