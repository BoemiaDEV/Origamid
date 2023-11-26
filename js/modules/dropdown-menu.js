import clickOutside from './outsideclick.js';
export default function initDropdownMenu() {
  const html = document.documentElement

  const dropdownMenu = document.querySelectorAll('[data-dropdown]');


  dropdownMenu.forEach((menu) => {
    ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    })
  })
  function handleClick(event) {
    event.preventDefault();
    this.classList.add("ativo");
    clickOutside(this, ['touchstart', 'click'], () => {
      this.classList.remove('ativo')
    })
  }
}

