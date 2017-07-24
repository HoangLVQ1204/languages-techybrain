import React, { Component, PropTypes } from 'react';
import { renderRoutes } from 'react-router-config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeDefault from '../themes/ThemeDefault.jsx';
// import 'font-awesome/css/font-awesome.css';
// import 'flexboxgrid/css/flexboxgrid.css';

import Header from '../components/header/Header.jsx'

class App extends Component {
    render() {
         const styles = {
            header: {
                paddingLeft: 0
                //  paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
            },
            container: {
                margin: '80px 20px 20px 15px',
                // paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
                paddingLeft: 0
            }
        };
        return (
            <MuiThemeProvider muiTheme={ThemeDefault}>
                <div>
                    <Header styles={styles.header} />
                    <div style={styles.container}>
                    {renderRoutes(this.props.route.routes)}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
