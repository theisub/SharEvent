import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';

export default class YandexApiMap extends React.Component {
    render() {
        return (
            <YMaps>
                <div>
                   Держи,дружок!
              <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
                </div>
            </YMaps>
        );
    }
};