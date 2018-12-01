import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getEvents } from './eventActions.jsx';

class Event extends React.Component {

    componentDidMount() {
        this.props.getEvents();
    }

    render() {
        let events = this.props.events.points.map(item => {
            return (
                
                <div key={item.eventId} className="event">
                    <div value="point"> PointId: {item.pointId} Широта: {item.pointLatitiude} Долгота: {item.pointLongitude} </div>
                    <hr />
                </div>
            );
        });

        return (
            <div id="event">
                {events}
            </div>
        );
    }
};

let mapProps = (state) => {
    return {
        events: state.data,
        error: state.error
    }
}

let mapDispatch = (dispatch) => {
    return {
        getEvents: (index) => dispatch(getEvents(index))
    }
}

export default connect(mapProps, mapDispatch)(Event) 