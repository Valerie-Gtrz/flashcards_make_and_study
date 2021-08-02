import StudyBtn from "./Study/StudyBtn";
import ViewBtn from "./ViewBtn";
import DeleteBtn from "./DeleteBtn";

function HomeCard(){
    return(
        <div>
        <button type="button" name="create" className="btn btn-secondary mb-2">
          &#43; Create Deck
        </button>
        <div className="card">
          <div className="card-body py-3">
            <div className="d-flex">
              <h2 className="card-title">Deck Title</h2>{" "}
              <p className="ml-auto"># cards</p>{" "}
            </div>
            <p className="card-text">some text here</p>
            <div className="d-flex flex-row">
              <ViewBtn />
              <StudyBtn />
              <DeleteBtn />
            </div>
          </div>
        </div>
      </div>
    );
}

export default HomeCard;