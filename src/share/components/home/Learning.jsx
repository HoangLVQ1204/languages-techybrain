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

class Learning extends React.Component {
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
                    <Subheader style={styles.subheader}>Learning room</Subheader>
                    {this.props.data.map(item =>
                        <div>
                            <ListItem
                            leftAvatar={<Avatar src={item.flagUrl} />}
                            primaryText={item.language}
                            secondaryText={item.level}
                            rightIconButton={rightIconMenu}
                            />
                            <Divider inset={true} />
                        </div>
                    )}
                </List>
            </Paper>
        )
    }
}

Learning.propTypes = {
  data: PropTypes.array
};

export default Learning;