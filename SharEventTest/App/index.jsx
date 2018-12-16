import React from 'react' //1
import { render } from 'react-dom' //2
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import App from './containers/app.jsx' //3
import configureStore from './store/configureStore.jsx'


const store = configureStore();

render(
     <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('content')
) //4