import Modal from "react-bootstrap/Modal";
import "../Dashboard/dash.css";
import Pdfviewer from "../pdfviewer/pdfviewer";
import { useState } from "react";


function Example({ show, setShow, docUrl }) {
    const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
    const [fullscreen, setFullscreen] = useState(true);
  



    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }
  
    return (
      <>
        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Preview :</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="pdf-viewer">
              <Pdfviewer url={docUrl} />
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }

  export default Example;
  