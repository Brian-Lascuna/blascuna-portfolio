var horiseon = document.getElementById("horiseon");
var passwordGenerator = document.getElementById("passwordGenerator");
var projectsTBA = document.querySelectorAll("#comingSoon");
var resumeBtn = document.getElementById("resumeBtn");

horiseon.addEventListener("click", function() {
    window.location.href = "https://brian-lascuna.github.io/horiseon-code-refactor/";
})

passwordGenerator.addEventListener("click", function() {
    window.location.href = "https://brian-lascuna.github.io/password-generator/";
})

for (var i = 0; i < projectsTBA.length; i++) {
    projectsTBA[i].addEventListener("click", function() {
        alert("Project coming soon");
    });
}

resumeBtn.addEventListener("click", function() {
    alert("Currently a WIP");
})