import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
    constructor(props) {
        super(props);
    
        this.handleNameChange = this.handleNameChange.bind(this);
      }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }
    
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'} onChange={this.handleNameChange} />
                <TrackList playlistTracks = {this.state.playlistTracks} onRemove={this.removeTrack} isRemove={true}/>
                <button class="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;