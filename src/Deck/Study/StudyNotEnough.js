import React from "react";
import { Link } from 'react-router-dom'

function StudyNotEnough({ deck }) {
 
  //need to loop

  //if(!{url}){} or something like that =====Display a "Not found" message if the user visits a URL that does not exist.
  return (
    <div className="NotFound">
            <h2>Not enough cards.</h2>
          <p className="addmore">
          You need at least 3 cards to study. There is/are {deck.cards.length} card(s) in this deck.
          </p>
          <Link
                to={`/decks/${deck.id}/cards/new`}
                className="btn btn-primary"
                title="Add Card"
            >
                <span className="oi oi-plus" /> Add Cards
            </Link>
        </div>
  );
}

export default StudyNotEnough;