const geradorInput = document.getElementById("gerador");
const gerarSenhaBtn = document.getElementById("btn");
const senhaGerada = document.getElementById("senha");


//Event Listener
gerarSenhaBtn.addEventListener("click", generate_password);//captura click no botao
geradorInput.addEventListener("keypress", function(e) { //captura o que é digitado no teclado e se for "enter" aciona a função do botão
    if(e.key === "Enter") {
        generate_password();
    }
} );

// gerador de senhas aleatórias com JS
function generate_password() {
    const tamanhoSenha = parseInt(geradorInput.value) + 2;
    const novaSenha = document.createElement("p");
    novaSenha.innerHTML = `${Math.random().toString(36).substring(0, tamanhoSenha).slice(2)}`;
    senhaGerada.appendChild(novaSenha);
    geradorInput.value = "";
}




console.log(generate_password());