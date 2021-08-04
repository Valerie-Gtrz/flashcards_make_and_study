import React from "react";
import { Link } from "react-router-dom";

function CardList({ deck, onCardDelete }) {
  const { cards = [] } = deck;

  const list = cards.map((card) => (
    <li
      key={card.id}
      className="list-group-item list-group-item-action flex-column align-items-start"
    >
      <div>
        <div className="row">
          <div className="col mb-2">{card.front}</div>
          <div className="col mb-2">{card.back}</div>
        </div>
        <div className="d-flex justify-content-end">
          <div className="row">
            <Link
              to={`/decks/${deck.id}/cards/${card.id}/edit`}
              className="btn btn-secondary m-1"
              title="Edit Card"
            >
              <span className="oi oi-pencil" /> Edit
            </Link>
            <div className="m-1">
              <button className="btn btn-danger " title="Delete Card">
                <span
                  className="oi oi-trash"
                  onClick={() => onCardDelete(card.id)}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  ));

  return (
    <div className="mt-4 card-list">
      <h3>Cards</h3>
      <ul className="list-group">{list}</ul>
    </div>
  );
}
export default CardList;
