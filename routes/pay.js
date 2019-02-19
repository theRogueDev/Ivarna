var express = require('express');
var checksum = require('../checksum/checksum');
var uuidv1 = require('uuid/v1');
var bodyParser = require('body-parser').json();

var router = express.Router();
router.use(bodyParser);

// router.get('/', function (req, res, next) {
// 	res.render('pay/checkout', { title: "EDM Passes Checkout" });
// });

router.get('/', function (req, res) {
	res.render('pay/test', { title: "pay test" });
})

router.post('/get-checksum', function (req, res) {
	var data = req.body;

	console.log(data);

	var key = "PNm!rhPpPvqPt2Sp";
	var params = {};
	params['MID'] = "ZhCLfm38291372078650";
	params['WEBSITE'] = "https://ivarna.herokuapp.com";
	params['CHANNEL_ID'] = "WEB";
	params['INDUSTRY_TYPE_ID'] = "Retail";
	params['ORDER_ID'] = uuidv1();
	params['CUST_ID'] = data.name;
	params['TXN_AMOUNT'] = 5 * 800;
	params['CALLBACK_URL'] = "https://ivarna.herokuapp.com/pay/response";
	params['EMAIL'] = data.email;
	params['MOBILE_NO'] = data.phone;

	console.log(params);

	checksum.genchecksum(params, key, function (err, checksum) {
		if (err) console.log(err);
		params['CHECKSUMHASH'] = checksum;
		res.send(JSON.stringify(params));
		console.log("3");
	});

	console.log("4");

});

router.post('/response', function (req, res) {

	res.send(req.body);

	// var key = req.body.key;
	// var salt = req.body.salt;
	// var txnid = req.body.txnid;
	// var amount = req.body.amount;
	// var productinfo = req.body.productinfo;
	// var firstname = req.body.firstname;
	// var email = req.body.email;
	// var udf5 = req.body.udf5;
	// var mihpayid = req.body.mihpayid;
	// var status = req.body.status;
	// var resphash = req.body.hash;

	// var keyString = key + '|' + txnid + '|' + amount + '|' + productinfo + '|' + firstname + '|' + email + '|||||' + udf5 + '|||||';
	// var keyArray = keyString.split('|');
	// var reverseKeyArray = keyArray.reverse();
	// var reverseKeyString = salt + '|' + status + '|' + reverseKeyArray.join('|');

	// var cryp = crypto.createHash('sha512');
	// cryp.update(reverseKeyString);
	// var calchash = cryp.digest('hex');

	// var msg = 'Payment failed for Hash not verified...';
	// if (calchash == resphash)
	// 	msg = 'Transaction Successful and Hash Verified...';

	// res.render('response', {
	// 	key: key, salt: salt, txnid: txnid, amount: amount, productinfo: productinfo,
	// 	firstname: firstname, email: email, mihpayid: mihpayid, status: status, resphash: resphash, msg: msg
	// });
});

module.exports = router;
