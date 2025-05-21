const redChile = './assets/images/redChileImg.png';
const greenChile = './assets/images/greenChileImg.png';
const main = document.getElementsByClassName('main')[0];

const menuContainer = document.createElement('div');
menuContainer.classList.add('menu-container');

main.appendChild(menuContainer);

createCardsMenu();
createRedAndGreenPepper();

function createCardsMenu() {
    for (let i = 0; i < 3; i++) {
        const cardsMenu = document.createElement('div');
        cardsMenu.classList.add('card-menu-' + i);
        menuContainer.appendChild(cardsMenu);
    }
}

function createRedAndGreenPepper() {
    for (let i = 0; i < 12; i++) {
        const red = document.createElement('img');
        red.className = 'red-chile red-chile-' + i;
        red.src = redChile;
        main.appendChild(red);

        const green = document.createElement('img');
        green.className = 'green-chile green-chile-' + i;
        green.src = greenChile;
        main.appendChild(green);
    }
}
