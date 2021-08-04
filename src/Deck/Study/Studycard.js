function StudyCard({
  flipped,
  flipHandler,
  currentCard,
  cards,
  nextCard,
  index
}) {
  console.log("deck",deck); //test
  console.log("current",currentCard); //test

  if (cards.length <= 1) {
    //change to if deck.cards.length <= 1
    return (
      <div className="card p-3">
        <div>
          <h3 className="card-title">
            Card {index} of {cards.length}
          </h3>
          <p className="card-text mb-3">
            {!flipped ? cards[currentCard].front : cards[currentCard].back}
          </p>
        </div>
        <div>
          <button
            className="btn btn-secondary mr-2"
            onClick={flipHandler}
            tabIndex="4"
          >
            Flip
          </button>
        </div>
      </div>
    );
  } else {
      (console.log(">>>",cards, currentCard))
    return (
      <div className="card p-3">
        <div>
          <h3 className="card-title">
            Card {index} of {cards.length}
          </h3>
          <p className="card-text mb-3">
          {!flipped ? cards[currentCard].front : cards[currentCard].back}
          </p>
        </div>
        <div>
          <button
            className="btn btn-secondary mr-2"
            onClick={flipHandler}
            tabIndex="4"
          >
            Flip
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            tabIndex="3"
            onClick={nextCard}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default StudyCard;
