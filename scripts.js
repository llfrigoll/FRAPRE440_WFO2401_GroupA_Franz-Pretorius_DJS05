import { dispatch, getState } from '/store.js'
import { add, subtract, reset } from '/actions.js'

//returns the current state
console.log(getState())

//increases the number by 2 and returns the state
dispatch(add(getState()))
dispatch(add(getState()))
console.log(getState())

//decreases the number by 1 and returns the state
dispatch(subtract(getState()))
console.log(getState())

//resets the number to 0 and returns the state
dispatch(reset(getState()))
console.log(getState())


//UPDATED WITH USER INTERACTION
const countEl = document.getElementById('count')
const addEl = document.getElementById('add')
const subtractEl = document.getElementById('subtract')
const resetEl = document.getElementById('reset')

//Initializes the count for the html
countEl.textContent = getState().num

//Event listeners for each button, adding, subtracting or resetting where applicable, each updating the counter's
//text content and console logging the new state
addEl.addEventListener('click', () => {
    dispatch(add(getState()))
    countEl.textContent = getState().num
    console.log(getState())
})

subtractEl.addEventListener('click', () => {
    dispatch(subtract(getState()))
    countEl.textContent = getState().num
    console.log(getState())
})

resetEl.addEventListener('click', () => {
    dispatch(reset(getState()))
    countEl.textContent = getState().num
    console.log(getState())
})