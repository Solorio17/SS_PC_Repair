var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");

router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post("/send", function(req, res, next){
    var transporter = nodemailer.createTransport({
      service: "Gmail",
      auth:{
        user: "testingakount17@gmail.com",
        pass: "testingakountpassword"
      }
    });

    var mailOptions = {
      from: '"Test Account" <testingakount17@gmail.com>',
      to : 'testakkount217@gmail.com',
      subject: "Hello from test account 1",
      text: 'You have a submission from... Name: '+req.body.name+ ' Email: '+req.body.email+ ' Message: '+req.body.message
    }
    transporter.sendMail(mailOptions, function(err, info){
      if(err){
        console.log(err);
      }else {
        console.log("Message Sent: " + info.response);
        res.redirect("/");
      }
    });
});

module.exports = router;
