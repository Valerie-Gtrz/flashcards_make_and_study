function StudyCard({
  flipped,
  flipHandler,
  currentCard,
  cards,
  nextCard,
  index,
}) {

  /*User Story: As a frequent user, I would like to be able to 
  click "next" regardless of whether I have clicked "flip" or not. 
  If I don't want to study that card at the time I would still 
  like to be able to move on.*/

  return (
    <div className="card p-3">
      <div>
        <h3 className="card-title">
          Card {index} of {cards.length}
        </h3>
        {/*if flip button is unclicked, show card front text, if it is clicked show card back*/}
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
        {/*if user clicks flip, render the next button*/}
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
}

export default StudyCard;
