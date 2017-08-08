import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Video from 'react-video';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';




import './Home.css';
// import Speaking from './Speaking.jsx';
// import Learning from './Learning.jsx';
// import ListRoom from '../list-room/ListRoom.jsx';
import RoomCard from '../list-room/RoomCard.jsx';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterRoom: 2,
        };
    }

    handleFilterRoom = (event, index, value) => {
        this.setState({
            filterRoom: value,
        });
    };
    
    render(){

        const data = {
            introduction: "Hi, my name is Leo Trieu I’m 33 and father to a 3-year-old boy.\n\
I designed and coded the Code4Startup platform with Ruby on Rails in 3 days only but it took me almost 2 and half months to create just 5 hours of video for my very first two educational courses ever, Zero and Ninja. WHY? Because I am not a native English speaker and I had to practice and repeat hundreds of times. But I kept trying and never gave up.\n\
I bootstrapped this startup with a dream of educating MILLIONS people from around the world. Code4Startup is not just about learning how to code, it's also about inspiring people to create something meaningful, something they are excited about. So if I can start my journey, WHY CAN'T YOU???",
                avatarUrl: "/static/images/avatars/founder.jpg",
                roomData:  [
                    {
                        topic: "Kaiwa N3",
                        description: "Practising Japanese with native speaker",
                        creator: "Frank Lee",
                        countryCreator: "Japan",
                        avatarCreator: "/static/images/avatars/founder.jpg"
                    },
                    {
                        topic: "Kaiwa N3",
                        description: "Practising Japanese with native speaker",
                        creator: "Frank Lee",
                        countryCreator: "Japan",
                        avatarCreator: "/static/images/avatars/founder.jpg"
                    },
                        {
                        topic: "Kaiwa N3",
                        description: "Practising Japanese with native speaker",
                        creator: "Frank Lee",
                        countryCreator: "Japan",
                        avatarCreator: "/static/images/avatars/founder.jpg"
                    },
                        {
                        topic: "Kaiwa N3",
                        description: "Practising Japanese with native speaker",
                        creator: "Frank Lee",
                        countryCreator: "Japan",
                        avatarCreator: "/static/images/avatars/founder.jpg"
                    },
                    {
                        topic: "Kaiwa N3",
                        description: "Practising Japanese with native speaker",
                        creator: "Frank Lee",
                        countryCreator: "Japan",
                        avatarCreator: "/static/images/avatars/founder.jpg"
                    },
                    {
                        topic: "Kaiwa N3",
                        description: "Practising Japanese with native speaker",
                        creator: "Frank Lee",
                        countryCreator: "Japan",
                        avatarCreator: "/static/images/avatars/founder.jpg"
                    },
                        {
                        topic: "Kaiwa N3",
                        description: "Practising Japanese with native speaker",
                        creator: "Frank Lee",
                        countryCreator: "Japan",
                        avatarCreator: "/static/images/avatars/founder.jpg"
                    },
                        {
                        topic: "Kaiwa N3",
                        description: "Practising Japanese with native speaker",
                        creator: "Frank Lee",
                        countryCreator: "Japan",
                        avatarCreator: "/static/images/avatars/founder.jpg"
                    }
                ]
            }
        

        return (
            <div>
                <div className="row center-sm">
                    <div className="col-sm-6">
                        <Paper zDepth={1}>
                            <div className="row intro">
                                <div className="col-sm-3 div-avatar">
                                    <Avatar 
                                        size={100}
                                        src={data.avatarUrl} className="avatar" />
                                    
                                    <RaisedButton
                                        href="https://github.com/callemall/material-ui"
                                        target="_blank"
                                        label="Following Us"
                                        secondary={true}
                                    />
                                </div>
                                <div className="col-sm-9">
                                    <p>Hi, my name is Frank, I’m 25 and father to a 3-year-old boy.</p>
                                    <p>I designed and coded the TalkToWorld platform with Javascript in 3 days only but it took me almost 2 and half months to create just 5 hours of video for my very first two educational courses ever, Zero and Ninja. WHY? Because I am not a native English speaker and I had to practice and repeat hundreds of times. But I kept trying and never gave up.</p>
                                    <p>I bootstrapped this startup with a dream of educating MILLIONS people from around the world. TalkToWorld is not just about learning how to code, it's also about inspiring people to create something meaningful, something they are excited about.</p>
                                    <p> So if I can start my journey, WHY CAN'T YOU???</p>
                                    <RaisedButton
                                        href="https://github.com/callemall/material-ui"
                                        target="_blank"
                                        label="Create Room"
                                        primary={true}
                                    />
                                </div>
                                
                            </div>                            
                        </Paper>
                    </div>
                    <div className="col-sm-6">
                    </div>
                </div>
                <div className="container-room">
                    <div className="row"> 
                        <div className="filter-room">
                            <DropDownMenu value={this.state.filterRoom} onChange={this.handleFilterRoom}>
                                <MenuItem value={1} primaryText="Current" />
                                <MenuItem value={2} primaryText="Finish" />
                            </DropDownMenu>
                        </div>
                    </div>
                    <div className="row">
                       {data.roomData.map(data =>
                            <RoomCard roomData={data}/> 
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;