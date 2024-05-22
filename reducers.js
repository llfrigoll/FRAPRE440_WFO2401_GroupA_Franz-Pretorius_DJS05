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
            return {
                ...state,
                num: {
                    ...state.num,
                    num: action.num
                }
            }
        }

        case 'SUBTRACT': {
            return {
                ...state,
                num: {
                    ...state.num,
                    num: action.num
                }
            }
        }

        case 'RESET': {
            return {
                ...state,
                num: {
                    ...state.num,
                    num: action.num
                }
            }
        }

        default: return state;
    }
}