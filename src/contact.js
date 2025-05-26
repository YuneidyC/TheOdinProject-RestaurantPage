const main = document.getElementsByClassName('main')[0];

const hoursContainer = document.createElement('div');
main.appendChild(hoursContainer);
hoursContainer.classList.add('hours-container');

createHoursContainer();
createPhoneElement();

function createHoursContainer() {
    const text = document.createElement('p');
    hoursContainer.appendChild(text);
    text.classList.add('hour');

    const hourText = document.createTextNode('Hours');
    text.appendChild(hourText);

    createLine(text);
    createOpenDays();
}

function createOpenDays() {
    const days = [
        {day: "Sunday", hour: "11:00AM - 11:30PM"},
        {day: "Monday", hour: "11:00AM - 11:30PM"},
        {day: "Tuesday", hour: "11:00AM - 8:30PM"},
        {day: "Wednesday", hour: "11:00AM - 9:30PM"},
        {day: "Thursday", hour: "11:00AM - 9:30PM"},
        {day: "Friday", hour: "11:00AM - 11:30PM"},
        {day: "Saturday", hour: "11:00AM - 11:30PM"}
    ];

    const d = new Date();
    let day = days[d.getDay()].day;

    for (let i = 0; i < days.length; i++) {
        const openDays = document.createElement('p');
        openDays.classList.add('open-days');

        hoursContainer.appendChild(openDays);

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

    const phone = document.createElement('p');
    text.appendChild(phone);

    const phoneNumber = document.createTextNode('555-555-5555');
    phone.appendChild(phoneNumber);
}