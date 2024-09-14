let headerCircle1 = document.querySelector(".header__circle1")
let headerCircle2 = document.querySelector(".header__circle2")
let headerCircle3 = document.querySelector(".header__circle3")
let headerCircle4 = document.querySelector(".header__circle4")
let headerCircle5 = document.querySelector(".header__circle5")
let headerCircle6 = document.querySelector(".header__circle6")

function animateCircle() {
    setTimeout(() => {
        headerCircle1.style.transform = "translateX(0) rotate(0)"
        headerCircle2.style.transform = "translateX(0)"
        headerCircle3.style.transform = "translateX(0)"
        headerCircle4.style.transform = "translateX(0) rotate(0)"
        headerCircle5.style.transform = "translateX(0) rotate(0)"
        headerCircle6.style.transform = "translateX(0) rotate(0)"
    }, 300)
}

animateCircle()


let headerLines = document.querySelector(".header__lines")
let headerLine = document.querySelector(".header__line")
let headerMenu = document.querySelector(".header__menu")
let body = document.querySelector("body")

headerLines.addEventListener("click", function() {
    headerLines.classList.toggle("active")
    headerLine.classList.toggle("active")
    headerMenu.classList.toggle("active")
    body.classList.toggle("active")
})