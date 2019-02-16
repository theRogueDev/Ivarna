$(document).ready(function () {

	// Validate the entries
	$("#passesForm").submit(function (e) {
		e.preventDefault();

		if (validatePreEntries()) {
			console.log("Ready to proceed");
			// Populate valid details fields
			var numPasses = $("#numPassesSelect").val();
			generateFields(numPasses);
		} else {
			console.log("Pre-check failed");
		}
	});


});

function validatePreEntries() {
	var proper = true;
	// Check phone number length
	var phoneLength = $("#phoneInput").val().length;
	var emailProvider = $("#emailInput").val().split("@");
	console.log(phoneLength);
	console.log(emailProvider);
	if (phoneLength !== 10) {
		proper = false;
		$("#phoneInput").after("<div class=\"alert alert-danger\">Make sure phone number is correct (No country code needed)</div>");
	}
	if (emailProvider.length !== 2 || !emailProvider[1].includes(".") || emailProvider[1].split(".").length !== 2) {
		proper = false;
		$("emailInput").after("<div class=\"alert alert-danger\">Make sure email address is properly entered</div>");
	}
	return proper;
}


function generateFields(numPasses) {
	$("#formContainer").empty();
	for (var i = 1; i <= numPasses; i++) {
		var fr = '<h5>Pass ' + i + '</h5>' + 
			'<div class="row">' +
			'<div class="col-md-6">' +
			'<input class="form-control" placeholder="First Name" type="text" name="firstName-' + i + '"/>' +
			'</div>' +
			'<div class=" col-md-6">' +
			'<input class="form-control" placeholder="Last Name" type="text" name="lastName-' + i + '"/>' + 
			'</div>' +
			'</div>';
		var form = $(fr);
		$('#formContainer').append(form);
	}
}