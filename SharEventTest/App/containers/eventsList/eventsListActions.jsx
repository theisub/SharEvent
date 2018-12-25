import { GET_EVENTS_CREATOR_LIST_SUCCESS, GET_EVENTS_MEMBER_LIST_SUCCESS, GET_EVENTS_CREATOR_LIST_ERROR } from './eventsListConstants.jsx';
import Auth from '../../utilities/auth.js';
import "isomorphic-fetch"

export function receiveEventsByCreatorList(data) {
    return {
        type: GET_EVENTS_CREATOR_LIST_SUCCESS,
        events: data
    }
}

export function receiveEventsByMemberList(data) {
    return {
        type: GET_EVENTS_MEMBER_LIST_SUCCESS,
        events: data
    }
}

export function errorsReceive(error) {
    return {
        type: GET_EVENTS_CREATOR_LIST_ERROR,
        error: error
    }
}

export function getEventsByCreator() {
    return (dispatch) => {
        let queryTrailer = '?userId=';
        /* костыль, который надо убрать в конечной версии */
        if (Auth.isLogged() == false) {
            queryTrailer += '1';
        } else {
            queryTrailer += Auth.getUserId();
        }
        fetch(constants.getEventsByCreatorList + queryTrailer)
        .then((response) => {
            return response.json()
        }).then((data) => {
            dispatch(receiveEventsByCreatorList(data))
        }).catch((ex) => {
            dispatch(errorsReceive(ex))
        });
    }
}

export function getEventsByMember() {
    return (dispatch) => {
        let queryTrailer = '?userId=';
        /* костыль, который надо убрать в конечной версии */
        if (Auth.isLogged() == false) {
            queryTrailer += '1';
        } else {
            queryTrailer += Auth.getUserId();
        }
        fetch(constants.getEventsByMemberList + queryTrailer)
            .then((response) => {
                return response.json()
            }).then((data) => {
                dispatch(receiveEventsByMemberList(data))
            }).catch((ex) => {
                dispatch(errorsReceive(ex))
            });
    }
}