import ViewBtn from "./ViewBtn";
import DeleteBtn from "./DeleteBtn";
import { Link } from "react-router-dom";

function DeckList({decks}) {
  
 const returnDecks = decks.map(
    ({ id, name, description, cards }, { index }) => {

      return (
        <div>
          <div className="card">
            <div className="card-body py-3">
              <div className="d-flex">
                <h2 className="card-title" key={index}>
                  {name}
                </h2>{" "}
                <p className="ml-auto" key={index}>
                  {cards.length} cards
                </p>{" "}
              </div>
              <p className="card-text" key={index}>
                {description}
              </p>
              <div className="d-flex flex-row">
                <ViewBtn />
                <div>
                  <Link to={`/deck/${id}/cards`}>
                    <button
                      type="button"
                      name="study"
                      className="btn btn-primary"
                    >
                      <span className="oi oi-book"></span>
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
    }
  );

  return returnDecks;
}

export default DeckList;
