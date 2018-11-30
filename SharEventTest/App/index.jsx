import React from 'react' //1
import { render } from 'react-dom' //2
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import App from './containers/app.jsx' //3
import eventReducer from './containers/event/eventReducer.jsx'


function configureStore(initialState) {
    return createStore(eventReducer, initialState, applyMiddleware(thunk))
}

const store = configureStore()
render(
     <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('content')
) //4