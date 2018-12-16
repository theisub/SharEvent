import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginForm from '../../components/loginForm.jsx';
import { login, logout, showLoginForm, inputLogin, inputPassword } from './headerActions.jsx';

class Header extends React.Component {
    render() {
        let newEventButton = this.props.header.isLogged ?
            <div className="menu">
                <ul>
                    <li>
                        <Link className="link" to="/event/new">Новое событие</Link>
                    </li>
                    <li>
                        <a className="link" onClick={() => { if (confirm('Вы уверены что хотите выйти?')) this.props.logout() }}>Выход</a>
                    </li>
                </ul>
            </div> :
            '';
        let loginButton = this.props.header.isLogged ?
            <span className="nameLabel">Привет, {this.props.header.name}</span> :
            <a className="link" onClick={() => { this.props.showLoginForm(!this.props.header.isLoginFormShowed); }}>Тык сюда для авторизации</a>
        let loginForm = this.props.header.isLoginFormShowed ?
            <LoginForm onLogin={this.props.login} login={this.props.header.name} password={this.props.header.password} onChangeLogin={this.props.inputLogin} onChangePassword={this.props.inputPassword} /> :
            '';

        
        return (
            <header>
                <div className="mainMenu">
                    {loginButton}
                    {loginForm}
                    {newEventButton}
                </div>
                <menu>
                    <ul>
                        <li>
                            <Link to="/">Событие</Link>
                        </li>
                        <li>
                            <Link to="/about">Обо мне</Link>
                        </li>
                        <li>
                            <Link to="/map">Покажи карту</Link>
                        </li>
                    </ul>
                </menu>
            </header>
        );
    }
};

let mapProps = (state) => {
    return {
        header: state.header
    }
}

let mapDispatch = (dispatch) => {
    return {
        login: bindActionCreators(login, dispatch),
        logout: bindActionCreators(logout, dispatch),
        showLoginForm: bindActionCreators(showLoginForm, dispatch),
        inputLogin: bindActionCreators(inputLogin, dispatch),
        inputPassword: bindActionCreators(inputPassword, dispatch)
    }
}

export default connect(mapProps, mapDispatch)(Header) 