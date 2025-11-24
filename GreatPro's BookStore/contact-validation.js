document.getElementById("contact-form").addEventListener("submit", function (event) {
    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const comments = document.getElementById("comments");

    const nameError = document.getElementById("name-error");
    const phoneError = document.getElementById("phone-error");
    const emailError = document.getElementById("email-error");
    const commentsError = document.getElementById("comments-error");

    // Regular expressions for validation
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    // Clear previous error messages
    nameError.style.display = "none";
    phoneError.style.display = "none";
    emailError.style.display = "none";
    commentsError.style.display = "none";


    // Validate name
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required.";
        nameError.style.display = "inline";
        name.focus();
        name.select();
        isValid = false;
    }

    // Validate phone number
    if (!phoneRegex.test(phone.value)) {
        phoneError.textContent = "Please enter a valid 10-digit phone number.";
        phoneError.style.display = "inline";
        if (isValid) {
            phone.focus();
            phone.select();
        }
        isValid = false;
    }

    // Validate email
    if (!emailRegex.test(email.value)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "inline";
        if (isValid) {
            email.focus();
            email.select();
        }
        isValid = false;
    }

    // Validate comments
    if (comments.value.trim() === "") {
        commentsError.textContent = "Comments are required.";
        commentsError.style.display = "inline";
        if (isValid) {
            comments.focus();
            comments.select();
        }
        isValid = false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
});