import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';
import ViewModule from 'material-ui/svg-icons/action/view-module';
import {white} from 'material-ui/styles/colors';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import RaisedButton from 'material-ui/RaisedButton';


import './Header.css';


class Header extends React.Component {

  render() {
    const {styles, handleChangeRequestNavDrawer} = this.props;

    const style = {
      appBar: {
        position: 'fixed',
        top: 0,
        left: 0,
        overflow: 'hidden',
        maxHeight: 57,
        paddingTop: 5
      }
    };

    

    return (
        <div>
            <AppBar
              style={style.appBar}
              title="Talk2World"
              iconStyleLeft={{
                display: 'none'
              }}
              titleStyle={{
                marginLeft: 10
              }}
              iconElementRight={
                <div>
                  <RaisedButton className="authen-button" label="Login" />
                  <RaisedButton className="authen-button" primary={true} label="Sign up" />
                </div>  
              }
              iconStyleRight={{
                marginRight: 10,
              }}
            />
          </div>
      );
  }
}

Header.propTypes = {
  styles: PropTypes.object,
  handleChangeRequestNavDrawer: PropTypes.func
};

export default Header;
