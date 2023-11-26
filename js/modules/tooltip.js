export default function initTooltip() {

  const tooltips = document.querySelectorAll('[data-tooltip]');

  function onMouseOver(event) {
    const tooltipBox = criarTootipBox(this);
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove)
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);

  }

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('Mouseleave', onMouseLeave);
      this.element.removeEventListener('Mousemove', onMouseMove);
    }
  }

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + 'px';
      this.tooltipBox.style.left = event.pageX + 25 + 'px';

    }
  }

  function criarTootipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver)
  })

}