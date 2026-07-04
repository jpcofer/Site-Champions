// Script responsável pelas funcionalidades da página
const form = document.getElementById("formContato");

form.addEventListener("submit", function(e){

e.preventDefault();

let valido = true;

function validar(id, erroId, mensagem){

let campo = document.getElementById(id);

let erro = document.getElementById(erroId);

campo.classList.remove("erro","sucesso");

if(campo.value.trim()==""){

erro.innerHTML = mensagem;

campo.classList.add("erro");

valido = false;

}else{

erro.innerHTML="";

campo.classList.add("sucesso");

}

}

validar("nome","erroNome","Informe seu nome.");

validar("email","erroEmail","Informe um e-mail.");

validar("assunto","erroAssunto","Informe o assunto.");

let mensagem = document.getElementById("mensagem");

let erroMensagem = document.getElementById("erroMensagem");

mensagem.classList.remove("erro","sucesso");

if(mensagem.value.trim().length<20){

erroMensagem.innerHTML="A mensagem deve possuir pelo menos 20 caracteres.";

mensagem.classList.add("erro");

valido=false;

}else{

erroMensagem.innerHTML="";

mensagem.classList.add("sucesso");

}

const email = document.getElementById("email");

const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!regex.test(email.value)){

document.getElementById("erroEmail").innerHTML="E-mail inválido.";

email.classList.add("erro");

email.classList.remove("sucesso");

valido=false;

}

if(valido){

alert("Mensagem enviada com sucesso!");

form.reset();

document.querySelectorAll(".sucesso").forEach(c=>c.classList.remove("sucesso"));

}

});