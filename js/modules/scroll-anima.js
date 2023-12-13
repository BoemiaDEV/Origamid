import debounce from './debounce.js';

export default class ScrollAnima {
  constructor(section) {
    this.sections = document.querySelectorAll(section);
    this.windowMetade = window.innerHeight * 0.6;
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop - this.windowMetade;
      return {
        elemten: section,
        offset,
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.scrollY > item.offset) {
        item.elemten.classList.add('ativo');
      } else if (item.elemten.classList.contains('ativo')) {
        item.elemten.classList.remove('ativo');
      }
    });
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - this.windowMetade) < 0;
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
    this.getDistance();
    this.checkDistance();
    window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }
}
