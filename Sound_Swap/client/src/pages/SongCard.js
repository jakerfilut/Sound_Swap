import React, { useState, useEffect } from "react";
import "./SongCard.css";

function SongCard({ results }) {
  const [newSong, setNewSong] = useState({});
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

  function handleClick(song) {
    setNewSong({
      title: song.title,
      artist: song.artist.name,
      duration: song.duration,
      image: song.album.cover_medium,
    });
    setUpdateSong(!updateSong);
  }

  useEffect(() => {
    fetch("/songs", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSong),
    });
    console.log(newSong);
  }, [updateSong]);

  const mapResults = results.map((song) => {
    return (
      <div className="song_container_card">
        <h1 className="song_title">{song.title}</h1>
        <img src={song.album.cover_medium} />
        <div>{song.artist.name}</div>
        <div>{convertHMS(song.duration)}</div>
        <button onClick={() => handleClick(song)}>Add to Playlist</button>
      </div>
    );
  });

  return <div className="song_container">{mapResults}</div>;
}

export default SongCard;
