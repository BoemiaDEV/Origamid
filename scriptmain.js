function initTabNav(){
    const tabMenu = document.querySelectorAll('.js-tabMenu li');
    const tabContent = document.querySelectorAll('.js-tabContent section');

    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index){
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
        tabContent[index].classList.add('ativo');
        };

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}function initAccordion(){

    const accordion = document.querySelectorAll('.js-accordion dt');
    const ativoClass = 'ativo';
    if(accordion.length){
        accordion[0].classList.add(ativoClass);
        accordion[0].nextElementSibling.classList.add(ativoClass);
        function activeAccordion() {
            this.classList.toggle(ativoClass);
            this.nextElementSibling.classList.toggle(ativoClass);
        }

        accordion.forEach((item) => {
            item.addEventListener('mouseover', activeAccordion);

        })  
    }
}function initScrollSuave(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const topo = section.offsetTop;

    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });

        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth',
        // });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    })

}
function initAnimateScroll(){
    const sections = document.querySelectorAll('.js-scroll')

    if(sections.length > 0){

        const windowMetade = window.innerHeight * 0.7;

        function animaScroll() {
            sections.forEach((section) =>{
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if(isSectionVisible) {
                    section.classList.add('ativo');
                }else{
                    section.classList.remove('ativo');
                }
            })
        }
    }
    animaScroll();
    window.addEventListener('scroll',animaScroll);
}
initAnimateScroll();
initTabNav();
initAccordion();
initScrollSuave();