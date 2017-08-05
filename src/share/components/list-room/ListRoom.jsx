import React, {PropTypes} from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {typography} from 'material-ui/styles';
import {grey400, cyan600, white} from 'material-ui/styles/colors';

import './ListRoom.css';

import Room from './Room.jsx';
import RoomCard from './RoomCard.jsx';

class ListRoom extends React.Component {
    render(){

        const { dataRoom, titleRoom } = this.props;

        const joinRoomButton = (url) => (
            <RaisedButton 
                label="Join" 
                secondary={true} 
                className="button-join"
                target="_blank"
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

        return(
            <div>
                {dataRoom.map(item =>
                        <RoomCard /> 
                )}
            </div>
            // <Paper>
                
            //     <List>
            //         <Subheader style={styles.subheader}>{titleRoom}</Subheader>
                    
            //     </List>
            // </Paper>
        )
    }
}

ListRoom.propTypes = {
  data: PropTypes.array
};

export default ListRoom;