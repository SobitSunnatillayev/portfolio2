let headerTitle = document.querySelector(".header__title")

let fullText = headerTitle.innerHTML
let stop = 0

headerTitle.innerHTML = ""

function runText(x = 0) {
    headerTitle.innerHTML += fullText[x]
    x++
    
    stop = setTimeout(() => {
        runText(x)
    }, 100);
    
    if (x == 32) {
        clearTimeout(stop)
        headerTitle.innerHTML += `<span style="color: rgba(5, 104, 195, 1);">Frontend Developer</span>`
    }
}

runText()