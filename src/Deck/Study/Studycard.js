function StudyCard({ flipped, cards, flipHandler }) {

    
  if (!flipped) { //change to if deck.cards.length > 1
    return (
        <div className="card p-3">
            <div>
              <h3 className="card-title">Card # of #</h3>
              <p className="card-text">!flipped ? card.front : card.back</p>
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
    return (
        <div className="card p-3">
            <div>
              <h3 className="card-title">Card # of #</h3>
              <p className="card-text">!flipped ? card.front : card.back</p>
            </div>
            <div>
              <button
                className="btn btn-secondary mr-2"
                onClick={flipHandler}
                tabIndex="4"
              >
                Flip
              </button>
              <button type="submit" className="btn btn-primary" tabIndex="3">
                Next
              </button>
            </div>
        </div>
    );
  }
}

export default StudyCard;
