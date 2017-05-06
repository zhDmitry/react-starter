import { combineReducers } from 'redux'

const reducers = {
    noop: (state = {}) => state,
}

export const makeRootReducer = (asyncReducers) =>
    combineReducers({
        ...reducers,
        ...asyncReducers
    })

export default makeRootReducer