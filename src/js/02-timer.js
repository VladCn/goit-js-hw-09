// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

const inputDate = document.querySelector('input[type="text"]')
const buttonJS = document.querySelector('button[data-start]')
const dayJS = document.querySelector('.timer span[data-days]')
const hoursJS = document.querySelector('.timer span[data-hours]')
const minutesJS = document.querySelector('.timer span[data-minutes]')
const secondsJS = document.querySelector('.timer span[data-seconds]')
const newDateFormat = {};
let newTimeEnd = 0;


function addLeadingZero(value){
  if(value.length <= 1){
    return value.padStart(2, '0')
  } return value
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if(selectedDates[0] <= date){
      window.alert("Please choose a date in the future")
      return;
    }
    buttonJS.removeAttribute("disabled")

    selectedDates[0].getTime();
    newTimeEnd = selectedDates[0].getTime() - dateUnixToday;

    dayJS.innerHTML = convertMs(newTimeEnd).days;
    hoursJS.innerHTML = convertMs(newTimeEnd).hours
    minutesJS.innerHTML = convertMs(newTimeEnd).minutes
    secondsJS.innerHTML = convertMs(newTimeEnd).seconds
    dayJS.innerHTML = addLeadingZero(dayJS.innerHTML)
    hoursJS.innerHTML = addLeadingZero(hoursJS.innerHTML)
    minutesJS.innerHTML = addLeadingZero(minutesJS.innerHTML)
    secondsJS.innerHTML = addLeadingZero(secondsJS.innerHTML)

    return newTimeEnd;
  },

};


flatpickr(inputDate, options)

const date = new Date();
const dateUnixToday = date.getTime()
const result = dateUnixToday - newTimeEnd;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function start(){
  const startTime = Date.now();
  buttonJS.setAttribute("disabled","disabled")
  inputDate.setAttribute("disabled","disabled")
  setInterval(() => {
    const currentTime = Date.now() - newTimeEnd;
    let valTime =  startTime - currentTime

    dayJS.innerHTML = convertMs(valTime).days;
    hoursJS.innerHTML = convertMs(valTime).hours
    minutesJS.innerHTML = convertMs(valTime).minutes
    secondsJS.innerHTML = convertMs(valTime).seconds

    dayJS.innerHTML = addLeadingZero(dayJS.innerHTML)
    hoursJS.innerHTML = addLeadingZero(hoursJS.innerHTML)
    minutesJS.innerHTML = addLeadingZero(minutesJS.innerHTML)
    secondsJS.innerHTML = addLeadingZero(secondsJS.innerHTML)
  }, 1000);
}

buttonJS.addEventListener("click", start);