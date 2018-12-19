import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginForm from '../../components/loginForm.jsx';
import { login, logout, showLoginForm, inputLogin, inputPassword } from './headerActions.jsx';
import AddEventForm from '../../containers/event/AddEventForm.jsx';
import RegisterForm from './register.jsx';

class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            showAddEvent: false,
            showRegisterForm: false
        };
    }
    
    togglePopup() {
        console.log(this.state.showAddEvent)
        this.setState({
            showAddEvent: !this.state.showAddEvent
        });
    }

    toggleRegisterPopup() {
        console.log(this.state.showRegisterForm)
        this.setState({
            showRegisterForm: !this.state.showRegisterForm
        });
    }
    
    render() {
        let logoutButton = this.props.header.isLogged ?
            <a className="link" onClick={() => { if (confirm('Вы уверены что хотите выйти?')) this.props.logout() }}>Выход</a>
            : '';

        let loginButton = this.props.header.isLogged ?
            <span className="nameLabel">Привет, {this.props.header.name}</span>
            : <a className="link" onClick={() => { this.props.showLoginForm(!this.props.header.isLoginFormShowed); }}>Авторизация</a>

        let loginForm = this.props.header.isLoginFormShowed ?
            <LoginForm onLogin={this.props.login} login={this.props.header.name} password={this.props.header.password} onChangeLogin={this.props.inputLogin} onChangePassword={this.props.inputPassword} />
            : '';

        let registerButton = !this.props.header.isLogged ?
            <Link to="/newuser" onClick={this.toggleRegisterPopup.bind(this)}> Регистрация </Link>
            : null;

        let addEventButton = this.props.header.isLogged ?
            < Link to="/newevent" onClick={this.togglePopup.bind(this)} > Добавить событие </Link>
            : null;

        
        
        return (
            <header>
                <div className="main-header">
                    <h1>SharEvent</h1>
                    <nav>
                        <Link to="/">Событие</Link>
                        <Link to="/about">Обо мне</Link>
                        <Link to="/map">Покажи карту</Link>
                        {addEventButton}
                        {
                            this.state.showAddEvent ?
                                <AddEventForm closePopup={this.togglePopup.bind(this)} /> : null
                        }
                    </nav>
                    <ul>
                        <li>{loginButton}</li>
                        <li>{logoutButton}</li>
                        <li>{registerButton}</li>
                        {
                            this.state.showRegisterForm ?
                                <RegisterForm closePopup={this.toggleRegisterPopup.bind(this)} /> : null
                        } 
                    </ul>

                    {loginForm}
                </div>
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