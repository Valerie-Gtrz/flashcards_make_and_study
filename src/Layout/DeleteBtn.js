import { deleteDeck } from "../utils/api/index";
import { useHistory } from "react-router-dom";

function DeleteBtn() {
  const history = useHistory();
  // export const deleteCard = ({ mapped cards in deck }) => {
  //   const { id } = useParams();
  //   const history = useHistory();
  //   const cards = mapped cards in deck.find((card) => card.id === {id}));
  // const handleDelete = async (id) => {
  //   const result = window.confirm("Are you sure you want to delete this card?");
  //   if (result) {
  //     await deletePost(id);
  //     history.push('/')// TODO: After the post is deleted, send the user to the home page.
  //   }
  // };

  async function deleteHandler({ target }) {
    const id = target.id;
    const abortController = new AbortController();
    if (
      window.confirm("Delete this deck?\n\nYou will not be able to recover it.")
    ) {
      try {
        await deleteDeck(id, abortController.signal);
        history.push("/");
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("ViewDeck Delete Aborted");
        } else {
          console.log(error);
        }
      }
      return () => abortController.abort();
    }
  }

  return (
    <div className="ml-auto">
      <button
        type="button"
        name="delete"
        className="btn btn-danger"
        onClick={deleteHandler}
      >
        <span className="oi oi-trash"></span>
      </button>
    </div>
  );
}

export default DeleteBtn;
