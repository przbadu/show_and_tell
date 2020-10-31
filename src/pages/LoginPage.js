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
      <div className="login__heading">SHOW AND TELL</div>

      <div className="login__hero">
        <h1>Show And Tell Presentations</h1>
        <p>
          Sign in with your company google account and access presentations that
          are shared with you. This application acts as repository for all the
          show and tell contents from your company, and you can view
          presentation, filter them by presenter and search presentation by
          title in one place!
        </p>
        <button
          className="sign-in-with-google-button"
          onClick={signInWithGoogle}
        >
          <img
            src={googleLogo}
            alt="google icon"
            width={32}
            style={{ marginRight: 10 }}
          />
          <span> Continue with Google</span>
        </button>
      </div>
    </div>
  );
}
