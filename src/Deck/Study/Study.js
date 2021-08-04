import { useState, useEffect } from "react";
import { listCards, readCard, readDeck } from "../../utils/api";
import { useHistory, useParams, Link } from "react-router-dom";
import StudyCard from "./Studycard";

function Study() {
  
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState({});
  const [flipped, setFlipped] = useState(false);
 

  const history = useHistory();
  const { cardId, deckId } = useParams(); //something with this
  
  useEffect(() => {
    try {
      readDeck(deckId).then(setDeck);
      loadCards();
    } catch (e) {
      return e.message;
    }
  }, [deckId]);
  console.log(deck)//test

  function loadCards() {
    listCards(deckId).then(setCards);
}
console.log(cards)//test

  function flipHandler() {
    setFlipped(!flipped);
    console.log(flipped)
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
            <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <span>Study</span>
            {cardId}
          </li>
        </ol>
      </nav>
      <h1>Study: {deck.name}</h1>
  <StudyCard flipHandler={flipHandler} flipped={flipped} />
  </>
  );
}

export default Study;
