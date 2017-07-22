import React, { Component, PropTypes } from 'react';
import { renderRoutes } from 'react-router-config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeDefault from '../themes/ThemeDefault.jsx';

import Header from '../components/header/Header.jsx'

class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={ThemeDefault}>
                <div>
                    <Header />
                    {renderRoutes(this.props.route.routes)}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
