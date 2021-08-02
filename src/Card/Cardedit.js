import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { updateCard } from "../utils/api";
import CardForm from "./Cardform";

function CardEdit() {
  const history = useHistory();
  const { cardId } = useParams();

  const [card, setCard] = useState({ name: "", description: "" }); // intial state will be what is currently on the card
  useEffect(() => {
    updateCard(cardId).then(setCard);
  }, [cardId]);

  function submitHandler(updatedCard) {
    updateCard(updatedCard).then((savedCard) =>
      history.push(`/cards/${savedCard.id}`)
    );
}

  function cancel() {
    history.goBack();
  }

  const child = card.id ? (
    <CardForm onCancel={cancel} onSubmit={submitHandler} initialState={card} />
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
            <Link to={`/cards/${card.id}`}>{card.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Card
          </li>
        </ol>
      </nav>
      <h1>Edit Card</h1>
      {child}
    </>
  );
}

export default CardEdit;
