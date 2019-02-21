$(document).ready(function () {
    $("#fields").submit(function (e) { 
        e.preventDefault();

		var fields = $("#fields input");
		var formData = {};

		for (var i = 0; i < fields.length; i++) {
            formData[fields[i].name] = fields[i].value;
		}

        console.log(formData);
        var splits = $(location).attr('href').split('/');
        var event = splits[splits.length - 1];
        
		$.post("/registrations/" + event + "/register", formData,
			function (resp) {
				console.log(resp);
				var transactionPack = resp;
				console.log(transactionPack);
				
				//- prod: https://securegw.paytm.in/theia/processTransaction
				//- staging: https://securegw-stage.paytm.in/theia/processTransaction
				$("body").append($('<form id="f2" action="https://securegw.paytm.in/theia/processTransaction" method="post" style="visibility: hidden;"></form>'));

				for (var key in transactionPack) {
					$("#f2").append("<input name='" + key + "' " + "value='" + transactionPack[key] + "'/>");
				}
				$("#f2").submit();
			},
			"json"
		);
    });
});