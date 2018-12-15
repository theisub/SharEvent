import React, { Component } from 'react';


class Field extends Component {

    addPoint(e) {
        if (e.key === 'Enter' && e.target.value) {
            this.props.addPoint(e.target.value);
            e.target.value = '';
        }
    }

    render() {
        return (
            <input className="input" type="text" onKeyPress={this.addPoint.bind(this)} placeholder="Введи что угодно + Enter" />
        )
    }
}

export default Field;
