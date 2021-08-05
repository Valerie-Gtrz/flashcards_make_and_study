import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "../Home/Home";
import Study from "../Deck/Study/Study";
import NotFound from "./NotFound";
import Header from "./Header";

import DeckEdit from "../Deck/Deckedit";
import DeckView from "../Deck/Deckview";
import CardEdit from "../Card/Cardedit";
import CardCreate from "../Card/Cardcreate";
import DeckCreate from "../Deck/Deckcreate";

function Layout() {
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
          <Route>
            <NotFound /> {/*NotFound used here*/}
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
