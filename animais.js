const controles = document.getElementById('controles');
const csstext = document.querySelector('.css');
const btn = document.querySelector('.btn');
const handleStyle = {
    element: btn,
    backgroundColor(value) {
        this.element.style.backgroundColor = value;
    },
    color(value) {
        this.element.style.color = value;
    },
    height(value) {
        this.element.style.height = `${value}px`;
    },
    width(value) {
        this.element.style.width = `${value}px`;
    },
    borderRadius(value) {
        this.element.style.borderRadius = `${value}px`;
    },
    texto(value) {
        this.element.innerText = value;
    },
    fontSize(value) {
        this.element.style.fontSize = `${value}px`;
    },
};
function showcss() {
    csstext.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}

function saveValues(name, value) {
    localStorage[name] = value;
}

function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    handleStyle[name](value);
    saveValues(name, value);
    showcss();
}
controles.addEventListener('change', handleChange);

function setValue() {
    const propeties = Object.keys(localStorage);
    propeties.forEach((properties) => {
        handleStyle[properties];
        controles.elements[properties] = localStorage[properties];
    });
}

setValue();
