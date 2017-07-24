import React, {PropTypes} from 'react';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';

import './Room.css';

class Room extends React.Component {
    render(){
        const {roomData} = this.props;
        const avatar = "/static/images/avatars/founder.jpg";
        return(
            <Paper>
                <div className="row room-container">
                    <div className="col-sm-1 room-flag">
                        <Avatar src={roomData.flagUrl} />
                    </div>
                    <div className="col-sm-9 room-infor">
                        <div className="language">
                            <strong>English</strong> - <span>Any level</span>
                        </div>
                        <div className="list-avatar">
                            <Avatar src={avatar} />
                            <Avatar src={avatar} />
                            <Avatar src={avatar} />
                            <Avatar src={avatar} />
                            <Avatar src={avatar} />
                            <Avatar src={avatar} />
                        </div>
                    </div>
                    <div className="col-sm-2 room-button">
                         <RaisedButton 
                            label="Join" 
                            secondary={true} 
                            className="button-join"
                            target="_blank"
                            href={roomData.linkVideo}
                        />
                    </div>
                </div>
            </Paper>
        )
    }
}

export default Room;