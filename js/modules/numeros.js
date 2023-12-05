
export default function initNumeros() {

  function animaNumeros() {

    const numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 50);
      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = start;
          clearInterval(timer)
        }
      }, 25 * Math.random())
    });
  }
  function HandleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros()
    }
  }

  const observeTarget = document.querySelector('.numeros')

  const observer = new MutationObserver(HandleMutation);

  observer.observe(observeTarget, { attributes: true })

}