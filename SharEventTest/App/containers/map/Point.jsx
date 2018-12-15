import React, { Component } from 'react';


class Point extends Component {
  
  removePoint(e) {
    this.props.removePoint(this.props.id);
  }

  render() {
    return (
      <div className="point">
        id: {this.props.id} 
        coord: {this.props.name}
        <div className="point__remove" onClick={this.removePoint.bind(this)}>✘</div>
      </div>
    )
  }
}

export default Point;
