$(document).ready(function() {

    // Show or hide follow-up question based on "Do you like ice cream?" answer
    $("#q1").change(function() {
        if ($(this).val() === "yes") {
            $("#followUpQuestion").show();
        } else {
            $("#followUpQuestion").hide();
        }
    });

    // Handle form submission
    $("#questionnaireForm").submit(function(event) {
        event.preventDefault();

        // Collect form data
        var formData = {
            "Email": $("#email").val(),
            "Ice Cream": $("#q1").val(),
            "Flavor": $("#q2").val()
        };

        // Send form data to the server
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
