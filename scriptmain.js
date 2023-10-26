const tabMenu = document.querySelectorAll('.js-tabMenu li');
const tabContent = document.querySelectorAll('.js-tabContent section');

function activeTab(index){
    tabContent.forEach((section) => {
        section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
}

tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
        activeTab(index);
    });
});
