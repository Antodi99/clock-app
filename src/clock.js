import moment from 'moment-timezone';
import morningImg from './images/morning.jpg';
import afternoonImg from './images/afternoon.jpg';
import eveningImg from './images/evening.jpg';
import nightImg from './images/night.jpg';

const ONE_MINUTE = 60_000;
const clockText = document.getElementById('clock-text');

function clock() {
  const time = document.getElementById('clock');
  time.innerHTML = moment().format('HH:mm');

  const hours = Number(moment().format('HH'));

  if (hours >= 5 && hours <= 11) {
    clockText.innerText = "Good morning, it's currently";
    document.body.style.backgroundImage = `url(${morningImg})`;
  }

  if (hours > 12 && hours < 18) {
    clockText.innerText = "Good afternoon, it's currently";
    document.body.style.backgroundImage = `url(${afternoonImg})`;
  }

  if (hours >= 18 && hours <= 24) {
    clockText.innerText = "Good evening, it's currently";
    document.body.style.backgroundImage = `url(${eveningImg})`;
  }

  if (hours < 5) {
    clockText.innerText = "Good night, it's currently";
    document.body.style.backgroundImage = `url(${nightImg})`;
  }
}

setInterval(clock, ONE_MINUTE);
clock();
