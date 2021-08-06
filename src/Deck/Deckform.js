import React, { useState } from "react";

/*this is the form to be shared by deck edit and create*/

function DeckForm({
  onSubmit,
  onCancel,
  initialState = { name: "", description: "" },
}) {
  const [deck, setDeck] = useState(initialState);

  function changeHandler({ target: { name, value } }) {
    setDeck((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }


  function submitHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    onSubmit(deck);
  }

  return (
    <form onSubmit={submitHandler} className="deck-edit">
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={deck.name}
            required={true}
            placeholder="Deck Name"
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            rows="4"
            required={true}
            placeholder="Brief description of the deck"
            value={deck.description}
            onChange={changeHandler}
          />
        </div>
        <button
          type="button"
          className="btn btn-secondary mr-2"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </fieldset>
    </form>
  );
}
export default DeckForm;
