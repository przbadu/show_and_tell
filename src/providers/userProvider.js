import React, { useState, useEffect, createContext } from "react";
import { auth } from "../services/firebase";

export const UserContext = createContext({ user: null });

export const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (u) => {
      if (u) {
        const { displayName, email, photoURL } = u;
        setUser({
          displayName,
          email,
          photoURL,
        });
      }
    });
  }, []);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
