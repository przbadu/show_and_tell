import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { UserProvider } from "./providers/userProvider";

function App() {
  return (
    <UserProvider>
      <Router>
        {/* <Navbar /> */}
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
