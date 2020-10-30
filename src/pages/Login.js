import React, { useContext, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { UserContext } from "../providers/userProvider";
import { signInWithGoogle } from "../services/firebase";

export default function Login() {
  const user = useContext(UserContext);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (user) setAuthenticated(true);
  }, [user]);

  if (authenticated) return <Redirect to="/dashboard" />;

  return (
    <div className="login-buttons">
      <button className="login-provider-button" onClick={signInWithGoogle}>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
          alt="google icon"
        />
        <span> Continue with Google</span>
      </button>

      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}
