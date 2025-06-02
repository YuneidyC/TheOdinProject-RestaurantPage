import { desserts, drinks, menuTacos, others, quesadillas } from './menuList.js';
import { createLine } from './script';

import 'Styles/menu.css';

import taco from 'Images/tacoImg.png';
import rice from 'Images/riceImg.png';
import cookie from 'Images/cookieImg.png';
import tequila from 'Images/tequilaImg.png';
import redChile from 'Images/redChileImg.png';
import greenChile from 'Images/greenChileImg.png';

const main = document.getElementsByClassName('main')[0];

const menuContainer = document.createElement('div');
menuContainer.classList.add('menu-container');

const text = document.createElement('p');
text.classList.add('description');
menuContainer.appendChild(text);

const txtDescription = document.createTextNode(' Asada, carnitas, al pastor, chicken, ground beef and chicarron.');
text.appendChild(txtDescription);
main.appendChild(menuContainer);

createCardsMenu();
createRedAndGreenPepper();

function createTitleCardsMenu(parent, text, className) {
    const title = document.createElement('p');
    const cardTitle = document.createTextNode(text);
    title.classList.add(className);
    parent.appendChild(title);
    title.appendChild(cardTitle);

    createLine(title);
}

function createImgMenu(parent, src, className) {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add(className);
    parent.appendChild(img);
    img.alt = className;
}

function createCardsMenu() {
    for (let i = 0; i < 3; i++) {
        const cardsMenu = document.createElement('div');
        cardsMenu.classList.add('card-menu-' + i);
        menuContainer.appendChild(cardsMenu);
        if (i === 0) {
            createTitleCardsMenu(cardsMenu, 'Tacos & Burritos', 'card-menu-title');
            createImgMenu(cardsMenu, taco, 'taco');
            createMenus(cardsMenu, 'taco', menuTacos);
            createTitleCardsMenu(cardsMenu, 'Quesadillas', 'card-menu-title');
            createMenus(cardsMenu, 'quesadillas', quesadillas);
        } else if (i === 1) {
            createTitleCardsMenu(cardsMenu, 'Others', 'card-menu-title');
            createImgMenu(cardsMenu, rice, 'rice');
            createMenus(cardsMenu, 'other', others);
        } else {
            createTitleCardsMenu(cardsMenu, 'Desserts', 'card-menu-title');
            createImgMenu(cardsMenu, cookie, 'cookie');
            createMenus(cardsMenu, 'desserts', desserts);
            createTitleCardsMenu(cardsMenu, 'Drinks', 'card-menu-title');
            createImgMenu(cardsMenu, tequila, 'tequila');
            createMenus(cardsMenu, 'drinks', drinks);
        }
    }
}

function createMenus(parent, className, menu) {
    const itemsList = document.createElement('ol');
    parent.appendChild(itemsList);

    for (let i = 0; i < menu.length; i++) {
        const item = document.createElement('li');
        itemsList.appendChild(item);
        item.classList.add(className + '-' + i);

        const mealName = document.createElement('span');
        mealName.classList.add('meal');
        item.appendChild(mealName);

        const mealTextName = document.createTextNode(menu[i].meal);
        mealName.appendChild(mealTextName);

        const mealPrice = document.createElement('span');
        mealPrice.classList.add('price');
        item.appendChild(mealPrice);

        const mealTextPrice = document.createTextNode('$' + menu[i].price);
        mealPrice.appendChild(mealTextPrice);
    }
}

function createRedAndGreenPepper() {
    for (let i = 0; i < 11; i++) {
        const red = document.createElement('img');
        red.className = 'red-chile red-chile-' + i;
        red.src = redChile;
        main.appendChild(red);
        red.alt = 'Red hot pepper';

        const green = document.createElement('img');
        green.className = 'green-chile green-chile-' + i;
        green.src = greenChile;
        main.appendChild(green);
        green.alt = 'Green hot pepper';
    }
}
