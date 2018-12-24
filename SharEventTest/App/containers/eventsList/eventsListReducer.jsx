import { GET_EVENTS_LIST_SUCCESS, GET_EVENTS_LIST_ERROR } from './eventsListConstants.jsx';

const initialState = {
    data: [],
    error: ''
}

export default function eventsList(state = initialState, action) {
    switch (action.type) {
        case GET_EVENTS_LIST_SUCCESS:
            return { ...state, data: action.events, error: 'Success' }

        case GET_EVENTS_LIST_ERROR:
            return { ...state, error: action.error }

        default:
            return state;
    }
}