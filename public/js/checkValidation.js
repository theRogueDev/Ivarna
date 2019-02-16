$(document).ready(function () {

	// Validate the entries
	$("#passesForm").submit(function (e) {
		e.preventDefault();

		if (validatePreEntries()) {
			console.log("Ready to proceed");
		} else {
			console.log("Pre-check failed");
		}
	});

	// Populate valid details fields
	$("#numPassesSelect").change(function () {
		var numPasses = $(this).val();
		generateFields(numPasses);
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

	for (var i = 0; i < numPasses; i++) {
		var fr = '<form action=\"' + $('#surl').val() + '\" method=\"post\">' +
			'<input type=\"hidden\" name=\"firstName\" value=\"' + key + '\" />' +
			'<input type=\"hidden\" name=\"lastName\" value=\"' +
			'</form>';
		var form = jQuery(fr);
		jQuery('body').append(form);
		form.submit();

	}
}