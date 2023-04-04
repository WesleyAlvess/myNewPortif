// Selecionando elementos via DOM
const ball = document.querySelector("#ball")
const logo = document.querySelector(".logo-a")
const body = document.querySelector("body")
const nav = document.querySelector("nav")

const list = document.querySelectorAll("span")

// Switch 

ball.addEventListener("click", () => {
    ball.classList.toggle("movBall")
})

// Dark mode

ball.addEventListener("click", () => {
    body.classList.toggle("dark")
    nav.classList.toggle("dark")
    logo.classList.toggle("dark")

    list.forEach(item => {
        item.classList.toggle("dark-name")
    })
})

// Skills

const clickSkill = document.querySelector("#clickSkill")
const floatSkill = document.querySelectorAll(".bar span")


function adicionarBorda() {
    for (var i = 0; i < floatSkill.length; i++) {
        floatSkill[i].style.float = "left";
    }
}

function removerBorda() {
    for (var i = 0; i < floatSkill.length; i++) {
        floatSkill[i].classList.remove("float");
    }
}


clickSkill.addEventListener("click", function () {
    removerBorda()
})