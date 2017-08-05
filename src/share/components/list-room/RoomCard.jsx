import React, {PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';


import './RoomCard.css';

class RoomCard extends React.Component {
    render(){
        return(
            <div className="col-md-3">
                <Card
                    style={{
                        borderRadius: '5px',
                        marginBottom: '20px'
                    }}
                >
                    <CardMedia
                        overlay={
                            <div className="test">
                                <CardTitle 
                                title="Kaiwa N3" 
                                subtitle="Practising Japanese with native speaker" 
                                titleColor="#fff"
                                subtitleColor="#d8d8d8"
                                />
                            </div>
                        }
                        overlayContainerStyle={{
                            background: 'linear-gradient(rgba(87, 74, 74, 0.65), rgba(87, 74, 74, 0.65))',
                            borderRadius: '5px',
                            
                        }}
                        overlayContentStyle={{
                            
                            background: 'rgba(0, 0, 0, 0)'
                        }}
                    >
                    <img src="/static/images/room_cover/room_cover.jpg" alt="" height="110px"/>
                    </CardMedia>
                     <CardHeader
                        title="Frank Lee"
                        subtitle="Japan"
                        avatar="/static/images/avatars/founder.jpg"
                    />
                </Card>
            </div>
        )
    }
}

export default RoomCard