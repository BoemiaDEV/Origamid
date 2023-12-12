export default class Modal {
    constructor(abrir, fechar, container){
    this.botaoAbrir = document.querySelector(abrir);
    this.botaoFechar = document.querySelector(fechar);
    this.containerModal = document.querySelector(container);
    }
    
    abrirModalAndFechar(event) {
        event.preventDefault();
        this.containerModal.classList.toggle('ativo');
    }
    cliqueForadoModal(event) {
        if (event.target === this) {
            abrirModalAndFechar(event);
        }
    }
    if (botaoAbrir && botaoFechar && containerModal) {
        botaoAbrir.addEventListener('click', abrirModalAndFechar);
        botaoFechar.addEventListener('click', abrirModalAndFechar);
        containerModal.addEventListener('click', cliqueForadoModal);
    }
}
