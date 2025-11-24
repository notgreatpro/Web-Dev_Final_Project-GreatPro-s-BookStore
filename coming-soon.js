// Add event listener to the "Notify Me" button
document.getElementById("coming-soon-button").addEventListener("click", function () {
    alert("Thank you, We will notify you when our books is available.");
});

// Add event listener to the "Cancel" button
document.getElementById("cancel-button").addEventListener("click", function () {
    // Hide the "Coming Soon" section when the cancel button is clicked
    document.getElementById("coming-soon-item").style.display = "none";
});