const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const dataAtual = new Date();
const horaAtual = dataAtual.toLocaleTimeString();


// As "chaves" de criptografia  são:
// A letra "e" = "enter"
// A letra "i" = "imes"
// A letra "a" = "ai"
// A letra "o" = "ober"
// A letra "u" = "ufat"


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = ""; 
}

function encriptar(stringEncriptada){

    let matrizCodigo = [ ["e", "enter"],["i", "imes"], ["a", "ai"], ["o","ober"],["u","ufat"] ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
    }
  }

    return stringEncriptada;

}


// Função desencriptar o texto na área de mensagem
function btnDesencriptar(){
    const textoDesencriptado = desencriptar(mensagem.value);
   textArea.value = textoDesencriptado;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [ ["e", "enter"],["i", "imes"], ["a", "ai"], ["o","ober"],["u","ufat"] ];

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;

}
function btnCopiar() {
    mensagem.select();
    navigator.clipboard.writeText(mensagem.value)
        .then(() => {
            alert("Texto copiado!");
        })
        .catch((error) => {
            console.error("Erro ao copiar texto:", error);
        });
}
  // Limpa o conteúdo do campo de mensagem: mensagem.value//
function btnLimpar() {
    mensagem.value = '';
    textArea.value = '';
  }

  // Função para obter a hora atual
function atualizarHorario() {
   
    const dataAtual = new Date();
    const horaAtual = dataAtual.toLocaleTimeString();


    document.getElementById('horario').textContent = `Hora atual: ${horaAtual}`;
}

// Chamar a função para atualizar o horário a cada segundo
setInterval(atualizarHorario, 1000);
