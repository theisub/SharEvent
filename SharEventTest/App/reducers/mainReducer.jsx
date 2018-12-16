import { combineReducers } from 'redux'
import event from '../containers/event/eventReducer.jsx'
import header from '../containers/header/headerReducer.jsx'

export default combineReducers({
    event,
    header
})