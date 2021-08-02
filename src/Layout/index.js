import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home"
import {Route, Switch} from 'react-router-dom'
import StudyScreen from "./Study/StudyScreen";


function Layout() {
  {/* TODO: Implement the screen starting here */}
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
      <Route exact path='/'>
        <Home />
        </Route>
        <Route path='/study'>
        <StudyScreen />
        </Route>
        <NotFound />
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
