
window.addEventListener("scroll", (e) => {
    
let pvbaBar = document.querySelector(".pvbaAnim");
let hmtlBar = document.querySelector(".htmlAnim");
let jsBar = document.querySelector(".jsAnim");
let creatifBar = document.querySelector(".creatifAnim");
let gpBar = document.querySelector(".gpAnim");
let reactBar = document.querySelector(".reactAnim");
    
if (window.scrollY > 800){
    pvbaBar.style.width = "85%";
    hmtlBar.style.width = "90%";
    jsBar.style.width = "65%";
    creatifBar.style.width = "80%";
    gpBar.style.width = "80%";
    reactBar.style.width = "35%";
}
    else{
     pvbaBar.style.width = "0%";
    hmtlBar.style.width = "0%";
    jsBar.style.width = "0%";
    creatifBar.style.width = "0%";
    gpBar.style.width = "0%";
    reactBar.style.width = "0%";
    }
});


// ****************Toggle Menu***************
const menuToggle = document.querySelector(".toggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    sidebar.classList.toggle("active");
});

const liens = document.querySelectorAll(".lien");

for (var i = 0; i < liens.length; i++) {
liens[i].addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    sidebar.classList.toggle("active");
});
}

