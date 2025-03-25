const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};



// Add this JavaScript code to your existing script.js file 4 email notifications
if (window.location.href.endsWith("index.html")) {
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("form");
        const submitButton = document.getElementById("submit-button");
      
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            // Get form input values
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const message = document.getElementById("message").value;
      
            // Prepare the data to send to contact.php
            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("message", message);
      
            // Send the form data to contact.php
            fetch("contact.php", {
                method: "POST",
                body: formData,
            })
            .then((response) => response.text())
            .then((data) => {
                // Handle the response from contact.php (e.g., show a success message)
                console.log(data);
                // You can add more UI/UX interactions as needed.
            })
            .catch((error) => {
                // Handle errors (e.g., show an error message)
                console.error("Error:", error);
            });
        });
    });
}
