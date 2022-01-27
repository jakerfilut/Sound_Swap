import { React, useState } from "react";
import "./NavBar.css";
import { IconContext } from "react-icons/lib";
import { FaTools, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { SiAddthis } from "react-icons/si";
import { BsPersonSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  //test
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <IconContext.Provider value={{ color: "#EE6C4D", size: 40 }}>
      <div className="navbar">
        <div className="navbar-container container">
          <div className="navbar-logo" onClick={closeMobileMenu}>
            <MdOutlineLibraryMusic />
            SoundSwap
          </div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/search"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <div className="nav-plus">
                  <SiAddthis size={24} />
                </div>
                Playlist
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/playlist"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <div className="nav-plus">
                  <BsPersonSquare size={24} />
                </div>
                Profile
              </Link>
            </li>

            <li className="nav-item">
              <div className="nav-links" onClick={closeMobileMenu}>
                <button id="logout" onClick={handleLogoutClick}>Logout</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default NavBar;
