// npx @tailwindcss/cli -i ./css/estilo.css -o ./css/output.css --watch


//MOSTRAR O CAMPO PARA EDITAR PRODUTOS
let CampoEditarPai = document.getElementById("CampoEditarPai")
let CampoEditarFilho = document.getElementById("CampoEditarFilho")

//
let id = ""
//
async function api(){
    try{
        let api = await fetch("https://69e42b0bcfa9394db8d9f6e6.mockapi.io/products")

        if(!api.ok == true){
            alert("erro, tente novamente mais tarde")
        }else{
            return await api.json()
        }

    }catch{
        alert("Conecte-se a internet para conseguir carregar os seus produtos.")
    }
    
}



function mostrar(valor){
    CampoEditarPai.classList.toggle("opacity-0")
    CampoEditarPai.classList.toggle("pointer-events-none")
    CampoEditarFilho.classList.toggle("-translate-y-full")

    id = valor
    inputEditar1.focus()
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
    let obj = await api()

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
    api()
    fetch("https://69e42b0bcfa9394db8d9f6e6.mockapi.io/products/" + valor, {
      method: "DELETE"  
    })
    let elemento = document.getElementById(valor)
    elemento.remove()
}

//EDITAR UMA TAREFA
let inputEditar1 = document.getElementById("camporEditar1") 
let inputEditar2 = document.getElementById("camporEditar2")

inputEditar1.addEventListener("keyup", (e) => {
    if(e.key == "Enter"){
        inputEditar2.focus()
    }
})
inputEditar2.addEventListener("keyup", (e) => {
    if(e.key == "Enter"){
        Editar()
    }
})


async function Editar(){
    api()
    
    let mensagemEditar = document.getElementById("mensagemEditar")
    let inputEditar1 = document.getElementById("camporEditar1")
    let inputEditar2 = document.getElementById("camporEditar2")

    if(!inputEditar1.value == "" && !inputEditar2.value == ""){

                await fetch("https://69e42b0bcfa9394db8d9f6e6.mockapi.io/products/" + id, {
                   method: "PUT",
                   headers: { 
                       'Content-Type': 'application/json' 
                   },
                   body: JSON.stringify({
                       nome: inputEditar1.value,
                       preco: inputEditar2.value
                   })
                })
           
                document.getElementById(id).innerHTML = `
                    <h2 class="text-2xl"> <strong> ${inputEditar1.value} </strong></h2>
                    <p class="text-lg">R$ ${inputEditar2.value},00 </p>
        
                    <div class="absolute bottom-10 w-max">
                        <button class="px-8 py-1 text-white bg-blue-600 rounded-md border" onclick="mostrar(${id})">Editar</button>
                        <button class="px-8 py-1 text-white bg-red-600 rounded-md border" onclick="deletar(${id})">Excluir</button>
                    </div>`
    
        mostrar()
        inputEditar1.value = ""
        inputEditar2.value = ""
    }else{
        mensagemEditar.classList.remove("hidden")
        setTimeout((e) => {
            mensagemEditar.classList.add("hidden")
        }, 4000);
    }
}

//PESQUISAR
let pesquisarInput = document.getElementById("pesquisar")

function procurar(){
    pesquisarInput.classList.toggle("px-4")
    pesquisarInput.classList.toggle("border-2")
    pesquisarInput.classList.toggle("w-50")

    pesquisarInput.focus()
}

async function pesquisar(){
    let valor = pesquisarInput.value;

    let dados = await api()
    

    dados.forEach(index => {
        let nome = index.nome;
        if(nome.includes(valor)){
            document.getElementById(index.id).style.display = "inline-block"
        }else{
            document.getElementById(index.id).style.display = "none"
        }
    });
}
