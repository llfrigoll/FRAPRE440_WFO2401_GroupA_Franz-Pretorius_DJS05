import { subscribe, dispatch, getState } from '/store.js'
import { add, subtract, reset } from '/actions.js'

console.log(getState())
dispatch(add(getState()))
console.log(getState())

dispatch(reset(getState()))
console.log(getState())

dispatch(subtract(getState()))
console.log(getState())