import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/esm/CloseButton";
import WorkoutForm from "./WorkoutForm";

function AddWorkout() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="add-workout">
      <Button
        className="add-workout-button"
        variant="outline-danger"
        onClick={handleShow}
      >
        Add Workout
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="workout-modal-header">
          <ModalTitle>Add Workout</ModalTitle>
          <CloseButton variant="white" onClick={handleClose}></CloseButton>
        </Modal.Header>
        <ModalBody className="workout-modal-body">
          <WorkoutForm />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddWorkout;
