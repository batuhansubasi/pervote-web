import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Register from "./pages/Register";
import SinglePersonnel from "./pages/SinglePersonnel";
import Mobile from "./pages/Mobile";
import Setting from "./pages/Setting";
import Deparment from "./pages/Department";
import Personnel from "./pages/Personnel";
import { getTokenJwt } from "./helpers/jwt";
import Navbar from "./components/Navbar";

import { Switch, Route, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";

function App() {
  var auth = useSelector((state) => state.isLogged);
  const jwt = getTokenJwt();
  if (jwt) {
    auth = true;
  }

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} auth={!auth} />
        <Route exact path="/register" component={Register} auth={!auth} />
        <Route exact path="/settings" component={Setting} auth={auth} />
        <Route exact path="/department" component={Deparment} auth={auth} />
        <Route exact path="/mobile" component={Mobile} />
        <Route
          exact
          path="/personnel/:id"
          component={SinglePersonnel}
          auth={auth}
        />
        <PrivateRoute
          exact
          path="/personnel"
          component={Personnel}
          auth={auth}
        />
        <Route component={Error} />
      </Switch>
    </>
  );
}

const PrivateRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to={{ pathname: "/" }} />
      }
    />
  );
};

// function display(auth) {
//   return {
//     display: auth ? "block" : "none",
//   };
// }

export default App;
