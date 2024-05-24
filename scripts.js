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