import { GET_EVENT_SUCCESS, GET_EVENT_ERROR } from './eventConstants.jsx';
import "isomorphic-fetch"

export function receiveEvents(data) {
    return {
        type: GET_EVENT_SUCCESS,
        events: data
    }
}

export function errorReceive(err) {
    return {
        type: GET_EVENT_ERROR,
        error: err
    }
}

export function getEvents(eventId = 21) {
    return (dispatch) => {
        let queryTrailer = '?eventId=' + eventId;    
        fetch(constants.getPage + queryTrailer)
            .then((response) => {
                return response.json()
            }).then((data) => {
                dispatch(receiveEvents(data))
            }).catch((ex) => {
                dispatch(errorReceive(err))
            });
    }
}