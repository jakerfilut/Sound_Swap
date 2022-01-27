import React, { useState, useEffect } from "react";

function Playlist() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("/songs")
      .then((res) => res.json())
      .then((songData) => setSongs(songData));
  }, []);

  const mapSongs = songs.map((song) => {
    return (
      <div className="song_container_card">
        <h1>{song.title}</h1>
        <img src={song.image} />
        <div>{song.artist}</div>
        <div>{song.duration}</div>
      </div>
    );
  });

  return <div>{mapSongs}</div>;
}

export default Playlist;
