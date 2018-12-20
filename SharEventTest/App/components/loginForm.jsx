import React from 'react';
import ReactDOM from 'react-dom';

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="loginForm">
                <h2> Приветик! </h2>
                <input type="input" placeholder="username" value={this.props.login} onChange={(e) => this.props.onChangeLogin(e.target.value)} className="input" />
                <input type="password" placeholder="password" value={this.props.password} onChange={(e) => this.props.onChangePassword(e.target.value)} className="input" />
                <div className="submitForm">
                    <input type="button" value="Войти" className="input" onClick={() => this.props.onLogin(this.props.login, this.props.password)} />
                </div>
            </div>
        );
    }
};