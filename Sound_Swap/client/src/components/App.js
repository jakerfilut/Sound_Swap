import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import Search from "../pages/Search";
import Playlist from "../pages/Playlist";
import { MdRouter } from "react-icons/md";
import UserPlaylist from "../pages/UserPlaylist";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  //test
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route path="/search" component={() => <Search />} />
        <Route path="/playlist" component={() => <Playlist />} />
        <Route path="/myplaylist" component={() => <UserPlaylist />} />
      </Switch>
    </>
  );
}

export default App;
