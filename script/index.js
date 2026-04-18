let CampoEditarPai = document.getElementById("CampoEditarPai")
let CampoEditarFilho = document.getElementById("CampoEditarFilho")

//MOSTRAR O CAMPO PARA EDITAR PRODUTOS
function mostrar(){
    

    CampoEditarFilho.classList.toggle("-translate-y-full")
    CampoEditarPai.classList.toggle("opacity-0")
    CampoEditarPai.classList.toggle("pointer-events-none")
}


//MOSTRAR O CAMPO PARA NAVEGAR ENTRE AS PAGINAS
let lateral = document.getElementById("lateral")
let opcoes = document.getElementById("opcoes")

function mostrarOpçoes(){
    lateral.classList.toggle("absolute")
    lateral.classList.toggle("relative")
    lateral.classList.toggle("left-0")
    opcoes.classList.toggle("rotate-180")
}
