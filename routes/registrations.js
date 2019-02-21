var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser').json();
var models = require('../utilities/registrationModels');
var events = require('../utilities/eventsMap')

router.get('/:event', function (req, res) {
	var event = req.params.event;
	console.log(event);
	console.log(events);

	if (event in events) {
		res.render('registrations/' + event, { title: events[event] });
	} else {
		console.log("Event doesn't exist");
		res.redirect('/events');
	}

});

router.post('/:event/register', function(req, res) {
	var event = req.params.event;
	var Model = models[event];

	Model.create(req.body, function (err, resp) {
		if (err) {
			console.log(err);
			res.send("Check console for error message");
		} else {
			console.log(resp);
			res.send(resp);
		}
	});
});

module.exports = router;