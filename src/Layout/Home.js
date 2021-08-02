import DeckList from "./DeckList";
import { listDecks } from "../utils/api";
import { useEffect, useState } from "react";

function Home() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    async function getDecks() {
      try {
        const deckData = await listDecks(abortController.signal);
        console.log(deckData);
        setDecks(deckData);
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

  return (
    <>
      <button type="button" name="create" className="btn btn-secondary my-2">
        <span className="oi oi-plus"></span>
        {" "}Create Deck
      </button>
      <DeckList decks={decks} />
    </>
  );
}

export default Home;
