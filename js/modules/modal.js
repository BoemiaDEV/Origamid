export default class Modal {
    constructor(abrir, fechar, container) {
        this.botaoAbrir = document.querySelector(abrir);
        this.botaoFechar = document.querySelector(fechar);
        this.containerModal = document.querySelector(container);

        this.eventToggleModal = this.eventToggleModal.bind(this);
        this.cliqueForadoModal = this.cliqueForadoModal.bind(this);
        // bind this ao calback para referencia ao objeto da classe
    }

    toggleModal() {
        this.containerModal.classList.toggle('ativo');
    }

    eventToggleModal(event) {
        event.preventDefault();
        this.toggleModal();
    }

    cliqueForadoModal(event) {
        if (event.target === this.containerModal) {
            this.toggleModal();
        }
    }

    addModalEvent() {
        this.botaoAbrir.addEventListener('click', this.eventToggleModal);
        this.botaoFechar.addEventListener('click', this.eventToggleModal);
        this.containerModal.addEventListener('click', this.cliqueForadoModal);
    }

    init() {
        if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
            this.addModalEvent();
        }
        return this;
    }
}
