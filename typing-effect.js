document.addEventListener("DOMContentLoaded", () => {
    const text = "GreatPro's Book Store is your one-stop destination for the best light novels, manga, and books from around the world. We are dedicated to providing our readers with captivating stories, unforgettable characters, and a seamless shopping experience. Whether you're a fan of fantasy, romance, or adventure, our collection has something for everyone. Explore our store and discover your next favorite book today!";
    const typingText = document.getElementById("typing-text");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust typing speed here
        }
    }

    type();
});