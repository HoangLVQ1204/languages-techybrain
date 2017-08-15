import React, {PropTypes} from 'react';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import ActionVideoCam from 'material-ui/svg-icons/av/videocam';
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';

import { Calendar } from 'react-calendar-component';
import moment from 'moment';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import './Room.css';

class Room extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showCheckboxes: false,
            stripedRows: true,
            valueTab: 'a'
        };
    }

    handleChange = (value) => {
        this.setState({
            valueTab: value,
        });
    };

    render(){
        const rightIconMenu = (
            <RaisedButton 
                label="Add new" 
            /> 
        );
        return(
            <div className="row">
                <div className="col-md-8 room-content">
                    <div className="room-today-topic">
                        <Paper>
                        <h1>Today's topic</h1>
                        </Paper>
                    </div>
                     <Tabs
                        value={this.state.valueTab}
                        onChange={this.handleChange}
                    >
                        <Tab label="Contribution" value="a">
                            <Paper className="room-contribution-learner">
                                <Paper style={{maxHeight: 400, overflow: 'auto'}}>
                                    <Paper>
                                        <div className="row">
                                            <div className="col-md-2 rom-contribution-avatar">
                                                <Chip >
                                                <Avatar src="/static/images/avatars/founder.jpg" />
                                                    Teacher
                                                </Chip>
                                            </div>
                                            <div className="col-md-8 rom-contribution-content">
                                                <p>
                                                    <span style={{color: darkBlack}}>今日は、学校を休みたいんです！</span> : 
                                                    Hôm nay tôi muốn nghỉ học!
                                                </p>
                                            </div>    
                                             <div className="col-md-2 rom-contribution-time">
                                                <p>
                                                    <span style={{color: darkBlack}}>1 minutes ago</span>
                                                </p>
                                            </div>  
                                        </div>
                                    </Paper>
                                    <Paper>
                                        <div className="row">
                                            <div className="col-md-2 rom-contribution-avatar">
                                                <Avatar style={{height:32, width:32}} src="/static/images/avatars/founder.jpg" />
                                            </div>
                                            <div className="col-md-8 rom-contribution-content">
                                                <p>
                                                <span style={{color: darkBlack}}>今日は、学校を休みたいんです！</span> : 
                                                Hôm nay tôi muốn nghỉ học!
                                                </p>
                                            </div>   
                                            <div className="col-md-2 rom-contribution-time">
                                                <p>
                                                    <span style={{color: darkBlack}}>2 minutes ago</span>
                                                </p>
                                            </div>   
                                        </div>
                                    </Paper>
                                    <Paper>
                                        <div className="row">
                                            <div className="col-md-2 rom-contribution-avatar">
                                                <Chip >
                                                <Avatar src="/static/images/avatars/founder.jpg" />
                                                    Teacher
                                                </Chip>
                                            </div>
                                            <div className="col-md-8 rom-contribution-content">
                                                <p>
                                                    <span style={{color: darkBlack}}>今日は、学校を休みたいんです！</span> : 
                                                    Hôm nay tôi muốn nghỉ học!
                                                </p>
                                            </div>    
                                            <div className="col-md-2 rom-contribution-time">
                                                <p>
                                                    <span style={{color: darkBlack}}>3 minutes ago</span>
                                                </p>
                                            </div>  
                                        </div>
                                    </Paper>
                                    <Paper>
                                        <div className="row">
                                            <div className="col-md-2 rom-contribution-avatar">
                                                <Chip >
                                                <Avatar src="/static/images/avatars/founder.jpg" />
                                                    Teacher
                                                </Chip>
                                            </div>
                                            <div className="col-md-8 rom-contribution-content">
                                                <p>
                                                    <span style={{color: darkBlack}}>今日は、学校を休みたいんです！</span> : 
                                                    Hôm nay tôi muốn nghỉ học!
                                                </p>
                                            </div>    
                                             <div className="col-md-2 rom-contribution-time">
                                                <p>
                                                    <span style={{color: darkBlack}}>4 minutes ago</span>
                                                </p>
                                            </div>  
                                        </div>
                                    </Paper>
                                    <Paper>
                                        <div className="row">
                                            <div className="col-md-2 rom-contribution-avatar">
                                                <Avatar style={{height:32, width:32}} src="/static/images/avatars/founder.jpg" />
                                            </div>
                                            <div className="col-md-8 rom-contribution-content">
                                                <p>
                                                <span style={{color: darkBlack}}>今日は、学校を休みたいんです！</span> : 
                                                Hôm nay tôi muốn nghỉ học!
                                                </p>
                                            </div>   
                                            <div className="col-md-2 rom-contribution-time">
                                                <p>
                                                    <span style={{color: darkBlack}}>5 minutes ago</span>
                                                </p>
                                            </div>   
                                        </div>
                                    </Paper>
                                    <Paper>
                                        <div className="row">
                                            <div className="col-md-2 rom-contribution-avatar">
                                                <Chip >
                                                <Avatar src="/static/images/avatars/founder.jpg" />
                                                    Teacher
                                                </Chip>
                                            </div>
                                            <div className="col-md-8 rom-contribution-content">
                                                <p>
                                                    <span style={{color: darkBlack}}>今日は、学校を休みたいんです！</span> : 
                                                    Hôm nay tôi muốn nghỉ học!
                                                </p>
                                            </div>    
                                            <div className="col-md-2 rom-contribution-time">
                                                <p>
                                                    <span style={{color: darkBlack}}>6 minutes ago</span>
                                                </p>
                                            </div>  
                                        </div>
                                    </Paper>
                                     <Paper>
                                        <div className="row">
                                            <div className="col-md-2 rom-contribution-avatar">
                                                <Chip >
                                                <Avatar src="/static/images/avatars/founder.jpg" />
                                                    Teacher
                                                </Chip>
                                            </div>
                                            <div className="col-md-8 rom-contribution-content">
                                                <p>
                                                    <span style={{color: darkBlack}}>今日は、学校を休みたいんです！</span> : 
                                                    Hôm nay tôi muốn nghỉ học!
                                                </p>
                                            </div>    
                                             <div className="col-md-2 rom-contribution-time">
                                                <p>
                                                    <span style={{color: darkBlack}}>1 minutes ago</span>
                                                </p>
                                            </div>  
                                        </div>
                                    </Paper>
                                    <Paper>
                                        <div className="row">
                                            <div className="col-md-2 rom-contribution-avatar">
                                                <Avatar style={{height:32, width:32}} src="/static/images/avatars/founder.jpg" />
                                            </div>
                                            <div className="col-md-8 rom-contribution-content">
                                                <p>
                                                <span style={{color: darkBlack}}>今日は、学校を休みたいんです！</span> : 
                                                Hôm nay tôi muốn nghỉ học!
                                                </p>
                                            </div>   
                                            <div className="col-md-2 rom-contribution-time">
                                                <p>
                                                    <span style={{color: darkBlack}}>2 minutes ago</span>
                                                </p>
                                            </div>   
                                        </div>
                                    </Paper>
                                    <Paper>
                                        <div className="row">
                                            <div className="col-md-2 rom-contribution-avatar">
                                                <Chip >
                                                <Avatar src="/static/images/avatars/founder.jpg" />
                                                    Teacher
                                                </Chip>
                                            </div>
                                            <div className="col-md-8 rom-contribution-content">
                                                <p>
                                                    <span style={{color: darkBlack}}>今日は、学校を休みたいんです！</span> : 
                                                    Hôm nay tôi muốn nghỉ học!
                                                </p>
                                            </div>    
                                            <div className="col-md-2 rom-contribution-time">
                                                <p>
                                                    <span style={{color: darkBlack}}>3 minutes ago</span>
                                                </p>
                                            </div>  
                                        </div>
                                    </Paper>
                                    <Paper>
                                        <div className="row">
                                            <div className="col-md-2 rom-contribution-avatar">
                                                <Chip >
                                                <Avatar src="/static/images/avatars/founder.jpg" />
                                                    Teacher
                                                </Chip>
                                            </div>
                                            <div className="col-md-8 rom-contribution-content">
                                                <p>
                                                    <span style={{color: darkBlack}}>今日は、学校を休みたいんです！</span> : 
                                                    Hôm nay tôi muốn nghỉ học!
                                                </p>
                                            </div>    
                                             <div className="col-md-2 rom-contribution-time">
                                                <p>
                                                    <span style={{color: darkBlack}}>4 minutes ago</span>
                                                </p>
                                            </div>  
                                        </div>
                                    </Paper>
                                    <Paper>
                                        <div className="row">
                                            <div className="col-md-2 rom-contribution-avatar">
                                                <Avatar style={{height:32, width:32}} src="/static/images/avatars/founder.jpg" />
                                            </div>
                                            <div className="col-md-8 rom-contribution-content">
                                                <p>
                                                <span style={{color: darkBlack}}>今日は、学校を休みたいんです！</span> : 
                                                Hôm nay tôi muốn nghỉ học!
                                                </p>
                                            </div>   
                                            <div className="col-md-2 rom-contribution-time">
                                                <p>
                                                    <span style={{color: darkBlack}}>5 minutes ago</span>
                                                </p>
                                            </div>   
                                        </div>
                                    </Paper>
                                    <Paper>
                                        <div className="row">
                                            <div className="col-md-2 rom-contribution-avatar">
                                                <Chip >
                                                <Avatar src="/static/images/avatars/founder.jpg" />
                                                    Teacher
                                                </Chip>
                                            </div>
                                            <div className="col-md-8 rom-contribution-content">
                                                <p>
                                                    <span style={{color: darkBlack}}>今日は、学校を休みたいんです！</span> : 
                                                    Hôm nay tôi muốn nghỉ học!
                                                </p>
                                            </div>    
                                            <div className="col-md-2 rom-contribution-time">
                                                <p>
                                                    <span style={{color: darkBlack}}>6 minutes ago</span>
                                                </p>
                                            </div>  
                                        </div>
                                    </Paper>
                                </Paper>  
                                <div className="rom-contribution-add-button">
                                        <RaisedButton 
                                            label="Add new" 
                                            primary={true} 
                                        /> 
                                </div>  
                                </Paper>
                                
                    
                        </Tab>
                        <Tab label="Resources" value="b">
                            <div>
                                <h2>Controllable Tab B</h2>
                                <p>
                                This is another example of a controllable tab. Remember, if you
                                use controllable Tabs, you need to give all of your tabs values or else
                                you wont be able to select them.
                                </p>
                            </div>
                        </Tab>
                    </Tabs>
                     <div className="room-comment">
                        <Paper>
                            <h1>Display comments</h1>
                        </Paper>
                    </div>
                </div>
                <div className="col-md-4 room-infor">
                    <div className="room-parts room-description">
                        <Card>
                            <CardMedia
                                overlay={
                                    <div className="test">
                                        <CardTitle 
                                        title="Kaiwa N3"
                                        subtitle="Practising N3"
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
                                title="Frank lee"
                                subtitle="Japan"
                                avatar="/static/images/avatars/founder.jpg"
                            >
                                {/* <RaisedButton 
                                    label="Join" 
                                    onTouchTap={this.handleExpand} 
                                    primary={true} 
                                    buttonStyle={{
                                        borderRadius: '2px'
                                    }}
                                /> */}
                            </CardHeader>
                    
                        </Card>
                    </div>
                    <div className="room-parts room-video-call">
                        <Paper>
                            <div className="row">
                                <div className="col-md-4 video-button">
                                    <IconButton 
                                        tooltip="Join video call"
                                        tooltipPosition="bottom-center"
                                        iconStyle={{
                                            width: 100,
                                            height: 100,
                                        }}
                                        style={{
                                             width: 120,
                                            height: 120,
                                            
                                        }}
                                    >
                                        <ActionVideoCam />
                                    </IconButton>
                                </div>
                                <div className="col-md-8 room-url">
                                    <TextField
                                        defaultValue="/room/1243432"
                                    />
                                    <div className="row">
                                     <RaisedButton 
                                        label="Copy" 
                                    /> 
                                     <RaisedButton 
                                        label="Share" 
                                    /> 
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </div>
                    <div className="room-parts room-schedule">
                        <Paper>
                            <Table>
                                <TableBody
                                        displayRowCheckbox={this.state.showCheckboxes}
                                        stripedRows={this.state.stripedRows}
                                >
                                    <TableRow>
                                        <TableRowColumn>Monday</TableRowColumn>
                                        <TableRowColumn></TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>Tuesday</TableRowColumn>
                                        <TableRowColumn></TableRowColumn>
                                    </TableRow>
                                     <TableRow>
                                        <TableRowColumn>Wednesday</TableRowColumn>
                                        <TableRowColumn>20:00 - 22:00</TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>Thursday</TableRowColumn>
                                        <TableRowColumn></TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>Friday</TableRowColumn>
                                        <TableRowColumn>20:00 - 22:00</TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>Saturday</TableRowColumn>
                                        <TableRowColumn></TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>Sunday</TableRowColumn>
                                        <TableRowColumn>20:00 - 22:00</TableRowColumn>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Paper>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Room;