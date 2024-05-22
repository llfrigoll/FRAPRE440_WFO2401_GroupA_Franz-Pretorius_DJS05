import { State } from '/store.js'
import { Action } from '/actions.js'

/**
 * 
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