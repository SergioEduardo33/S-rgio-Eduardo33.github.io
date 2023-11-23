const usuario_input = document.getElementById("usuario");
const senha_input = document.getElementById("senha");

const usuario_oficial = "calopsita"; //calopsita
const senha_oficial = "benjamin19032022";//benjamin19032022

const botao_entrar= document.getElementById("entrar");
botao_entrar.addEventListener("click",function(event){
    event.preventDefault();


const usuario_digitado = usuario_input.value;
const senha_digitada = senha_input.value;

if(usuario_digitado=== usuario_oficial && senha_digitada===senha_oficial){
    window.location.href = "entrada.html";
    
}else{
    alert("Nome de usuário ou senha incorretos. Tente novamente!");
    window.location.href="dica.html";
}
});

