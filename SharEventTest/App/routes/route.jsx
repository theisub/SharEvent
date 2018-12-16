import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router-dom';

import About from '../containers/about/about.jsx';
import Event from '../containers/event/event.jsx';
import YandexApiMap from '../containers/map/ymap.jsx';

export default class Routing extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/map" component={YandexApiMap} />
                    <Route path="/" component={Event} />
                </Switch>
            </main>
        );
    }
}

