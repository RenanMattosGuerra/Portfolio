const checkbox = document.getElementById("checkmode")
const text = document.getElementById('contato')
const modechange = document.querySelectorAll("body, header, nav, main, h1, h2, h3, h4, h5, i, button")

checkbox.addEventListener("change", () => {
    modechange.forEach(element => {
        element.classList.toggle("darkmode")
        text.classList.toggle('darkmode')
    })
    
})