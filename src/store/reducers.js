import { combineReducers } from 'redux'
import { locationReducer } from './location'

const reducers = {
    location: locationReducer,
}

export const makeRootReducer = (asyncReducers) =>
    combineReducers({
        ...reducers,
        ...asyncReducers
    })

export default makeRootReducer