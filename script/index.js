let CampoEditarPai = document.getElementById("CampoEditarPai")
let CampoEditarFilho = document.getElementById("CampoEditarFilho")

function mostrar(){
    

    CampoEditarFilho.classList.toggle("-translate-y-full")
    CampoEditarPai.classList.toggle("opacity-0")
    CampoEditarPai.classList.toggle("pointer-events-none")
}
