$(document).ready(function() {

    $("#q1").change(function() {
        if ($(this).val() === "yes") {
            $("#followUpQuestion").show();
        } else {
            $("#followUpQuestion").hide();
        }
    });

    $("#questionnaireForm").submit(function(event) {
        event.preventDefault();

        var formData = {
            "Ice Cream": $("#q1").val(),
            "Flavor": $("#q2").val()
        };

        $.ajax({
            type: "POST",
            url: "https://script.google.com/macros/s/AKfycbxvHyd8q5IJOze2atA70LKPLOr0BYaXgvmdQaccWGGRp304HYmHnu16K0_dS-CVWE5N/exec",
            data: formData,
            success: function(response) {
                alert('Data saved successfully!');
            },
            error: function(err) {
                alert('There was an error saving the data.');
            }
        });
    });
});
