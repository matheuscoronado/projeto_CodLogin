// Implementa acesso para a tela de Login
function acessar(){
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;

    // Implementa estrutura que testa se todos os campos foram preenchidos
    if(!loginEmail || !loginSenha){
        alert("Favor preencher todos os campos!");
        return;
    }
    else{
        window.location.href = "cadastro.html";
    }
}

// Cria variável do tipo array
var dadosLista = [];

function salvarUser(){
    let nome = document.getElementById("nomeUser").value;

    if(nomeUser){
        dadosLista.push(nomeUser);
        console.log(dadosLista);
        document.getElementById("nomeUser").value = ""; // Limpa o campo após o cadastro
    }
}
