import { GET_EVENTS_LIST_SUCCESS, GET_EVENTS_LIST_ERROR } from './eventsListConstants.jsx';
import Auth from '../../utilities/auth.js';
import "isomorphic-fetch"

export function receiveEventsList(data) {
    return {
        type: GET_EVENTS_LIST_SUCCESS,
        events: data
    }
}

export function errorsReceive(error) {
    return {
        type: GET_EVENTS_LIST_ERROR,
        error: error
    }
}

export function getEvents() {
    return (dispatch) => {
        let queryTrailer = '?userId=';
        if (Auth.isLogged() == false) {
            queryTrailer += '1';
        } else {
            queryTrailer += Auth.getUserId();
        }
        fetch(constants.getEventsList + queryTrailer)
        .then((response) => {
            return response.json()
        }).then((data) => {
            dispatch(receiveEventsList(data))
        }).catch((ex) => {
            dispatch(errorsReceive(ex))
        });
    }
}