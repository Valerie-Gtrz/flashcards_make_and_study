import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api";
import DeckForm from "./Deckform";

function DeckEdit() {
  const [deck, setDeck] = useState({ name: "", description: "" });

  const history = useHistory();
  const { deckId } = useParams();

  //get deck by deck id the set deck state to an object with keys name and description
  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  //updateDecks and on 'save' reroute user to corresponding deck page
  function submitHandler(updatedDeck) {
    updateDeck(updatedDeck).then((savedDeck) =>
      history.push(`/decks/${savedDeck.id}`)
    );
  }
  //if user clicks 'cancel' reoute to corresponding deck page
  function cancel() {
    // history.goBack();
    history.push(`/decks/${deckId}`)
  }

  //if a deck id exists React will render the deck form
  const child = deck.id ? (
    <DeckForm onCancel={cancel} onSubmit={submitHandler} initialState={deck} />
  ) : (
    <p>Loading...</p>
  );

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
      <h1>Edit Deck</h1>
      {child}
    </>
  );
}
export default DeckEdit;
