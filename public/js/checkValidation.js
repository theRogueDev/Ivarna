$(document).ready(function () {


    $("#passesForm").submit(function (e) {
        e.preventDefault();
        alert("Submitting");
    });

    // Populate valid details fields
    $("#numPassesSelect").change(function () {
        var numPasses = $(this).val();
        generateFields(numPasses);
    });

});


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