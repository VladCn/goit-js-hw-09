import Notiflix from 'notiflix';

const delayMs = document.querySelector("input[name=delay]")
const stepMs = document.querySelector("input[name=step]")
const amount = document.querySelector("input[name=amount]")
const form = document.querySelector(".form")


delayMs.addEventListener("input", (event) => {
  delayMs.value = event.currentTarget.value;
});

stepMs.addEventListener("input", (event) => {
  stepMs.value = event.currentTarget.value;
});

amount.addEventListener("input", (event) => {
  amount.value = event.currentTarget.value;
});

form.addEventListener('submit', submitHandler)

function submitHandler(event){
  event.preventDefault();
  let counter = Number(delayMs.value)
  for (let i = 0; i < Number(amount.value); i +=1){
    createPromise(i, counter)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    counter += Number(stepMs.value)
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  console.log(position, delay)

  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    }, delay)

  })
}


