
const {exibirIdade, exibirNome} = require('./exibeNome');

exibirNome();
exibirIdade();

//Async

// fetch().then().then();

//Criar async

async function retonaNome(){
    for(let i = 0; i < 10000000000000000000000000000000; i++)
    return "Jaime";
}

let result = retonaNome();

result.then(function(nome){
    console.log(nome)
})

console.log("depois")

//Async-Await

async function resultado(){
    let nome = await retonaNome()
    console.log(nome)
}

resultado()