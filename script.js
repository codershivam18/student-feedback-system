const form = document.getElementById("feedbackForm");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page refresh

    const formData = new FormData(form);

    // TEMP: log data (for testing)
    console.log("Form Submitted");
    for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
    }

    alert("Feedback submitted successfully!");

    form.reset();
});
