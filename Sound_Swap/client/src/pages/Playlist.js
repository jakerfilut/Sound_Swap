import React, { useState, useEffect } from "react";

function Playlist() {
  const [songs, setSongs] = useState([]);
  const [updateSong, setUpdateSong] = useState(false);

  useEffect(() => {
    fetch("/songs")
      .then((res) => res.json())
      .then((songData) => setSongs(songData));
    console.log("updated song");
  }, [updateSong]);

  function handleDelete(song) {
    fetch(`/songs/${song.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("delete song");
    setUpdateSong(!updateSong);
  }

  const mapSongs = songs.map((song) => {
    return (
      <div className="song_container_card">
        <h1 className="song_title">{song.title}</h1>
        <img src={song.image} />
        <div>{song.artist}</div>
        <div>{song.duration}</div>
        <button onClick={() => handleDelete(song)}>Remove From Playlist</button>
      </div>
    );
  });

  return (
    <div className="song_container">
      {mapSongs}
      {/* <button>Create Playlist</button> */}
    </div>
  );
}

export default Playlist;
