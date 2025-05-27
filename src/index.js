const quesadilla = './assets/images/quesadillaImg.jpg';
const jarrito = './assets/images/jarritoImg.jpg';
const margarita = './assets/images/margaritaImg.jpg';
const michelada = './assets/images/micheladaImg.jpg';
const nachosCheeseAndMeat = './assets/images/nachosCheeseAndMeatImg.jpg'
const quesadillas = './assets/images/quesadillasImg.jpg';
const riceAndNachos = './assets/images/riceAndNachosImg.jpg';
const rice = './assets/images/riceImg.jpg';
const salad = './assets/images/saladImg.jpg';
const tacosShrid = './assets/images/tacosShridImg.jpg';
const tequilaShots = './assets/images/tequilaShotsImg.jpg';
const tequilaShot = './assets/images/tequilaShotImg.jpg';
const vegaTacos = './assets/images/vegaTacosImg.jpg';
const main = document.getElementsByClassName('main')[0];

createHero();

function createHero() {
    const heroContainer = document.createElement('div');
    heroContainer.className = 'hero-container';
    main.appendChild(heroContainer);

    const heroLeft = document.createElement('div');
    heroLeft.classList.add('hero-left-side');
    heroContainer.appendChild(heroLeft);

    const heroText = document.createElement('h1');
    heroText.classList.add('hero-text');
    heroLeft.appendChild(heroText);

    const text = `Let's Taco Bout It`;

    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        heroText.appendChild(span);
        span.classList.add('c' + i);

        const char = document.createTextNode(text[i]);
        span.appendChild(char);
    }

    const button = document.createElement('button');
    heroLeft.appendChild(button);

    const buttonText = document.createTextNode('Check Our Menu');
    button.appendChild(buttonText);

    button.onclick = function () {
        location.href = './menu.html';

    const heroImage = document.createElement('img');
    heroImage.src = './assets/tacos-8184634_1920.svg';
    heroImage.classList.add('hero-right-side');
    heroContainer.appendChild(heroImage);

    createOurHistorySection();
}

function createOurHistorySection() {
    const ourHistorySection = document.createElement('div');
    ourHistorySection.classList.add('our-history-container');
    main.appendChild(ourHistorySection);

    const leftSide = document.createElement('div');
    leftSide.classList.add('our-history-left-side');
    ourHistorySection.appendChild(leftSide);

    const title = document.createElement('h2');
    title.classList.add('our-history-title-left-side');
    leftSide.appendChild(title);

    const titleText = document.createTextNode('Our History');
    title.appendChild(titleText);

    const textLeftSide = document.createElement('p');
    textLeftSide.classList.add('our-history-text-left-side');
    leftSide.appendChild(textLeftSide);

    const textLeft = document.createTextNode(`Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised in
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`);
    textLeftSide.appendChild(textLeft);

    const rightSide = document.createElement('div');
    rightSide.classList.add('our-history-right-side');
    ourHistorySection.appendChild(rightSide);

    const items = document.createElement('div');
    items.classList.add('items');
    rightSide.appendChild(items);

    createCarousel(items);
}


function createCarousel(element) {
    const imagesCarousel = [quesadilla, jarrito, margarita, michelada, nachosCheeseAndMeat, quesadillas, riceAndNachos, rice, salad, tacosShrid, tequilaShot, tequilaShots, vegaTacos];

    for (let i = 0; i < imagesCarousel.length; i++) {
        const item = document.createElement('div');
        element.appendChild(item);

        
        if (i === 0) {
            item.className = 'item active';
        } else if (i === 1) {
            item.className = 'item next';
        } else if (i === imagesCarousel.length - 1) {
            item.className = 'item prev';
        } else {
            item.classList.add('item');
        }
        console.log(item);
        
        const image = document.createElement('img');
        image.src = imagesCarousel[i];
        item.appendChild(image);
    }

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    element.appendChild(buttonContainer);

    const buttonLeft = document.createElement('button');
    buttonLeft.classList.add('button');
    buttonContainer.appendChild(buttonLeft);

    const buttonRight = document.createElement('button');
    buttonRight.classList.add('button');
    buttonContainer.appendChild(buttonRight);

    const iconLeft = document.createElement('i');
    iconLeft.className = 'fa fa-angle-left';
    buttonLeft.appendChild(iconLeft);

    const iconRight = document.createElement('i');
    iconRight.className = 'fa fa-angle-right';
    buttonRight.appendChild(iconRight);

    const items = document.getElementsByClassName('items')[0];
    const slides = document.querySelectorAll('.item');
    const button = document.querySelectorAll('.button');

    let current = 0;
    let prev = 4;
    let next = 1;

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
    }

    const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
    const gotoNext = () => current < imagesCarousel.length - 1 ? gotoNum(current + 1) : gotoNum(0);
    const gotoNum = number => {
        current = number;
        prev = current - 1;
        next = current + 1;

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            slides[i].classList.remove("prev");
            slides[i].classList.remove("next");
        }

        if (next == imagesCarousel.length) {
            next = 0;
        }

        if (prev == -1) {
            prev = imagesCarousel.length - 1;
        }

        slides[current].classList.add("active");
        slides[prev].classList.add("prev");
        slides[next].classList.add("next");
    }
}