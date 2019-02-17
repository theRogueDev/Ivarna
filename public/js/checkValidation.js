$(document).ready(function () {

	$("#finalForm").hide();

	// Validate and proceed
	$("#preCheckoutProceed").click(function (e) {
		e.preventDefault();

		if (validatePreEntries()) {
			console.log("Ready to proceed");
			var numPasses = $("#numPassesSelect").val();
			// Hide pre-check form & submit button
			$("#preCheckout").hide();
			// Lock final fields and calculate amount
			lockFinalFields(numPasses);
			// Populate valid details fields
			generateFields(numPasses);
			$("#checkout").css("visibility", "visible");
		} else {
			console.log("Pre-check failed");
		}
	});


	$("#checkout").click(function (e) { 
		e.preventDefault();
		

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

function lockFinalFields(numPasses) {
	var amount = numPasses * 800;
	$("#finalFirstNameInput").val($("#firstNameInput").val());
	$("#finalLastNameInput").val($("#lastNameInput").val());
	$("#finalEmailInput").val($("#emailInput").val());
	$("#finalPhoneInput").val($("#phoneInput").val());
	$("#finalNumPasses").val($("#numPassesSelect").val());
	$("#finalAmount").val(amount);

	$("#finalForm").show();
}

function generateFields(numPasses) {
	for (var i = numPasses; i > 0; i--) {
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
		$('#postCheckout').prepend(form);
	}
}