import { createStore, applyMiddleware } from 'redux'
import mainReducer from '../reducers/mainReducer.jsx'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
    const store = createStore(mainReducer, initialState, applyMiddleware(thunk))

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}