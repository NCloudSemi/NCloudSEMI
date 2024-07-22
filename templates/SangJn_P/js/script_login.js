document.getElementById("showSignup").addEventListener("click", function() {
    document.getElementById("login").classList.add("hidden");
    setTimeout(function() {
        document.getElementById("join").classList.remove("hidden");
    }, 500);
});

document.getElementById("showLogin").addEventListener("click", function() {
    document.getElementById("join").classList.add("hidden");
    setTimeout(function() {
        document.getElementById("login").classList.remove("hidden");
    }, 500);
});