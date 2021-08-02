import StudyBtn from "./Study/StudyBtn";
import ViewBtn from "./ViewBtn";
import DeleteBtn from "./DeleteBtn";
import { useEffect, useState } from "react";
import { listDecks } from "../utils/api";
import { Link } from 'react-router-dom';

function DeckList() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    async function getDecks() {
      try {
        const deckData = await listDecks(abortController.signal);
        console.log(deckData);
        setDecks(deckData);
        console.log(decks);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log(error.message);
        } else {
          throw error;
        }
      }
    }
    getDecks();
  }, [setDecks]);

  const returnDecks = decks.map(({ id, name, description, cards }) => {
    return (
      <div>
        <div className="card">
          <div className="card-body py-3">
            <div className="d-flex">
              <h2 className="card-title">{name}</h2>{" "}
              <p className="ml-auto">{cards.length} cards</p>{" "}
            </div>
            <p className="card-text">{description}</p>
            <div className="d-flex flex-row">
              <ViewBtn />
              <div>
      <Link to={`/decks/${id}`}>
      <button 
      type="button" 
      name="study" 
      className="btn btn-primary"
      ><span class="oi oi-book"></span>{" "}
        Study
      </button>
      </Link>
    </div>
              <DeleteBtn />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return returnDecks;
}

export default DeckList;
