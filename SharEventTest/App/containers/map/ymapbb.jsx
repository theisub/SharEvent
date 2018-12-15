import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';


const state = {
    center: [55.75, 37.57],
    zoom: 9,
    controls: ['zoomControl', 'fullscreenControl'],
};

export default class YandexApiTest extends React.Component {
    render() {
        return (
            <YMaps>
                <Map
                    defaultState={state}
                    modules={['control.ZoomControl', 'control.FullscreenControl']}
                >
                        <Placemark
                            modules={['geoObject.addon.balloon']}
                            defaultGeometry={state.center}
                            properties={{
                                balloonContentBody:
                                    'Event description',
                            }}
                        />
              </Map>
                
            </YMaps>
        );
    }
};