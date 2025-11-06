/*Variables declaración*/ 
let textowhastsapp = document.getElementById("texto-wp")
let textoinstagram = document.getElementById("texto-ig")
let textox = document.getElementById("texto-x")
let textofacebook = document.getElementById("texto-fb")
let textotiktok = document.getElementById("texto-tt")
let textoyoutube = document.getElementById("texto-yt")
let textootro = document.getElementById("texto-otro")

let inputwhatsapp = document.getElementById("wp")
let inputinstagram = document.getElementById("ig")
let inputx = document.getElementById("x")
let inputfacebook = document.getElementById("fb")
let inputtiktok = document.getElementById("tt")
let inputyoutube = document.getElementById("yt")
let inputotro = document.getElementById("otro")

/*Función convertir a horas minutos*/
function convertirAHorasMinutos(minutos) {
    let horas = Math.floor(minutos / 60)
    let mins = minutos % 60
    return `${horas.toString()}h ${mins.toString()}min`
}
/*Función inputs*/
function tomarValor(){
    /*Variables*/
    let wValue = parseInt(inputwhatsapp.value)
    let iValue = parseInt(inputinstagram.value)
    let xValue = parseInt(inputx.value)
    let fValue = parseInt(inputfacebook.value)
    let tValue = parseInt(inputtiktok.value)
    let yValue = parseInt(inputyoutube.value)
    let oValue = parseInt(inputotro.value)
    /*WhatsApp*/ 
    textowhastsapp.textContent = convertirAHorasMinutos(wValue)
    textowhastsapp.classList.remove("destacado", "destacado2", "destacado3")
    if (wValue >= 299) {
        textowhastsapp.classList.add("destacado3")
    } else if (wValue >= 240) {
        textowhastsapp.classList.add("destacado2")
    } else if (wValue >= 120) {
        textowhastsapp.classList.add("destacado")
    }
    /*Instagram*/ 
    textoinstagram.textContent = convertirAHorasMinutos(iValue)
    textoinstagram.classList.remove("destacado", "destacado2", "destacado3")
    if (iValue >= 299) {
        textoinstagram.classList.add("destacado3")
    } else if (iValue >= 240) {
        textoinstagram.classList.add("destacado2")
    } else if (iValue >= 120) {
        textoinstagram.classList.add("destacado")
    }
    /*X*/
    textox.textContent = convertirAHorasMinutos(xValue)
    textox.classList.remove("destacado", "destacado2", "destacado3")
    if (xValue >= 299) {
        textox.classList.add("destacado3")
    } else if (xValue >= 240) {
        textox.classList.add("destacado2")
    } else if (xValue >= 120) {
        textox.classList.add("destacado")
    }
    /*Facebook*/
    textofacebook.textContent = convertirAHorasMinutos(fValue)
    textofacebook.classList.remove("destacado", "destacado2", "destacado3")
    if (fValue >= 299) {
        textofacebook.classList.add("destacado3")
    } else if (fValue >= 240) {
        textofacebook.classList.add("destacado2")
    } else if (fValue >= 120) {
        textofacebook.classList.add("destacado")
    }
    /*Tiktok*/
    textotiktok.textContent = convertirAHorasMinutos(tValue)
    textotiktok.classList.remove("destacado", "destacado2", "destacado3")
    if (tValue >= 299) {
        textotiktok.classList.add("destacado3")
    } else if (tValue >= 240) {
        textotiktok.classList.add("destacado2")
    } else if (tValue >= 120) {
        textotiktok.classList.add("destacado")
    }
    /*Youtube*/
    textoyoutube.textContent = convertirAHorasMinutos(yValue)
    textoyoutube.classList.remove("destacado", "destacado2", "destacado3")
    if (yValue >= 299) {
        textoyoutube.classList.add("destacado3")
    } else if (yValue >= 240) {
        textoyoutube.classList.add("destacado2")
    } else if (yValue >= 120) {
        textoyoutube.classList.add("destacado")
    }
    /*Otro*/
    textootro.textContent = convertirAHorasMinutos(oValue)
    textootro.classList.remove("destacado", "destacado2", "destacado3")
    if (oValue >= 299) {
        textootro.classList.add("destacado3")
    } else if (oValue >= 240) {
        textootro.classList.add("destacado2")
    } else if (oValue >= 120) {
        textootro.classList.add("destacado")
    }
}
/*Función btn limpiar*/
function limpiar(){
    textowhastsapp.textContent = "0h 0min"
    inputwhatsapp.value = 0
    textowhastsapp.classList.remove("destacado", "destacado2", "destacado3")

    textoinstagram.textContent = "0h 0min"
    inputinstagram.value = 0
    textoinstagram.classList.remove("destacado", "destacado2", "destacado3")

    textox.textContent = "0h 0min"
    inputx.value = 0
    textox.classList.remove("destacado", "destacado2", "destacado3")

    textofacebook.textContent = "0h 0min"
    inputfacebook.value = 0
    textofacebook.classList.remove("destacado", "destacado2", "destacado3")

    textotiktok.textContent = "0h 0min"
    inputtiktok.value = 0
    textotiktok.classList.remove("destacado", "destacado2", "destacado3")

    textoyoutube.textContent = "0h 0min"
    inputyoutube.value = 0
    textoyoutube.classList.remove("destacado", "destacado2", "destacado3")

    textootro.textContent = "0h 0min"
    inputotro.value = 0
    textootro.classList.remove("destacado", "destacado2", "destacado3")
}
/*Función btn ver resultados*/
function guardar(){
    let total = parseInt(inputwhatsapp.value) + parseInt(inputinstagram.value) + parseInt(inputx.value) + parseInt(inputtiktok.value) + parseInt(inputyoutube.value) + parseInt(inputotro.value)
    localStorage.setItem("usoApps", total)
    console.log(localStorage.getItem("usoApps"))
    location.href = "./resultados.html"
}
