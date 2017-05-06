import makeRootReducer from '../store/reducers';

export const injectReducer = store => ({ key, reducer }) => {
    if (Object.hasOwnProperty.call(store.asyncReducers, key)) return
    store.asyncReducers[key] = reducer
    store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default injectReducer;