function StudyCard({
  flipped,
  flipHandler,
  currentCard,
  cards,
  nextCard,
  index,
}) {
//   the user should be able to click next regardless of whether they have flipped or not. what if they dont want to study that card right now??
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
          {flipped && (
            <button
              type="submit"
              className="btn btn-primary"
              tabIndex="3"
              onClick={nextCard}
            >
              Next
            </button>
          )}
        </div>
      </div>
    );
 // }
  return;
}

export default StudyCard;
