import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getEvents } from './eventActions.jsx';

class Event extends React.Component {

    componentDidMount() {
        this.props.getEvents();
    }

    render() {
        let events = this.props.event.data.points.map(item => {
            return (
                
                <div key={item.pointId} className="event">
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
        event: state.event
    }
}

let mapDispatch = (dispatch) => {
    return {
        getEvents: (index) => dispatch(getEvents(index))
    }
}

export default connect(mapProps, mapDispatch)(Event) 