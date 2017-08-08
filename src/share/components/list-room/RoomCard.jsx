import React, {PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';


import './RoomCard.css';

class RoomCard extends React.Component {

    render(){
        
        const {roomData} = this.props;

        return(
            <div className="col-md-3">
                <Card
                    style={{
                        borderRadius: '2px',
                        marginBottom: '20px'
                    }}
                >
                    <CardMedia
                        overlay={
                            <div className="test">
                                <CardTitle 
                                title={roomData.topic} 
                                subtitle={roomData.description}
                                titleColor="#fff"
                                subtitleColor="#d8d8d8"
                                />
                            </div>
                        }
                        overlayContainerStyle={{
                            background: 'linear-gradient(rgba(87, 74, 74, 0.65), rgba(87, 74, 74, 0.65))',
                            borderRadius: '2px',
                            
                        }}
                        overlayContentStyle={{
                            background: 'rgba(0, 0, 0, 0)'
                        }}
                    >
                    <img src="/static/images/room_cover/room_cover.jpg" alt="" height="110px"/>
                    </CardMedia>
                     <CardHeader
                        title={roomData.creator}
                        subtitle={roomData.countryCreator}
                        avatar={roomData.avatarCreator}
                    >
                        <RaisedButton 
                            label="Join" 
                            onTouchTap={this.handleExpand} 
                            primary={true} 
                            buttonStyle={{
                                borderRadius: '2px'
                            }}
                        />
                    </CardHeader>
            
                </Card>
            </div>
        )
    }
}

export default RoomCard