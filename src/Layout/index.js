import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home"
import {Route, Switch} from 'react-router-dom'


function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
      <Route exact path='/'>
        <Home />
        </Route>
        {/* TODO: Implement the screen starting here */}
        {/*add routes and paths for views*/}
        {/*at / shows a list of decks and 4 buttons*/}
        <NotFound />
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
