import { GET_EVENTS_CREATOR_LIST_SUCCESS, GET_EVENTS_MEMBER_LIST_SUCCESS, GET_EVENTS_JOIN_REQUESTS_LIST_SUCCESS, GET_EVENTS_CREATOR_LIST_ERROR } from './eventsListConstants.jsx';

const initialState = {
    eventsByCreatorList: [],
    eventsByMemberList: [],
    eventsJoinRequests: [],
    error: ''
}

export default function eventsList(state = initialState, action) {
    switch (action.type) {
        case GET_EVENTS_CREATOR_LIST_SUCCESS:
            return { ...state, eventsByCreatorList: action.events, error: 'Success' }

        case GET_EVENTS_MEMBER_LIST_SUCCESS:
            return { ...state, eventsByMemberList: action.events, error: 'Success' }

        case GET_EVENTS_JOIN_REQUESTS_LIST_SUCCESS:
            return { ...state, eventsJoinRequests: action.events, error: 'Success' }

        case GET_EVENTS_CREATOR_LIST_ERROR:
            return { ...state, error: action.error }

        default:
            return state;
    }
}