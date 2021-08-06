import { useState, useEffect } from "react";
import { readDeck } from "../../utils/api";
import { useHistory, useParams, Link } from "react-router-dom";
import StudyCard from "./Studycard";
import StudyNotEnough from "./Studynotenough";

function Study() {
  const [deck, setDeck] = useState({ cards: [] });

  const [flipped, setFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  const history = useHistory();
  const { cardId, deckId } = useParams();

  //
  useEffect(() => {
    try {
      readDeck(deckId).then(setDeck);
    } catch (e) {
      return e.message;
    }
  }, [deckId]);

  //function to render the next card in the cards array when user presses the 'next' btn
  const nextCard = () => {
    const deckLength = deck.cards.length;
    if (currentCard + 2 <= deckLength) {
      setCurrentCard(currentCard + 1);
      setFlipped(false);
    } else {
      if (
        window.confirm(
          "Restart Cards? Click 'cancel' to return to the homepage"
        )
      ) {
        //when user reaches the last card and presses 'ok' go back to first card 
        setCurrentCard(0);
        //make sure front is showing
        setFlipped(false);
      } else {
        //if cancel is pressed go to home
        history.push("/");
      }
    }
  };

  function flipHandler() {
    setFlipped(!flipped);
  }

  //removed if statement here and added conditional further down in JSX render
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
      <h1> Study: {deck.name}</h1>
      {deck.cards.length >= 3 ? (
        <StudyCard
          flipHandler={flipHandler}
          flipped={flipped}
          cards={deck.cards}
          nextCard={nextCard}
          currentCard={currentCard}
          index={currentCard + 1}
        />
      ) : (
        <StudyNotEnough deck={deck} />
      )}
    </>
  );
}

export default Study;
