import ScrollSuave from './modules/scroll-suave.js';

import initAnimacaoScroll from './modules/scroll-animacao.js';

import Accordion from './modules/accordion.js';

import TabNav from './modules/tabnav.js';

import Modal from './modules/modal.js';

import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip();
tooltip.init();
initAnimacaoScroll();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();

// const iniciar = document.querySelector('.iniciar');
// const pausar = document.querySelector('.pausar');
// const tempo = document.querySelector('.tempo');
// const guardatempo = document.querySelector('.guardatempo')
// iniciar.addEventListener('click', iniciarTempo);
// pausar.addEventListener('click', pausarTempo);
// tempo.addEventListener('click', resetarTempo);

// let i = 0;

// let timer;

// function iniciarTempo(){
//     timer = setInterval(() => {
//         guardatempo.innerText = i++
//     },100);
//     iniciar.setAttribute('disabled', '');
// }
// function pausarTempo(){
//     clearInterval(timer);
//     iniciar.removeAttribute('disabled', '');
// }
// function resetarTempo(){
//     guardatempo.innerText = 0;
//     i = 0;
//     iniciar.removeAttribute('disabled', '');
// }
