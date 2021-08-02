import StudyBtn from "./Study/StudyBtn";
import ViewBtn from "./ViewBtn";
import DeleteBtn from "./DeleteBtn";
import { Link, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { listDecks } from "../utils/api";


//gonna have to map through deck id's { deckId }

function DeckList() {
  const [decks, setDecks] = useState([]);
  const history = useHistory();
  {/**/}
  useEffect(() => {
    const abortController = new AbortController();

    async function getDecks() {
      try{
        const deckData = await listDecks(abortController.signal);
        setDecks(deckData);
      } catch (error) {
        if (error.name ==="AbortError"){
          console.log(error.message)
        } else{
          throw error;
        }
      }
    }
    getDecks();
  },)
  
const returnDecks = decks.map(({ id, name, description, cards}) => {
  return (
    <div>
      <div className="card">
        <div className="card-body py-3">
          <div className="d-flex">
            <h2 className="card-title">Deck Title</h2>{" "}
            <p className="ml-auto"># cards</p>{" "}
          </div>
          <p className="card-text">some text here</p>
          <div className="d-flex flex-row">
            <ViewBtn />
            <StudyBtn />
            <DeleteBtn/>
          </div>
        </div>
      </div>
    </div>
  );
})

return (
  returnDecks
)
}

export default DeckList;
