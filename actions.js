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