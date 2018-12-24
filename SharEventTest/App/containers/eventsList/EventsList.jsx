﻿import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEvents } from './eventsListActions.jsx';

class EventsList extends React.Component {

    componentDidMount() {
        this.props.getEvents();
    }

    render() {
        let listCreator = this.props.eventsList.data.map(item => {
            return (
                <div key={item.eventId} className="event">
                    <div value="eventName"> EventId: {item.eventId} Название: {item.eventName} </div>
                    <Link to={`/event/${item.eventId}`}> Тык </Link>
                    <hr />
                </div>
            );
        });

        return (
            <div id="event">
                //это меню не должен видеть незалогиненный пользователь
                //костыль с отладочным отображением в eventsListActions (22-23 строка).
                <h2> Я создатель </h2>
                {listCreator}

                <h2> Я участник </h2>
                //список ивентов с линками, где залогиненный юзер - участник
                <h2> Входящие запросы </h2>
                //список ивентов с линками и с кнопками accept-decline 
            </div>
        );
    }
};

let mapProps = (state) => {
    return {
        eventsList: state.eventsList
    }
}

let mapDispatch = (dispatch) => {
    return {
        getEvents: () => dispatch(getEvents())
    }
}

export default connect(mapProps, mapDispatch)(EventsList) 