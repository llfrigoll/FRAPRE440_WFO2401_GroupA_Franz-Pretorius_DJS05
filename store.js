import { reducer } from '/reducers.js'
import { Action } from '/actions.js'

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
 * @callback Subscription
 * @param {State} prev
 * @param {State} next
 */

/**
 * @type {Array<Subscription>}
 */
let subscribers = []

/**
 * @type {Array<State>}
 */
const states = [
    {
        num: 0
    }
]

/**
 * function returns the most recent state
 * @returns {State}
 */
export const getState = () => {
    return Object.freeze(states[0])
}

/**
 * function uses the reducer function to apply an action on the current state to get a new state, thereafter it runs a function
 * on every subscription in subscribers using 'prev' and 'next' and finally unshifts the states array with the newest state('next')
 * @param {Action} action 
 */
export const dispatch = (action) => {
    const prev = getState()
    const next = reducer(prev, action)

    subscribers.forEach(item => item(prev, next))

    states.unshift(next)
}

/**
 * takes in a subscription(prev, next) and adds it to the subscribers array, declares an unsubscribe function that creates
 * a new array filtering out any items that aren't a subscription and then thereafter returns the unsubscribe function
 * @param {Subscription} subscription 
 */
export const subscribe = (subscription) => {
    subscribers.push(subscription)

    const unsubscribe = () => {
        const newSubscribers = subscribers.filter(item => item !== subscription)
        subscribers = newSubscribers
    }

    return unsubscribe
}