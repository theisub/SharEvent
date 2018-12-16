import React, { Component } from 'react';
import Point from './Point.jsx'
import Field from './Field.jsx'
import YMap from './Map.jsx';
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import { YandexApiTest } from './ymapbb.jsx'

export default class YandexApiMap extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            num: 0,
            center: [55.76, 37.64],
            points: []
        };

        this.priv = this.priv.bind(this);
    }


    changeMapCenter(coord) {
        this.setState({
            center: coord
        })
    }

    changePoint(id, val) {
        let points = this.state.points;
        points[id]['coord'] = val;

        this.setState({
            points: points
        })
    }


    addPoint(name, coord) {
        this.setState({
            points: this.state.points.concat([{
                coord: this.state.center
            }])
        })
    }

    removePoint(id) {
        let points = this.state.points;
        points.splice(id, 1);

        this.setState({
            points: points
        })
    }

    priv(e) {
        this.setState(prev =>
            (
                {
                    num: prev.num + 1

                }
            ));

    }


    render() {
        const pointsList = this.state.points.map((item, i) =>
            <Point key={i} id={i} name={item.coord} removePoint={(i) => this.removePoint(i)} />
        );
       

        return (
            <div className="map">

                    <Field addPoint={this.addPoint.bind(this)} />

                    <div className="app__points">
                        {pointsList}
                    </div>


                    <YMap
                        center={this.state.center}
                        points={this.state.points}
                        changePoint={this.changePoint.bind(this)}
                        changeMapCenter={this.changeMapCenter.bind(this)}
                    />

                   

                    
                    <div>
                        Center:  {this.state.center}
                    </div>


                    <button onClick={this.priv}>{this.state.num}</button>
            </div>
        );
    }
};