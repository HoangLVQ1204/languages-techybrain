import React               from 'react';
import { Route, Switch } from 'react-router';

import App from './containers/App.jsx';

import TrackList from '../share/component/TrackList.jsx';

export default (
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/xxx" component={TrackList} />
    </Switch>
);
