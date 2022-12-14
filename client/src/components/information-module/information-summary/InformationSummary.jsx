import Modal from "react-bootstrap/Modal";
import InformationGuest from "./InformationGuest";
import InformationBedrooms from "./InformationBedrooms";
import InformationBeds from "./InformationBeds";
import InformationBath from "./InformationBath";
import { useContext } from "react";
import { appContext } from "../../../App";
import { Link } from "react-scroll";

const InformationSummary = () => {
  const { hostData } = useContext(appContext);
  return (
    <div>
      <Modal.Dialog>
        <Modal.Body>
          <div>
            <span style={{ fontSize: "22px", fontFamily: "Circular-Md" }}>
              Entire cabin hosted by {hostData.name}
            </span>

            <div className="informationSummary">
              <InformationGuest />
              <InformationBedrooms />
              <InformationBeds />
              <InformationBath />
              <Link to="host-module" spy={true} smooth={true}>
                <img
                  className="airbnb-pfp"
                  style={{ cursor: "pointer" }}
                  src="./host-images/airbnb_host.png"
                ></img>
              </Link>
            </div>
          </div>
          <div className="informationSummaryContainerRows">
            <div className="informationSummaryContainerProfilePic"></div>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default InformationSummary;
