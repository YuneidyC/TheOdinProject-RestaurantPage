const main = document.getElementsByClassName('main')[0];

const hoursContainer = document.createElement('div');
main.appendChild(hoursContainer);
hoursContainer.classList.add('hours-container');

createHoursContainer();
createPhoneElement();

function createHoursContainer() {
    const daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const text = document.createElement('p');
    hoursContainer.appendChild(text);
    text.classList.add('hour');

    const hourText = document.createTextNode('Hours');
    text.appendChild(hourText);

    createLine(hoursContainer);

    const d = new Date();
    let day = daysArr[d.getDay()];

    for (let i = 0; i < daysArr.length; i++) {
        if (i === 2) {
            i += 2;
        }
        const openDays = document.createElement('p');
        openDays.classList.add('open-days');

        hoursContainer.appendChild(openDays);

        const textDays = document.createTextNode(daysArr[i].substring(0, 3) + ' 11:00am - 11:30pm');
        openDays.appendChild(textDays);

        if (daysArr[i] === day) {
            openDays.className = 'open-days active';
        }

        if (daysArr[i] !== day && openDays.classList.contains('active')) {
            openDays.classList.remove('active');
        }
    }
}

function createLine(parent) {
    const line = document.createElement('div');
    parent.appendChild(line);

    line.classList.add('line');
}

function createPhoneElement() {
    const text = document.createElement('p');
    hoursContainer.appendChild(text);
    text.classList.add('phone');

    const phoneText = document.createTextNode('Phone');
    text.appendChild(phoneText);

    createLine(text);

    const phoneNumber = document.createTextNode('555-555-5555');
    hoursContainer.appendChild(phoneNumber);
}