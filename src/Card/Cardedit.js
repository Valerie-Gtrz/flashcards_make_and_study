import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readCard, updateCard, readDeck } from "../utils/api";
import CardForm from "./Cardform";

function CardEdit({ deckName }) {
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});

  const { cardId, deckId } = useParams();
  const history = useHistory();

  //get the cardId and retrieve the corresponding deck
  useEffect(() => {
    readCard(cardId).then(setCard);
    loadDeck();
  }, [cardId]);

  function loadDeck() {
    readDeck(deckId).then(setDeck);
  }

  function submitHandler(updatedCard) {
    updateCard(updatedCard).then(() => history.push(`/decks/${deckId}`));
  }

  const changeHandler = ({ target }) => {
    setCard({
      ...card,
      [target.id]: target.value,
    });
  };

  function doneHandler() {
    history.push(`/decks/${deckId}`);
  }

  // if card has an id render the card form
  const child = card.id ? (
    <CardForm
      onChange={changeHandler}
      onSubmit={submitHandler}
      onDone={doneHandler}
      deckName={deckName}
      initialState={card}
      doneButtonLabel="Cancel"
      saveButtonLabel="Submit"
    />
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
            <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Card {cardId}
          </li>
        </ol>
      </nav>
      <h1>Edit Card</h1>
      {child}
    </>
  );
}

export default CardEdit;
