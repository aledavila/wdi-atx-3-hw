var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.post('/', function(req, res, next) {
    // Twilio Credentials 
    var accountSid = 'Your accountSid Here';
    var authToken = 'Your authToken here';
    var recipient = req.body.to;
    var textMessage = req.body.message;



    //require the Twilio module and create a REST client 
    // var client = require('twilio')(accountSid, authToken); 
    var client = require('twilio')(accountSid, authToken);
    client.messages.create({
        to: recipient,
        from: "+14697891441",
        body: textMessage,
    }, function(err, message) {
        console.log(message.sid);
    });

    res.render('index', {
        title: 'Express'
    });
});


module.exports = router;
