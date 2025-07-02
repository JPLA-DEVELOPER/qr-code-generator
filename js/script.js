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

function downloadQrCode (){
    const qrCodeInputValue = qrCodeInput.value; 
    if(!qrCodeInputValue) return; 
    qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;
    
    
}

//Eventos
//Evento de clique no botão
qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});

//Evento da tecla Enter
qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        generateQrCode();
    }
})

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