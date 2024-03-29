import React from 'react';
import './Track.css';

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    renderAction() {
        if (this.props.isRemoval) {
            return <button className="Track-action" onClick={this.removeTrack}>-</button>;
        } else {
            return <button className="Track-action" onClick={this.addTrack}>+</button>;
        }
    }
    addTrack(track) {
        this.props.onAdd(this.props.track);
    }

    removeTrack(track) {
        this.props.removeTrack(this.props.track);
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{/* track name will go here */}</h3>
                    <p>{/* track artist will go here */} | {/*  track album will go here */}</p>
                </div>
                <button className="Track-action"></button>
            </div>
        );
    }
}

export default Track;