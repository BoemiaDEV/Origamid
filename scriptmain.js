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
}
initTabNav();

function initAccordion(){

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
}

initAccordion();