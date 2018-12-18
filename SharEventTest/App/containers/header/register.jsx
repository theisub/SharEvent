import React from 'react';


export default class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state =
            {
                login: '',
                password: '',
                repeatPassword: ''

            };

        this.handleChangeInfo = this.handleChangeInfo.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    handleChangeInfo(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmitForm(event) {
        alert('Учетная запись создана');
        event.preventDefault();
    }

    submitData = () => {
        //console.log(this.form);
        fetch(constants.register,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(this.state)
            }).then((response) => { this.setState() });
    }

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <form onSubmit={this.handleSubmitForm}>
                        <label>
                            Придумай логин:
                        <input type="text" name="login" value={this.state.login} onChange={this.handleChangeInfo} />
                        </label>
                        <br />
                        <label>
                            Придумай пароль:
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChangeInfo} />
                        </label>
                        <br />
                        <label>
                            Повтори пароль:
                        <input type="password" name="repeatPassword" value={this.state.repeatPassword} onChange={this.handleChangeInfo} />
                        </label>
                        <br />
                        <h6> Примечание: я у мамы дизайнер. Потом сделаем красиво.</h6>
                        <input type="submit" value="Зарегистрироваться" onClick={() => {
                            this.submitData();
                        }} />
                        <button onClick={this.props.closePopup}>Отмена</button>
                </form>
                </div>
            </div>


        );
    }
};