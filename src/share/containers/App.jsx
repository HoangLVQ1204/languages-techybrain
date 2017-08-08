import React, { Component, PropTypes } from 'react';
import { renderRoutes } from 'react-router-config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeDefault from '../themes/ThemeDefault.jsx';

import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';

import './App.css';

class App extends Component {
    render() {
         const styles = {
            container: {
                padding: "60px 20px 0px 20px"
            }
        };
        return (
            <MuiThemeProvider muiTheme={ThemeDefault}>
                <div style={{ background: '#f9f9f9'}}>
                    <Header />
                    <div style={styles.container}>
                    {renderRoutes(this.props.route.routes)}
                    </div>
                    <Footer />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
