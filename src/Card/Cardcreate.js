import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../utils/api";
import CardForm from "./Cardform";

function CardCreate() {
  const [deck, setDeck] = useState({ cards: [] });

  const history = useHistory();
  const { deckId } = useParams();

  //retrieve the deck using the deckId param then set deck state to matching deck's "cards" property array
  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  //on 'submit' create new card with new id and add it to the current deck
  function submitHandler(card) {
    createCard(deckId, card);
  }

  //push user to deck page when on 'done'
  function doneHandler() {
    history.push(`/decks/${deckId}`);
  }

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
            Add Card
          </li>
        </ol>
      </nav>
      <h2>
        {deck.name}: <span>Add Card</span>
      </h2>
      <CardForm
        deckName={deck.name}
        initialState={deck}
        onSubmit={submitHandler}
        onDone={doneHandler}
      />
    </>
  );
}
export default CardCreate;
