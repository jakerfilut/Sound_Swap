import { useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { Button } from "../styles";
import "../pages/Login.css";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { IconContext } from "react-icons/lib";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <IconContext.Provider value={{ color: "#EE6C4D", size: 40 }}> 
    <section>
      <Logo>   <MdOutlineLibraryMusic />SoundSwap</Logo>
   
      <p>SoundSwap allows users to curate playlists to share with friends—no matter their preferred streaming service. Log in or sign up to start swapping sounds!</p>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <Divider />
          <p>
            Don't have an account? &nbsp;
            <Button color="secondary"  onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <Divider />
          <p>
            Already have an account? &nbsp;
            <Button color="secondary"  onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
    </section>
    </IconContext.Provider>
  );
}

const Logo = styled.h1`
  font-size: 3rem;
  margin: 8px 0 16px;

`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Login;
