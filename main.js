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
    let nameUser = document.getElementById("nameUser").value;

    if(nameUser){
        dadosLista.push(nameUser);
        console.log(dadosLista);
        document.getElementById("nameUser").value = ""; // Limpa o campo após o cadastro
    }
    else{
        alert("Favor informar um nome para o cadastro!");
    }
}

// Função para preencher a lista de cadastro