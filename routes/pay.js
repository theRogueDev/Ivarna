var express = require('express');
var crypto = require('crypto');
var uuidv1 = require('uuid/v1');
var bodyParser = require('body-parser').json();

var router = express.Router();
router.use(bodyParser);

router.get('/', function (req, res, next) {
	res.render('pay/checkout', { title: "EDM Passes Checkout", orderid: uuidv1() });
});

router.post('/', function (req, res) {
	var data = req.body;
	var cryp = crypto.createHash('sha512');
	var text = data.key + '|' + data.txnid + '|' + data.amount + '|' + data.pinfo + '|' + data.fname + '|' + data.email + '|||||' + data.udf5 + '||||||' + data.salt;
	cryp.update(text);
	var hash = cryp.digest('hex');
	res.send(JSON.stringify(hash));
});

router.post('/response', function (req, res) {
	var key = req.body.key;
	var salt = req.body.salt;
	var txnid = req.body.txnid;
	var amount = req.body.amount;
	var productinfo = req.body.productinfo;
	var firstname = req.body.firstname;
	var email = req.body.email;
	var udf5 = req.body.udf5;
	var mihpayid = req.body.mihpayid;
	var status = req.body.status;
	var resphash = req.body.hash;

	var keyString = key + '|' + txnid + '|' + amount + '|' + productinfo + '|' + firstname + '|' + email + '|||||' + udf5 + '|||||';
	var keyArray = keyString.split('|');
	var reverseKeyArray = keyArray.reverse();
	var reverseKeyString = salt + '|' + status + '|' + reverseKeyArray.join('|');

	var cryp = crypto.createHash('sha512');
	cryp.update(reverseKeyString);
	var calchash = cryp.digest('hex');

	var msg = 'Payment failed for Hash not verified...';
	if (calchash == resphash)
		msg = 'Transaction Successful and Hash Verified...';

	res.render('response', {
		key: key, salt: salt, txnid: txnid, amount: amount, productinfo: productinfo,
		firstname: firstname, email: email, mihpayid: mihpayid, status: status, resphash: resphash, msg: msg
	});
});

module.exports = router;
