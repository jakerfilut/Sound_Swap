import React, { useState, useEffect, useReducer } from "react";

function Playlist() {
  const [songs, setSongs] = useState([]);
  const [updateSong, setUpdateSong] = useState(false);

  const convertHMS = (value) => {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
    let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    // console.log(hours + ":" + minutes + ":" + seconds);
    return minutes + ":" + seconds; // Return is HH : MM : SS
  };

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
        <div>{convertHMS(song.duration)}</div>
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
