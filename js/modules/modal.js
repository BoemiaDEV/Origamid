export default function initmodal() {
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');
    function abrirModalAndFechar(event) {
        event.preventDefault();
        containerModal.classList.toggle('ativo');
    }
    function cliqueForadoModal(event) {
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
