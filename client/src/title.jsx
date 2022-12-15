import TitleStars from "./titleStars";
import TitleReviews from "./titleReviews";
import TitleLocation from "./titleLocation";
import ShareButton from "./shareButton";
import SaveButton from "./saveButton";
import Modal from "react-bootstrap/Modal";

const Title = () => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Body>
          <div className="titleContainerTitle">
            <h2>2 Bed house in quiet neighborhood </h2>
          </div>
          <div className="titleContainerRows">
            <TitleStars />
            <TitleReviews />
            <TitleLocation />
            <div className="titleContainerButtons">
              <ShareButton />
              <SaveButton />
            </div>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default Title;
