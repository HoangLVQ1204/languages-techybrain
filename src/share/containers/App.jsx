import React, { Component, PropTypes } from 'react';
import { renderRoutes } from 'react-router-config';

class App extends Component {
    render() {
        return (
            <div id='app-view'>
                <h1>This is App 1</h1>
                {renderRoutes(this.props.route.routes)}
            </div>
        );
    }
}

export default App;
