import { State } from '/store.js'
import { Action } from '/actions.js'

/**
 * function takes in a state and an action and runs a switch case statement based on the action type, thereafter it returns
 * the specific action applies to the state
 * @param {State} state 
 * @param {Action} action 
 * @returns {State}
 */
export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD': {
            return action.state
        }

        case 'SUBTRACT': {
            return action.state
        }

        case 'RESET': {
            return action.state
        }

        default: return state;
    }
}