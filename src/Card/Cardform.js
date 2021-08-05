import React, { useState } from "react";

//this is the form card used in Cardedit and Cardcreate

function CardForm({
  onSubmit,
  onDone,
  initialState,
  doneButtonLabel = "Done",
  saveButtonLabel = "Save",
}) {
  const [card, setCard] = useState(initialState);

  // changeHandler on change set card state to the previous state plus set obj property name as a key and value as the value
  function changeHandler({ target: { name, value } }) {
    setCard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  /*when editing or creating a card, when user presses submit or save 
  set card values of front and back to empty strings*/
  function submitHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    onSubmit({ ...card });
    setCard({ front: "", back: "" });
  }

  return (
    <form onSubmit={submitHandler} className="card-form">
      <fieldset>
        <div className="form-group">
          <label htmlFor="front">Front</label>
          <textarea
            id="front"
            name="front"
            tabIndex="1"
            className="form-control"
            required={true}
            placeholder="Front side of card"
            value={card.front}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="back">Back</label>
          <textarea
            id="back"
            name="back"
            tabIndex="2"
            className="form-control"
            required={true}
            placeholder="Back side of card"
            value={card.back}
            onChange={changeHandler}
          />
        </div>

        <button
          className="btn btn-secondary mr-2"
          onClick={onDone}
          tabIndex="4"
        >
          {doneButtonLabel}
        </button>
        <button type="submit" className="btn btn-primary" tabIndex="3">
          {saveButtonLabel}
        </button>
      </fieldset>
    </form>
  );
}
export default CardForm;
