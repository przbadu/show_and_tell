import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../providers/userProvider";
import { signInWithGoogle } from "../services/firebase";
import googleLogo from "../assets/google-logo.png";

export default function Login() {
  const user = useContext(UserContext);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (user) setAuthenticated(true);
  }, [user]);

  if (authenticated) return <Redirect to="/" />;

  return (
    <div className="login-page">
      <button className="sign-in-with-google-button" onClick={signInWithGoogle}>
        <img
          src={googleLogo}
          alt="google icon"
          width={32}
          style={{ marginRight: 10 }}
        />
        <span> Continue with Google</span>
      </button>
    </div>
  );
}
