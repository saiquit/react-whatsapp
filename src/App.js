import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useEffect, useState } from "react";
import { auth } from "./config/firebase";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged(function (isUser) {
      if (isUser) {
        setUser(isUser);
        <Redirect to="/" exact />;
      } else {
        // No user is signed in.
        console.log("No user is signed in.");
        <Redirect to="/signin" exact />;
      }
    });
    return () => {};
  }, [user]);
  return (
    <>
      <Switch>
        <Route
          path="/"
          component={(props) =>
            !user ? <Redirect to="/signin" /> : <Home {...props} />
          }
          exact
        />
        <Route
          path="/signin"
          component={(props) =>
            user ? <Redirect to="/" /> : <SignIn {...props} />
          }
          exact
        />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </>
  );
}

export default App;
