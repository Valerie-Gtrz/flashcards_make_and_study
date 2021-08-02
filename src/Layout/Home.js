import DeckList from "./DeckList";

function Home() {
  return (
    <>
    <button type="button" name="create" className="btn btn-secondary my-2"><span class="oi oi-plus"></span>
        {" "}Create Deck
      </button>
  <DeckList />
  </>
  );
}

export default Home;
