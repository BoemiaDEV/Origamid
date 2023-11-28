import initScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import initmodal from './modules/modal.js'
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initNumeros from './modules/numeros.js'


initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();
initmodal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initNumeros();
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


// console.log('a')