import { reducer } from '/reducers.js'
import { Action } from '/actions.js'

/**
 * @typedef {object} Num
 * @prop {integer} value
 */

export const Num = {}

/**
 * @typedef {object} State
 * @prop {Num} num
 */

export const State = {}

/**
 * @callback GetState
 * @returns {State}
 */

/**
 * @callback Dispatch
 * @param {Action} action
 */

/**
 * @callback EmptyFn
 */

/**
 * @callback Subscription
 * @param {State} prev
 * @param {State} next
 */

/**
 * @type {Array<Subscribe>}
 */
let subscribers = []

/**
 * @type {Array<State>}
 */
const states = [
    {
        num: {
            value: 0
        }
    }
]

/**
 * @returns {State}
 */
export const getState = () => {
    return Object.freeze({...states[0]})
}

/**
 * @param {Action} action 
 */
export const dispatch = (action) => {
    const prev = getState()
    const next = reducer(prev, action)

    const handler = (item) => item(prev, next)
    subscribers.forEach(handler)

    states.unshift(next)
}

/**
 * @param {Subscription} subscription 
 */
export const subscribe = (subscription) => {
    subscribers.push(subscription)
    const handler = (item) => item !== subscription

    const unsubscribe = () => {
        const newSubscribers = subscribers.filter(handler)
        subscribers = newSubscribers
    }

    return unsubscribe
}