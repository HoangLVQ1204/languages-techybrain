import React, {PropTypes} from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {grey400, cyan600, white} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';
import Wallpaper from 'material-ui/svg-icons/device/wallpaper';
import RaisedButton from 'material-ui/RaisedButton';

import './Speaking.css';

class Speaking extends React.Component {
    render(){

         const iconButtonElement = (
            <IconButton
            touch={true}
            tooltipPosition="bottom-left"
            >
            <MoreVertIcon color={grey400} />
            </IconButton>
        );

        const rightIconMenu = (
            <IconMenu iconButtonElement={iconButtonElement}>
                <MenuItem>Join</MenuItem>
            </IconMenu>
        );

        const joinRoomButton = (url) => (
            <RaisedButton 
                label="Join" 
                secondary={true} 
                className="button-join" 
                href={url}
            />
        );

        const styles = {
            subheader: {
                fontSize: 24,
                fontWeight: typography.fontWeightLight,
                backgroundColor: cyan600,
                color: white
            }
        };

        console.log(this.props.data);

        return(
            <Paper>
                <List>
                    <Subheader style={styles.subheader}>Speaking room</Subheader>
                    {this.props.data.map(item =>
                        <div>
                            <ListItem
                                leftAvatar={<Avatar src={item.flagUrl} />}
                                primaryText={item.language}
                                secondaryText={item.level}
                                rightIconButton={joinRoomButton(item.linkVideo)}
                            />
                            <Divider inset={true} />
                        </div>
                    )}
                </List>
            </Paper>
        )
    }
}

Speaking.propTypes = {
  data: PropTypes.array
};

export default Speaking;