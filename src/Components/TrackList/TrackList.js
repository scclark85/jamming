import React from 'react';
import './TrackList.css';

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {/* You will add a map method that renders a set of Track componen */}
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