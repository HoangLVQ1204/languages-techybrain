import React, {Component, PropTypes} from 'react';

export default class TrackList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
    }  
  }

  componentWillMount() {
     this.setState({
       tracks: [
          {
            id: 1,
            title: 'Em của ngày hôm qua'
          },
          {
            id: 2,
            title: 'Cơn mưa ngang qua'
          }
       ]
     })
  }

  render() {
    return (
      <div>
      {
        this.state.tracks.map((track) => {
          return <div>Track: {track.title}</div>;
        })
      }
      </div>
    )
  }
}