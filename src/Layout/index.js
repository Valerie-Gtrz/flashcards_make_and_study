import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "../Home/Index";
import Study from "../Deck/Study/Study";
import NotFound from "./NotFound";
import Header from "./Header";
// import Home from "./Home";
// import StudyScreen from "./StudyScreen";

import DeckEdit from "../Deck/Deckedit";
import DeckView from "../Deck/Deckview";
import CardEdit from "../Card/Cardedit"
import CardCreate from "../Card/Cardcreate"
import DeckCreate from "../Deck/Deckcreate"


function Layout() {
  
  {
    /* TODO: Implement the screen starting here */
  }
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/decks/new">
            <DeckCreate />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/edit">
            <DeckEdit />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <CardCreate />
          </Route>
           <Route path="/decks/:deckId/cards/:cardId/edit">
            <CardEdit />
          </Route> 
          <Route exact={true} path="/decks/:deckId">
            <DeckView />
          </Route>
          <Route exact={true} path="/decks">
            <Redirect to="/" />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/deck/1/cards">
            <StudyScreen />
          </Route> */}
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
