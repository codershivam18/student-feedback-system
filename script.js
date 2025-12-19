const form = document.getElementById("feedbackForm");
const scriptURL = "https://script.google.com/macros/s/AKfycby_003Q-STrD5Q4CWwazvalN8HBf2rJ7_AURJnqudxK2D9aMyR_Q9ydCMIS6wZ376jBMQ/exec";

form.addEventListener("submit", e => {
    e.preventDefault();

    fetch(scriptURL, {
        method: "POST",
        body: new FormData(form)
    })
    .then(() => {
        alert("Feedback submitted successfully!");
        form.reset();
    })
    .catch(error => {
        alert("Error submitting feedback!");
        console.error(error);
    });
});
