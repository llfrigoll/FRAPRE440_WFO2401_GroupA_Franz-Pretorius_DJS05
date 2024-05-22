import { subscribe, dispatch } from '/store.js'
import { add, subtract, reset } from '/actions.js'

subscribe((_, next) => console.log(next))

dispatch(add())
dispatch(reset())
dispatch(subtract())


