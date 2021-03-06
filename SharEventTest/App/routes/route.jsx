﻿import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router-dom';

import About from '../containers/about/about.jsx';
import Event from '../containers/event/event.jsx';
import Home from '../containers/home/home.jsx'
import AddEventForm from '../containers/event/AddEventForm.jsx';
import YandexApiMap from '../containers/map/ymap.jsx';
import EventsList from '../containers/eventsList/EventsList.jsx';

export default class Routing extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/map" component={YandexApiMap} />
                    <Route path="/events" component={EventsList} />
                    <Route path="/newevent" component={AddEventForm} />
                    <Route path="/" component={Home} />

                </Switch>
            </main>
        );
    }
}

