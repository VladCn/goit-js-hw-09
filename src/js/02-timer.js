// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

const inputDate = document.querySelector('input[type="text"]')
const buttonJS = document.querySelector('button[data-start]')

buttonJS.addEventListener('click', (evt => console.log("sdsd")))

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
    console.log(selectedDates[0]);
  },
};

flatpickr(inputDate, options)

const date = new Date();

console.log(date);