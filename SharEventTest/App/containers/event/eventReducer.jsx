import { GET_EVENT_SUCCESS, GET_EVENT_ERROR } from './eventConstants.jsx'

const initialState = {
    data: { points: [] },
    error: ''
}

export default function event(state = initialState, action) {
    switch (action.type) {
        case GET_EVENT_SUCCESS:
            return { ...state, data: action.events, error: 'Success' }

        case GET_EVENT_ERROR:
            return { ...state, error: action.error }

        default:
            return state;
    }
}