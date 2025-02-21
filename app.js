/*
Desenvolvimento do Desafio do Amigo Secreto
Curso: Oracle ONE - G8
Data: 2025
Aluno: Maria Elisa
*/

let listaDeAmigos = [];
let amigo = '';

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
    
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Sorteio do Amigo Secreto');
    exibirTextoNaTela('h2', 'Digite o nome dos participantes e clique em Sortear');
}

function limparCampo() {
    amigo = document.querySelector('input');
    amigo.value = '';
}

exibirMensagemInicial();

function adicionarAmigo(){   
    let amigo = document.querySelector("input").value;
       if(amigo == ''){
        alert('Por favor, insira um nome!');       
    }else{
        listaDeAmigos.push(amigo);
        limparCampo();
        exibirListaDeAmigos();
        exibirTextoNaTela('h2', 'Digite outro nome ou clique em Sortear!');
        console.log(amigo);
        } 
}

function exibirListaDeAmigos(){
    console.log(listaDeAmigos);
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';
    for(let i = 0; i < listaDeAmigos.length; i++){
        let nome = document.createElement("li");
        nome.textContent = listaDeAmigos[i];
        nome.textContent += i < listaDeAmigos.length - 1 ? ', ' : '.';
        lista.append(nome);
    }
}

function sortearAmigo(){
    indiceLista = parseInt(Math.random() * listaDeAmigos.length);
    console.log(indiceLista);
    console.log(listaDeAmigos[indiceLista]);
    exibirTextoNaTela('h2', `O amigo secreto sorteado é : ${listaDeAmigos[indiceLista]}`);
    }
