// npx @tailwindcss/cli -i ./css/estilo.css -o ./css/output.css --watch


//MOSTRAR O CAMPO PARA EDITAR PRODUTOS
let CampoEditarPai = document.getElementById("CampoEditarPai")
let CampoEditarFilho = document.getElementById("CampoEditarFilho")

//
let id = ""
//
function mostrar(valor){
    CampoEditarPai.classList.toggle("opacity-0")
    CampoEditarPai.classList.toggle("pointer-events-none")
    CampoEditarFilho.classList.toggle("-translate-y-full")

    id = valor
}

//MOSTRAR O CAMPO PARA NAVEGAR ENTRE AS PAGINAS
function mostrarOpçoes(){
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    if(mediaQuery.matches){
        lateral.classList.toggle("w-full")
    }else{
        lateral.classList.toggle("w-70")
    }
    lateral.classList.toggle("left-0")
    opcoes.classList.toggle("rotate-180")
}


//CARREGAR 

async function carregar(){
    let api = await fetch("https://69e42b0bcfa9394db8d9f6e6.mockapi.io/products")
    let obj = await api.json()
    obj.forEach((index) => {
        modelo(index.nome, index.preco, index.id)
    });
}


let container = document.getElementById("container")

function modelo(nome, preco, id){
    container.innerHTML += `
        <div class="relative w-80 h-54 shadow-xl/30 rounded-xl border p-4" id="${id}">
            <h2 class="text-2xl"> <strong> ${nome} </strong></h2>
            <p class="text-lg">R$ ${preco},00 </p>

            <div class="absolute bottom-10 w-max">
                <button class="px-8 py-1 text-white bg-blue-600 rounded-md border" onclick="mostrar(${id})">Editar</button>
                <button class="px-8 py-1 text-white bg-red-600 rounded-md border" onclick="deletar(${id})">Excluir</button>
            </div>
        </div>
        `
}

carregar()

//APAGAR O PRODUTO
function deletar(valor){
    let elemento = document.getElementById(valor)
    elemento.remove()
    fetch("https://69e42b0bcfa9394db8d9f6e6.mockapi.io/products/" + valor, {
      method: "DELETE"  
    })
}

//EDITAR UMA TAREFA
let inputEditar1 = document.getElementById("camporEditar1") 
let inputEditar2 = document.getElementById("camporEditar2")

function Editar(){
    console.log(id)
     fetch("https://69e42b0bcfa9394db8d9f6e6.mockapi.io/products/" + id, {
        method: "PUT",
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            nome: inputEditar1.value,
            preco: inputEditar2.value
        })
     })

     setTimeout(() => {
        location.reload()
     }, 500);
}
