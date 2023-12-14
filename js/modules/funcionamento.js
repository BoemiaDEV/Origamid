export default class Funcionamento {
    constructor(funcionamento) {
        this.funcionamento = document.querySelector(funcionamento);
    }

    dadosFuncionameto() {
        this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
        this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
    }

    dadosAgora() {
        this.dataAgora = new Date();
        this.diaAgora = this.dataAgora.getDay();
        this.horarioAgora = this.dataAgora.getHours();
    }

    estaAberto() {
        const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
        const horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]);
        return semanaAberto && horarioAberto;
    }

    ativaAbeto() {
        if (this.estaAberto) {
            this.funcionamento.classList.add('aberto');
        }
    }

    init() {
        if (this.funcionamento) {
            this.dadosFuncionameto();
            this.dadosAgora();
            this.ativaAbeto();
        }
        return this;
    }
}
