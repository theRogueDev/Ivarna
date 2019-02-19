$(document).ready(function () {
	$("#f1").submit(function (e) { 
		e.preventDefault();
		var data = {
			
		}
		// var data = JSON.stringify($("#f1").serializeArray());
		// console.log(data);
		$.post("/pay/get-checksum", {
			"name": $("#name").val(),
			"phone": $("#phone").val(),
			"email": $("#email").val()
		},
			function (resp) {
				console.log(resp);
				var transactionPack = resp;
				console.log(transactionPack);
				for (var key in transactionPack) {
					$("#f2").append("<input name='" + key + "' " + "value='" + transactionPack[key] + "'/>");
				}
				$("f2").submit();
			},
			"json"
		);
	});
});