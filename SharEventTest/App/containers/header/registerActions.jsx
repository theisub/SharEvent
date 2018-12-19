import { REGISTER_SUCCESS, REGISTER_ERROR, SHOW_REGISTER_FORM, REG_INPUT_LOGIN, REG_INPUT_PASSWORD, REG_INPUT_PASSWORD_REPEAT } from './registerConstants.jsx'

import "isomorphic-fetch"

export function showRegisterForm(show) {
    return {
        type: SHOW_REGISTER_FORM,
        payload: show
    }
}

export function inputRegLogin(name) {
    return {
        type: REG_INPUT_LOGIN,
        payload: name
    }
}

export function inputRegPassword(pass) {
    return {
        type: REG_INPUT_PASSWORD,
        payload: pass
    }
}

export function inputRegRepeatPassword(pass) {
    return {
        type: REG_INPUT_PASSWORD_REPEAT,
        payload: pass
    }
}

export function register(name, pass1, pass2) {
    return (dispatch) => {
        if (name && pass1 && pass2 && pass1 == pass2) {
            var data = {
                login: name,
                password: pass1
            };

            fetch(constants.register, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(data)
            }).then((response) => {
                if (response.ok) {
                    alert('Конгратулэйшнс!');
                    return response.json();
                } else {
                    dispatch({ type: REGISTER_ERROR, payload: 'Ошибка регистрации' });
                    throw 'Ошибка регистрации';
                }
                }).then((data) => {
                    dispatch({ type: REGISTER_SUCCESS, payload: data.username });
                }).catch((ex) => {
                    alert(ex);
                    dispatch({ type: REGISTER_ERROR, payload: ex });
                });
        } else {
            alert('Необходимо ввести имя пользователя и пароль дважды');
            dispatch({ type: REGISTER_ERROR, payload: 'Необходимо ввести имя пользователя и пароль дважды' });
        }
    }
}