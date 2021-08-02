import HomeCard from "./DeckList";

function Home() {
  return (
    <>
    <button type="button" name="create" className="btn btn-secondary my-2">
        + Create Deck
      </button>
  <HomeCard />
  </>
  );
}

export default Home;
