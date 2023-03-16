import React from 'react';
import './TrackList.css';
import Track from '../Track/Track'

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                <Track onAdd = {this.props.onAdd} onRemove={this.props.onRemove}/>
                {this.props.tracks.map(track => {
                    return (
                        this.props.track.name,
                        this.props.track.artist,
                        this.props.track.album
                    )
                })}
            </div>
        );
    }
}

export default TrackList;