import React from 'react';


export default class AddEventForm extends React.Component{

    constructor(props) {
        super(props);
        this.state =
        {
            eventName: '',
            eventDescription: '',
            eventUrl: ''
         
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        alert('Название события: ' + this.state.eventName + '\n Описание события: ' + this.state.eventDescription + '\n Ссылка события: ' + this.state.eventUrl);
        event.preventDefault();
    }

    submitData = () => {
        console.log(this.form);
        fetch("http://localhost:80/", { method: "POST", body: JSON.stringify(this.state) }).then((resp) => {
            this.setState();
        });
    }

    render() {
        return (
         
            <div className='popup'>
                <div className='popup_inner'>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            EventName:
                        <input type="text" name="eventName" value={this.state.eventName} onChange={this.handleChange} />
                        </label>
                        <br />
                        <label>
                            EventDescription:
                        <textarea name="eventDescription" value={this.state.eventDescription} onChange={this.handleChange} />
                        </label>
                        <br />
                        <label>
                            EventUrl:
                        <input type="url" name="eventUrl" value={this.state.eventUrl} onChange={this.handleChange} />
                        </label>
                        <h6> Примечание: я у мамы дизайнер. Потом сделаем красиво.</h6>
                        <button onClick={this.props.closePopup}>Закрыть</button>
                        <input type="submit" value="Добавить" onClick={() => {
                            this.submitData();
                        }}/>
                    </form> 
                </div>
            </div>


        );
    }
};