const start = document.querySelector('button[data-start]')
const stop = document.querySelector('button[data-stop]')
const body = document.querySelector('body')
let timerId = null
const TIMEDELAY = 1000;
let aktive = false;


start.addEventListener('click', (evt) => {
  if(aktive === true ){
    return
  }
  aktive = true;
  console.log(evt)
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor()
  },TIMEDELAY);

});

function getRandomHexColor() {
  console.log("sdsd")
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


stop.addEventListener("click", () => {
  clearInterval(timerId);
  aktive = false;
});


