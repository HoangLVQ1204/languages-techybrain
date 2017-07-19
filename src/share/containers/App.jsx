import React, { Component, PropTypes } from 'react';

export default class App extends Component {
    render() {
        return (
            <div id='app-view'>
                <h1>This is App 1</h1>
                {this.props.children}
            </div>
        );
    }
}
