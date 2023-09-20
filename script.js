$(document).ready(function() {
    // When the form is submitted
    $("#questionnaireForm").submit(function(event) {
        event.preventDefault(); // Prevent the form from actually submitting

        var answer = $("#q1").val(); // Get the value from the dropdown

        if (answer === "yes") {
            $("#followUpQuestion").show(); // If answer is "yes", show the next question
        } else {
            alert('Thank you for your response!'); // If answer is "no", show a thank you message (or do something else if you prefer)
        }
    });
});
