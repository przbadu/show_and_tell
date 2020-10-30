import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// import Navbar from "./components/Navbar";
import { UserProvider } from "./providers/userProvider";
import Routes from "./config/Routes";

function App() {
  return (
    <UserProvider>
      <Router>
        {/* <Navbar /> */}
        <div className="App">
          <Routes />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
