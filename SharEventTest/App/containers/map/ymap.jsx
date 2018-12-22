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


        /*Я дико извиняюсь, но это сделано, чтобы можно было нормально разбить массив с координатами на 2 отдельных поля. 
         Можно конечно постараться и обойтись без него, но придется переписывать половину функций*/
        this.pointsToSend = {
            lats: [],
            longs: []    
        }
    }


    //Тут костыль с EventId. Подробнее в EventController.cs - 50 строка
    componentDidMount() {
        fetch("https://localhost:44309/api/event/page?eventId=3")
            .then(response => response.json())
            .then(data => {
                const results = data.points.map(x => {
                    
                    return {
                        coord: new Array(x.pointLatitiude, x.pointLongitude)
                    }
                })
                this.setState({ points: results });
            });
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

    parseIntoFormat()
    {

        this.pointsToSend.lats = []
        this.pointsToSend.longs = []

        for (var i = 0,len = this.state.points.length; i < len; i++)
        {
            this.pointsToSend.lats[i]=this.state.points[i].coord[0];
            this.pointsToSend.longs[i]=this.state.points[i].coord[1];

        }
        console.log(this.pointsToSend)
    }

    submitData = () => {
        fetch(constants.addPointsToEvent,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                //Пока не получаем EventId,временный костыль. Чуть подробнее на EventController.cs - 50 строка.
                body: JSON.stringify({ EventId: 39, PointLatitiudeList: this.pointsToSend.lats, PointLongitudeList: this.pointsToSend.longs })
            }).then((response) => { console.log(response.body); this.setState() });
        

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

                <button onClick={() => { this.parseIntoFormat(), this.submitData(); }}> Обновить точки в базе</button>

            </div>
        );
    }
};