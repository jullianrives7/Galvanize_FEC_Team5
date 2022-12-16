import Modal from "react-bootstrap/Modal";
import InformationGuest from "./informationGuest";
import InformationBedrooms from "./informationBedrooms";
import InformationBeds from "./informationBeds";
import InformationBath from "./informationBath";

const InformationSummary = () => {

  return (
    <div>
      <Modal.Dialog>
        <Modal.Body>
          <div >
            <h2>Entire home hosted by Mike</h2>
            <div className="informationSummary">
            <InformationGuest />
            <InformationBedrooms />
            <InformationBeds />
            <InformationBath />
            </div>

          </div>
          <div className="informationSummaryContainerRows">

            <div className="informationSummaryContainerProfilePic">
            </div>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default InformationSummary;