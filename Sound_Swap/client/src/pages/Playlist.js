import React, { useState, useEffect } from "react";

function Playlist() {
  const [songs, setSongs] = useState([]);
  const [updateSong, setUpdateSong] = useState(false);

  useEffect(() => {
    fetch("/songs")
      .then((res) => res.json())
      .then((songData) => setSongs(songData));
  }, [updateSong]);

  function handleDelete(song) {
    // console.log(song.id);
    fetch(`/songs/${song.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setUpdateSong(!updateSong);
  }

  const mapSongs = songs.map((song) => {
    return (
      <div className="song_container_card">
        <h1>{song.title}</h1>
        <img src={song.image} />
        <div>{song.artist}</div>
        <div>{song.duration}</div>
        <button onClick={() => handleDelete(song)}>Remove From Playlist</button>
      </div>
    );
  });

  return <div>{mapSongs}</div>;
}

export default Playlist;
