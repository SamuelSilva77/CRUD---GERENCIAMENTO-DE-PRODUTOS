let CampoEditarPai = document.getElementById("CampoEditarPai")
let CampoEditarFilho = document.getElementById("CampoEditarFilho")

//MOSTRAR O CAMPO PARA NAVEGAR ENTRE AS PAGINAS
let lateral = document.getElementById("lateral")
let opcoes = document.getElementById("opcoes")

function mostrarOpçoes(){
    lateral.classList.toggle("absolute")
    lateral.classList.toggle("relative")
    lateral.classList.toggle("left-0")
    opcoes.classList.toggle("rotate-180")
}

//ADICIONAR TAREFA

//CRIAR.HTML
let nome = document.getElementById("nome")
let preco = document.getElementById("preco")
let avisoR = document.getElementById("avisoR")
let avisoB = document.getElementById("avisoB")


async function adicionarTarefa(){
    if(nome.value == "" || preco.value == ""){
        classes(avisoR, avisoB)
        setTimeout(() => {
            avisoR.classList.add("hidden")
        }, 4000); 
    }else{
        classes(avisoB, avisoR)
        setTimeout(() => {
            avisoB.classList.add("hidden")
        }, 4000);
        modelo(nome.value, preco.value)
    }
    
    nome.value = ""
    preco.value = ""
}

function classes(valor1, valor2){
    valor1.classList.remove("hidden")
    valor2.classList.add("hidden")
}


async function modelo(nome, preco){
    fetch("https://69e42b0bcfa9394db8d9f6e6.mockapi.io/products", {
        method: "POST",

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            nome: nome,
            preco: preco
        })
        
    })
}
