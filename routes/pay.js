var express = require('express');
var checksum = require('../checksum/checksum');
var uuidv1 = require('uuid/v1');
var bodyParser = require('body-parser').json();
var mongoose = require('mongoose');

var edmSchema = new mongoose.Schema({
	order_id: String,
	name: String,
	email: String,
	phone: Number,
	amount: Number,
	numPasses: Number,
	passes: [{ firstName: String, lastName: String }],
	status: String
});
var EdmPass = mongoose.model("EdmPass", edmSchema, "edmpasses");

var router = express.Router();
router.use(bodyParser);

router.get('/', function (req, res) {
	res.render('pay/checkout', { title: "Ivarna | Checkout" });
})

router.post('/checkout', function (req, res) {
	var data = req.body;
	var transaction = {};
	var names = [];
	var name = {};

	for (var key in data) {
		if (key.includes('firstName-')) {
			name.firstName = data[key];
		}
		if (key.includes('lastName-')) {
			name.lastName = data[key];
			names.push(name);
		}
	}

	transaction.name = data.firstName.replace(' ', '') + ' ' + data.lastName.replace(' ', '');
	transaction.phone = data.phone;
	transaction.email = data.email;
	transaction.amount = data.numPasses * 800;
	transaction.status = "PENDING",
	transaction.order_id = uuidv1();
	transaction.numPasses = data.numPasses;
	transaction.passes = names;

	EdmPass.create(transaction, function(err, resp) {
		if (err) console.log(err);
		else console.log(resp);
	});

	// Checking the amount
	// Make sure to get the amount again server side
	// based on the number of passes in formData
	// In the DB, delete from the last however many get mismatched
	// Check in the CB url too if the amount is matching the number
	// of passes for extra security.

	for (key in data) {
		console.log(key + " -> " + data[key]);
	}

	var key = "E7yyNS2mbS2SE2&r";
	var params = {};
	params['MID'] = "ZhCLfm38291372078650";
	params['WEBSITE'] = "DEFAULT";
	params['CHANNEL_ID'] = "WEB";
	params['PAYMENT_MODE_ONLY'] = "YES";
	params['PAYMENT_TYPE_ID'] = "CC";
	params['AUTH_MODE'] = "3D";
	params['INDUSTRY_TYPE_ID'] = "Retail";
	params['ORDER_ID'] = transaction.order_id;
	params['CUST_ID'] = data.email;
	params['TXN_AMOUNT'] = data.numPasses * 800;
	params['CALLBACK_URL'] = "https://ivarna.herokuapp.com/pay/response";
	params['EMAIL'] = data.email;
	params['MOBILE_NO'] = data.phone;

	console.log(params);

	checksum.genchecksum(params, key, function (err, checksum) {
		if (err) console.log(err);
		params['CHECKSUMHASH'] = checksum;
		res.send(JSON.stringify(params));
	});

});

router.post('/response', function (req, res) {
	var response = req.body;
	
	console.log(response.RESPCODE);
	console.log(response);

	if (response.RESPCODE == 1) {
		EdmPass.update({'order_id': response.ORDERID}, {$set: {'status':'CONFIRMED'}}).exec();
		res.send("Your passes have been confirmed");
	} else {
		EdmPass.deleteOne({order_id: response.order_id});
		res.send("Transaction was unable to complete");
	}

});

// Testing route
router.get('/test', function(req, res) {

	EdmPass.update({'order_id': "81e4d040-3482-11e9-9805-3d3aeedb140c"}, {$set: {'status':'CONFIRMED'}}).exec();
	res.send("Your passes have been confirmed");
})

module.exports = router;
