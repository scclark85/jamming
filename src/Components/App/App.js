import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      searchResults: [{
        name: '',
        artist: '',
        album: '',
        id: ''
      }],

      playlistName: '',

      playlistTracks: [{
        name: '',
        artist: '',
        album: '',
        id: ''
      }],
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
  }

  removeTrack(track) {
    this.state.playlistTracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({ playlistTracks: this.state.playlistTracks });
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults onAdd={this.props.onAdd} searchResults={this.state.searchResults} />
            <Playlist onNameChange={this.updatePlaylistName} playlistName={this.state.playlistName} onRemove={this.removeTrack} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
