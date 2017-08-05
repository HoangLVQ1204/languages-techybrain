import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import Video from 'react-video';

import './Home.css';
import Speaking from './Speaking.jsx';
import Learning from './Learning.jsx';
import ListRoom from '../list-room/ListRoom.jsx';
import RoomCard from '../list-room/RoomCard.jsx';

class Home extends React.Component {
    
    render(){

        const data = {
            introduction: "Hi, my name is Leo Trieu I’m 33 and father to a 3-year-old boy.\n\
I designed and coded the Code4Startup platform with Ruby on Rails in 3 days only but it took me almost 2 and half months to create just 5 hours of video for my very first two educational courses ever, Zero and Ninja. WHY? Because I am not a native English speaker and I had to practice and repeat hundreds of times. But I kept trying and never gave up.\n\
I bootstrapped this startup with a dream of educating MILLIONS people from around the world. Code4Startup is not just about learning how to code, it's also about inspiring people to create something meaningful, something they are excited about. So if I can start my journey, WHY CAN'T YOU???",
            avatarUrl: "/static/images/avatars/founder.jpg",
            speakingRoom: {
                title: "Speaking",
                room:  [
                    {
                        language: "English",
                        level: "Any level",
                        title: "How to master in English",
                        creator: "Frank Lee",
                        typeApp: "Hangout",
                        flagUrl: "/static/images/flags/england.png",
                        linkVideo: "https://hangouts.google.com/hangouts/_/grb77hcgovgj7nau53yzazesree"
                    },
                    {
                        language: "English",
                        level: "Any level",
                        title: "How to master in English",
                        creator: "Frank Lee",
                        typeApp: "Hangout",
                        flagUrl: "/static/images/flags/england.png",
                        linkVideo: "https://hangouts.google.com/hangouts/_/grb77hcgovgj7nau53yzazesree"
                    },
                    {
                        language: "English",
                        level: "Any level",
                        title: "How to master in English",
                        creator: "Frank Lee",
                        typeApp: "Hangout",
                        flagUrl: "/static/images/flags/england.png",
                        linkVideo: "https://hangouts.google.com/hangouts/_/grb77hcgovgj7nau53yzazesree"
                    }
                ]
            }
           
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
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/H5ZWjTlVp8s" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="container-room">
                    <div className="row">
                        {/*<div>*/}
                        <RoomCard />
                        <RoomCard />
                        <RoomCard />
                        <RoomCard />
                        <RoomCard />
                        <RoomCard />
                        <RoomCard />
                        <RoomCard />
                        {/*</div>*/}
                        {/*<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-15 ">*/}
                            {/*<ListRoom  dataRoom={data.speakingRoom.room} titleRoom={data.speakingRoom.title}/>*/}
                        {/*</div>*/}
                        {/*<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
                            <ListRoom  dataRoom={data.speakingRoom.room} titleRoom={data.speakingRoom.title}/>
                        </div>*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;