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
            url: "https://script.google.com/macros/s/AKfycbw26thcSanEpZgVEaao7CJ8jBRGh-dSLgAfQDuCV_RjBS-R1vE-TuOQnleEirKSxCGHlQ/exec",
            data: formData,
            success: function(response) {
                alert('Bedankt voor het aanmelden van het project!');
            },
            error: function(err) {
                alert('Error!');
            }
        });
    });
});
