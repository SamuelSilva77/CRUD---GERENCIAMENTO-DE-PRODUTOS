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

//CARREGAR 

async function carregar(){
    let api = await fetch("https://69e42b0bcfa9394db8d9f6e6.mockapi.io/products")
    let obj = await api.json()
    obj.forEach((index) => {
        modelo(index.nome, index.preco)
    });
}


let container = document.getElementById("container")

function modelo(nome, preco){
    container.innerHTML += `
        <div class="relative w-80 h-54 shadow-xl/30 rounded-xl border p-4">
            <h2 class="text-2xl"> <strong> ${nome} </strong></h2>
            <p class="text-lg">R$ ${preco},00 </p>

            <div class="absolute bottom-10 w-max">
                <button class="px-8 py-1 text-white bg-blue-600 rounded-md border" onclick="mostrar()">Editar</button>
                <button class="px-8 py-1 text-white bg-red-600 rounded-md border">Excluir</button>
            </div>
        </div>
        `
}

carregar()
