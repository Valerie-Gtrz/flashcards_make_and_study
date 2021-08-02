import { readDeck } from "../../utils/api";
import { Link, useParams } from 'react-router-dom';



function StudyScreen() {
  const { deckId } = useParams();
  console.log(deckId)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-2">
      
        <a className="navbar-brand" href="/">
          <span className="text-primary">
          <span class="oi oi-home"></span>
           {" "}
            Home <span className="text-muted">/</span> Deck Name{" "}
            <span className="text-muted">/</span>{" "}
            <span className="text-muted">Study</span>
          </span>
        </a>
      </nav>

      <h1 className="mt-3">Study:</h1>
      <div className="card">
        <div className="card-body py-3">
          <h2 className="card-title">Card # of #</h2>
          <p className="cardText">gsjsfkg</p>
          <div>
            <button className="btn btn-secondary">Flip</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudyScreen;
