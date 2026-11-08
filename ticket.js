//Get the registration details from local storage
const name = localStorage.getItem("fullName");
const email = localStorage.getItem("email");
const github = localStorage.getItem("github");
const avatar = localStorage.getItem("avatar");
const ticketNumber = localStorage.getItem("ticketNumber");

//Check if the registration details are available
if (!name || !email || !github || !avatar) {
    window.location.href = "index.html";
} else {
    document.getElementById("congratsMessage").textContent = "congrats, " + name + "! Your ticket is ready to view.";
    document.getElementById("ticketName").textContent = name;
    document.getElementById("ticketGithub").textContent = github;
    document.getElementById("ticketAvatar").src = avatar;
    document.getElementById("ticketNumber").textContent = "Ticket No: " + ticketNumber;
    const username = github.substring(1);
    document.getElementById("githubLink").href = "https://github.com/" + username;
}

