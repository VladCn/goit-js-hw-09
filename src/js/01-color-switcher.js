const start = document.querySelector('button[data-start]')
const stop = document.querySelector('button[data-stop]')
const body = document.querySelector('body')


start.addEventListener('click', () => {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor()
  },1000);

});

function getRandomHexColor() {
  console.log("sdsd")
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor())

stop.addEventListener("click", () => {
  clearInterval(timerId);
});


