var express = require('express');
var router = express.Router();

router.get('/:event', function (req, res) {
	var event = req.params.event;
	console.log(event);

	res.render('registrations/' + event, { title: event });

});


module.exports = router;