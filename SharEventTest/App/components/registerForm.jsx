import React from 'react';

export default class RegisterForm extends React.Component {
    render() {
        return (
            <div className="loginForm">
                <h2> Регистрация </h2>
                <input type="input" placeholder="username" value={this.props.login} onChange={(e) => this.props.onChangeLogin(e.target.value)} className="input" />
                <input type="password" placeholder="password" value={this.props.password} onChange={(e) => this.props.onChangePassword(e.target.value)} className="input" />
                <input type="password" placeholder="repeat password" value={this.props.repeatPassword} onChange={(e) => this.props.onChangeRepeatPassword(e.target.value)} className="input" />
                <input type="button" value="Войти" className="input" onClick={() => this.props.onRegister(this.props.login, this.props.repeatPassword, this.props.password)} />
            </div>
        );
    }
}