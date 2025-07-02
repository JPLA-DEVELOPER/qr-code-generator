//Selecionar os elementos
const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");
const qrCodeBtnDownload = document.querySelector("#qr-download-btn");

//Função
function generateQrCode(){
    //Pega o valor do input
    const qrCodeInputValue = qrCodeInput.value;  
    console.log(`Valor: ${qrCodeInputValue}`);

    if(!qrCodeInputValue) return;

    //Modifica o texto do botão
    qrCodeBtn.innerText = "Gerando código...";

    //Altera o atributo src baseado na API
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;
    
    //Adiciona a classe CSS active ao elemento container
    container.classList.add("active");

    //Espera a nova imagem carregar completamente para exibir a imagem
    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        //Modifica o texto do botão
        qrCodeBtn.innerText = "Código criado com sucesso!";

    })
   
}  

function generateQrCode2 () {
    // Pega o valor do input
    const qrCodeInputValue = qrCodeInput.value;  
    console.log(`Valor: ${qrCodeInputValue}`);
  
    if (!qrCodeInputValue) return;
  
    // Modifica o texto do botão
    qrCodeBtn.innerText = "Gerando código...";
  
    const qrCodeContainer = document.querySelector(".qr-code-download");
  
    // Limpa QR Code anterior
    qrCodeContainer.innerHTML = "";
  
    // Cria novo QR Code
    const qrcode = new QRCode(qrCodeContainer, {
      text: qrCodeInputValue,
      width: 128,
      height: 128
    });
  
    // Marca o container como ativo
    container.classList.add("active");
  
    // Aguarda um pequeno tempo para considerar o QR gerado
    setTimeout(() => {
      qrCodeBtn.innerText = "QR Code criado com sucesso!";
    }, 300);
  }

  //Função para baixar o QR Code
function downloadQrCode() {
    const canvas = document.querySelector(".qr-code-download canvas");
  
  
    const imageData = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imageData;
    link.download = "qrcode.png";
    link.click();
  }
  

//Eventos
//Evento de clique no botão gerar
qrCodeBtn.addEventListener("click", () => {
    generateQrCode2();
});

//Evento da tecla Enter para gerar
qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        generateQrCode2();
    }
})

//Evento do botão de dowload
qrCodeBtnDownload.addEventListener("click", () => {
    console.log("Download solicitado");
    downloadQrCode();
    
})
//Limpar área do QR Code se o input for limpo
qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.value){
        //Esconder o QR Code
        container.classList.remove("active");

        //Modifica o texto do botão novamente
        qrCodeBtn.innerText = "Gerar QR Code";
    }
})