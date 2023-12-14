import ScrollSuave from './modules/scroll-suave.js';

import ScrollAnima from './modules/scroll-anima.js';

import Accordion from './modules/accordion.js';

import TabNav from './modules/tabnav.js';

import Modal from './modules/modal.js';

import Tooltip from './modules/tooltip.js';

import fetchAnimais from './modules/fetch-animais.js';

import DropdownMenu from './modules/dropdown-menu.js';

import MenuMobile from './modules/menu-mobile.js';

import Funcionamento from './modules/funcionamento.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]', ['touchstart', 'click']);
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]');
funcionamento.init();

initFetchBitcoin();

fetchAnimais('../animaisApi.json', '.numeros-grid');

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
