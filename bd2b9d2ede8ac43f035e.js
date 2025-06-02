import 'Styles/contact.css';
import { createLine } from './script';

const main = document.getElementsByClassName('main')[0];

createHoursContainer();

function createHoursContainer() {
    const hoursContainer = document.createElement('div');
    main.appendChild(hoursContainer);
    hoursContainer.classList.add('hours-container');

    const text = document.createElement('p');
    hoursContainer.appendChild(text);
    text.classList.add('hour');

    const hourText = document.createTextNode('Hours');
    text.appendChild(hourText);

    createLine(text);
    createOpenDays(hoursContainer);
    createPhoneElement(hoursContainer);
}

function createOpenDays(parent) {
    const days = [
        { day: "Sunday", hour: "11:00AM - 11:30PM" },
        { day: "Monday", hour: "11:00AM - 11:30PM" },
        { day: "Tuesday", hour: "11:00AM - 8:30PM" },
        { day: "Wednesday", hour: "11:00AM - 9:30PM" },
        { day: "Thursday", hour: "11:00AM - 9:30PM" },
        { day: "Friday", hour: "11:00AM - 11:30PM" },
        { day: "Saturday", hour: "11:00AM - 11:30PM" }
    ];

    const d = new Date();
    let day = days[d.getDay()].day;

    for (let i = 0; i < days.length; i++) {
        const openDays = document.createElement('p');
        openDays.classList.add('open-days');

        parent.appendChild(openDays);

        const textDays = document.createTextNode(days[i].day.substring(0, 3) + ' ' + days[i].hour);
        openDays.appendChild(textDays);

        if (days[i].day === day) {
            openDays.className = 'open-days active';
        }

        if (days[i].day !== day && openDays.classList.contains('active')) {
            openDays.classList.remove('active');
        }
    }
}

function createPhoneElement(parent) {
    const text = document.createElement('p');
    parent.appendChild(text);
    text.classList.add('phone');

    const phoneText = document.createTextNode('Phone');
    text.appendChild(phoneText);

    createLine(text);

    const phone = document.createElement('p');
    phone.classList.add('phone-number');
    text.appendChild(phone);

    const phoneNumber = document.createTextNode('555-555-5555');
    phone.appendChild(phoneNumber);
}

createRightSide();

function createRightSide() {
    const rightSide = document.createElement('div');
    main.appendChild(rightSide);
    rightSide.classList.add('right-side');

    const emailText = document.createElement('div');
    rightSide.appendChild(emailText);
    emailText.classList.add('email-container');

    const emailTitle = document.createTextNode('Email');
    emailText.appendChild(emailTitle);

    createLine(emailText);

    const text = document.createElement('p');
    text.classList.add('email');
    emailText.appendChild(text);

    const email = document.createTextNode('yourFavoriteMexicanRestaurante@NotFake.com');
    text.appendChild(email);

    createLocationContainer(rightSide);
}

function createLocationContainer(parent) {
    const mapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39826.70790028981!2d-117.31939784489046!3d33.970645964820605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae52901f5181%3A0x9f101fc8132139c5!2sRiverside%2C%20CA%2092507%2C%20USA!5e1!3m2!1sen!2sie!4v1748353615219!5m2!1sen!2sie";
    const locationElement = document.createElement('div');
    locationElement.classList.add('location-container');
    parent.appendChild(locationElement);

    const locationTitle = document.createTextNode('Location');
    locationElement.appendChild(locationTitle);

    createLine(locationElement);
    const iframe = document.createElement('iframe');
    iframe.classList.add('map');
    iframe.src = mapLink;
    iframe.title = "map";
    iframe.allowFullscreen = "";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";

    locationElement.appendChild(iframe);

    const addressElement = document.createElement('p');
    addressElement.classList.add('address');
    locationElement.appendChild(addressElement);

    const bold = document.createElement('strong');
    addressElement.appendChild(bold);

    const textFakeAddress = document.createTextNode('Fake address: ');
    bold.appendChild(textFakeAddress);

    const address = document.createTextNode('4311 Denver Avenue, Riverside, CA California 92507');
    addressElement.appendChild(address);
}
