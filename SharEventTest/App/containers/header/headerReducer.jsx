import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, SHOW_LOGIN_FORM, INPUT_LOGIN, INPUT_PASSWORD } from './headerConstants.jsx'
import Auth from '../../utilities/auth'
import { REGISTER_SUCCESS, REGISTER_ERROR,  SHOW_REGISTER_FORM, REG_INPUT_LOGIN, REG_INPUT_PASSWORD, REG_INPUT_PASSWORD_REPEAT } from './registerConstants.jsx';

const initialState = {
    isLogged: Auth.isLogged(),
    name: Auth.getLogin(),
    password: '',
    error: '',
    isLoginFormShowed: false,

    isRegisterFormShowed: false,
    regName: '',
    regPass: '',
    regRepeatPass: '',
}

export default function header(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, isLogged: true, isLoginFormShowed: false, name: action.payload, password: '', error: '' }

        case LOGIN_ERROR:
            return { ...state, error: action.payload }

        case LOGOUT:
            return { ...state, isLogged: false, name: '', password: '' }

        case SHOW_LOGIN_FORM:
            return { ...state, isLoginFormShowed: action.payload }

        case INPUT_LOGIN:
            return { ...state, name: action.payload }

        case INPUT_PASSWORD:
            return { ...state, password: action.payload }

        case REGISTER_SUCCESS:
            return { ...state, isRegisterFormShowed: false, regName: action.payload, regPassword: '', regRepeatPassword: '', error: '' }

        case REGISTER_ERROR:
            return { ...state, error: action.payload }

        case SHOW_REGISTER_FORM:
            return { ...state, isRegisterFormShowed: action.payload }

        case REG_INPUT_LOGIN:
            return { ...state, regName: action.payload }

        case REG_INPUT_PASSWORD:
            return { ...state, regPass: action.payload }

        case REG_INPUT_PASSWORD_REPEAT:
            return { ...state, regRepeatPass: action.payload }

        default:
            return state;
    }
}