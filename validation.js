//Get the registration form
const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    //Generate the values entered by the user
    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const github = document.getElementById("github").value.trim();
    const avatar = document.getElementById("avatar").files[0];

    //Generating error message
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const githubError = document.getElementById("githubError");
    const avatarError = document.getElementById("avatarError");

    //Clearing previous error message
    nameError.textContent = "";
    emailError.textContent = "";
    githubError.textContent = "";
    avatarError.textContent = "";

    let valid = true;

    //Check full name
    if (name === "") {
        nameError.textContent = "Please enter your full name.";
        valid = false;
    }
    
    //Check email address
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }

    //Check Github username
    const githubPatter = /^@[A-Za-z0-9-]+$/;
    if (!githubPatter.test(github)) {
        githubError.textContent = "Github username must start with @.";
        valid = false;
    }

    //Check Profile Picture
    if (!avatar) {
        avatarError.textContent = "Please upload a profile picture.";
        valid = false;
    } else {
        const allowedTypes = ["image/jpeg", "image/png"];
        if (!allowedTypes.includes(avatar.type)) {
            avatarError.textContent = "Only JPG and PNG images are allowed.";
            valid = false;
        }
        
        if (avatar.size >= 500 * 1024) {
            avatarError.textContent = "Image must be samller than 500KB.";
            valid = false;
        }
    }

    //You may continue only if all information are accurate
    if (valid) {
        const reader = new FileReader();

        reader.onload = function() {
            localStorage.setItem("fullName", name);
            localStorage.setItem("email", email);
            localStorage.setItem("github", github);
            localStorage.setItem("avatar", reader.result);
            
            const ticketNumber = "#" + Math.floor(10000 + Math.random() * 90000);
            localStorage.setItem("ticketNumber", ticketNumber);

            window.location.href = "ticket.html";
        };

        reader.readAsDataURL(avatar);
    }
});