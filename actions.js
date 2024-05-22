import { Num } from '/store.js'

/**
 * @typedef {object} Add
 * @prop {'ADD'} type
 * @prop {Num} num
 */

/**
 * @typedef {object} Subtract
 * @prop {'SUBTRACT'} type
 * @prop {Num} num
 */

/**
 * @typedef {object} Reset
 * @prop {'RESET'} type
 * @prop {Num} num
 */

/**
 * @returns {Add}
 */
export const add = () => {
    return {
        type: 'ADD',
        num: {
            value: value + 1
        }
    }
}

/**
 * @returns {Subtract}
 */
export const subtract = () => {
    return {
        type: 'SUBTRACT',
        num: {
            value: value - 1
        }
    }
}

/**
 * @returns {Reset}
 */
export const reset = () => {
    return {
        type: 'RESET',
        num: {
            value: 0
        }
    }
}

/**
 * @typedef {Add | Subtract | Reset} Action
 */

export const Action = {}