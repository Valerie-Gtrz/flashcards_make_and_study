import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { readCard, readDeck } from '../../utils/api';

function StudyCard({flip, onDone, changeHandler, submitHandler, doneButtonLabel, saveButtonLabel}){
const [deck, setDeck] = useState({});
const [card, setCard] = useState({}); 

const { cardId, deckId } = useParams();

useEffect(() => {
    readDeck(deckId).then(setDeck);
}, [deckId]);

useEffect(() => {
    readCard(cardId).then(setCard)
  }, [cardId]);

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
          <span>Study</span>{cardId}
        </li>
      </ol>
    </nav>
    <h1>Study: {deck.name}</h1>
  

     <form onSubmit={submitHandler} className="card-form">
            <fieldset>
            <div className="form-group">
                <label htmlFor="front">{!flip ? "Front" : "Back"}</label>
                <textarea
                    id="front"
                    name="study"
                    tabIndex="1"
                    className="form-control"
                    required={true}
                    value={!flip ? card.front : card.back}
                    onClick={!flip}
                />
            </div>
           
            <button
                className="btn btn-secondary mr-2"
                onClick={onDone}
                tabIndex="4"
            >
                Flip
            </button>
            <button type="submit" className="btn btn-primary" tabIndex="3">
                Next
            </button>
            </fieldset>
        </form>

        </>
)
    }

export default StudyCard;