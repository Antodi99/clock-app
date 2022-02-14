import moment from 'moment-timezone';

const button = document.getElementById('button-box');
const main = document.getElementById('main');
const topPart = document.getElementById('top-part');
const bottomPart = document.getElementById('bottom-part');
const menu = document.createElement('div');
const buttonText = document.getElementById('button-box-text');
const buttonImg = document.getElementById('button-box-img');
menu.classList.add('menu');

const menuMain = document.createElement('div');
menuMain.classList.add('menu-main');
const menuMainLeft = document.createElement('div');
menuMainLeft.classList.add('menu-main-left');

const timeZone = document.createElement('div');
timeZone.classList.add('time-zone');
const timeZoneName = document.createElement('p');
timeZoneName.classList.add('menu-name');
timeZoneName.innerText = 'Current timezone';
const timeZoneText = document.createElement('p');
timeZoneText.classList.add('menu-text');
timeZoneText.innerText = moment.tz.guess();
timeZone.appendChild(timeZoneName);
timeZone.appendChild(timeZoneText);

const dayOfYear = document.createElement('div');
dayOfYear.classList.add('day-of-year');
const dayOfYearName = document.createElement('p');
dayOfYearName.classList.add('menu-name');
dayOfYearName.innerText = 'Day of the year';
dayOfYearName.id.add = 'day-of-year';
const dayOfYearText = document.createElement('p');
dayOfYearText.classList.add('menu-text');
dayOfYearText.innerText = moment().dayOfYear();
dayOfYear.appendChild(dayOfYearName);
dayOfYear.appendChild(dayOfYearText);
menuMainLeft.appendChild(timeZone);
menuMainLeft.appendChild(dayOfYear);

const menuMainRight = document.createElement('div');
menuMainRight.classList.add('menu-main-right');

const dayOfWeek = document.createElement('div');
dayOfWeek.classList.add('day-of-week');
const dayOfWeekName = document.createElement('p');
dayOfWeekName.classList.add('menu-name');
dayOfWeekName.innerText = 'Day of the week';
const dayOfWeekText = document.createElement('p');
dayOfWeekText.classList.add('menu-text');
dayOfWeekText.innerText = moment().format('d');
dayOfWeek.appendChild(dayOfWeekName);
dayOfWeek.appendChild(dayOfWeekText);

const weekNumber = document.createElement('div');
weekNumber.classList.add('week-number');
const weekNumberName = document.createElement('p');
weekNumberName.classList.add('menu-name');
weekNumberName.innerText = 'Week number';
const weekNumberText = document.createElement('p');
weekNumberText.classList.add('menu-text');
weekNumberText.innerText = moment().format('w');
weekNumber.appendChild(weekNumberName);
weekNumber.appendChild(weekNumberText);

menuMainRight.appendChild(dayOfWeek);
menuMainRight.appendChild(weekNumber);

menuMain.appendChild(menuMainLeft);
menuMain.appendChild(menuMainRight);

menu.appendChild(menuMain);

function buttonActive() {
  document.body.style.flexDirection = 'column';
  main.style.height = 'auto';
  topPart.classList.remove('top-part');
  topPart.classList.add('top-part-passive');
  bottomPart.style.margin = '2rem auto 3rem';
  button.classList.remove('button-box');
  button.classList.add('button-box-active');
  buttonText.innerText = 'Less';
  buttonImg.classList.remove('fa-chevron-down');
  buttonImg.classList.add('fa-chevron-up');
  document.body.appendChild(menu);
}

function buttonPassive() {
  document.body.style.flexDirection = 'column';
  main.style.height = '100%';
  topPart.classList.remove('top-part-passive');
  topPart.classList.add('top-part');
  bottomPart.style.margin = 'margin: 0 auto 5rem;';
  button.classList.remove('button-box-active');
  button.classList.add('button-box');
  buttonText.innerText = 'More';
  buttonImg.classList.remove('fa-chevron-up');
  buttonImg.classList.add('fa-chevron-down');
  document.body.removeChild(menu);
}

button.addEventListener('click', () => {
  if (button.classList === 'button-box') {
    buttonActive();
  } else {
    buttonPassive();
  }
});

const timezone = moment.tz.guess();

const timeZoneUTC = document.getElementById('time-zone-utc');
timeZoneUTC.innerText = moment().tz(timezone).zoneName();

if (timeZoneUTC.innerText[0] === '+' || timeZoneUTC.innerText[0] === '-') {
  if (timeZoneUTC.innerText[1] === '0') {
    timeZoneUTC.innerText = `UTC${timeZoneUTC.innerText[0]}${timeZoneUTC.innerText[2]}`;
  } else {
    timeZoneUTC.innerText = `UTC${moment().tz(timezone).zoneName()}`;
  }
}
