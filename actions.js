import { State } from '/store.js'

/**
 * @typedef {object} Add
 * @prop {'ADD'} type
 * @prop {State} state
 */

/**
 * @typedef {object} Subtract
 * @prop {'SUBTRACT'} type
 * @prop {State} state
 */

/**
 * @typedef {object} Reset
 * @prop {'RESET'} type
 * @prop {State} state
 */

/**
 * function that takes in a state, uses the number in the state to get a new number that is increased by 1 and thereafter
 * returns an object containing the action type and the state with the updated number
 * @param {State} state
 * @returns {Add}
 */
export const add = (state) => {
    const newNum = state.num + 1
    return {
        type: 'ADD',
        state: {
            num: newNum
        }
    }
}

/**
 * function that takes in a state, uses the number in the state to get a new number that is decreased by 1 and thereafter
 * returns an object containing the action type and the state with the updated number
 * @param {State} state
 * @returns {Subtract}
 */
export const subtract = (state) => {
    const newNum = state.num - 1
    return {
        type: 'SUBTRACT',
        state: {
            num: newNum
        }
    }
}

/**
 * function that returns an object containing the action type and the state with the number reset to 0
 * @returns {Reset}
 */
export const reset = () => {
    return {
        type: 'RESET',
        state: {
            num: 0
        }
    }
}

/**
 * @typedef {Add | Subtract | Reset} Action
 */

export const Action = {}