/**
 * Function to increment time every second once page loaded
 *      a) Need DOM Content Loaded event listener
 *      b) Variable for the timer 
 *      c) Function with callback function that increments time by 1
 * 
 * Manually Increment and decrement the counter using the plus and minus
 *      1) Need event listener to decrease by 1 on minusBtn
 *      2) Need event listener to increase by 1 on plusBtn
 *  */ 


const timerText = document.querySelector('#counter')
let count= 0
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
const heartBtn = document.querySelector('#heart')
const pauseBtn = document.querySelector('#pause')
const newPar = document.createElement('p') 
const h1 = document.querySelector('h1')


document.addEventListener('DOMContentLoaded', (e) => {  
    //SetInterval() function to run startTimer function every second
    setInterval(startTimer, 1000)

    plusBtn.addEventListener('click', () => {
        timerText.innerText ++
    })

    minusBtn.addEventListener('click', () => {
        timerText.innerText -= 1
    })

    heartBtn.addEventListener('click', () => {
        h1.appendChild(newPar)
        numberToPrint = timerText.innerText
        newPar.innerText = `The number is ${numberToPrint}`
    })

    pauseBtn.addEventListener('click', () => {

    })
   
})

//Function to start the timer and increment by1
function startTimer() {
    count +=1
    timerText.innerText = count
}

//newPar.innerText