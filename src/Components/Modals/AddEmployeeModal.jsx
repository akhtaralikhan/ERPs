import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function EmployeeModal({ showModal, setShowModal }) {
  const toggle = () => setShowModal(!showModal);

  return (
    <div>
      <Modal isOpen={showModal} toggle={toggle} size="xl" centered>
        <ModalHeader toggle={toggle}>Add Employee</ModalHeader>
        <ModalBody>
          <form>
            <div className="row">
              {/* Left Column */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Employee Id</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Date Of Birth</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Designation</label>
                  <select className="form-control">
                    <option>Project Manager</option>
                    <option>Software Engineer</option>
                    <option>Head of Engineering</option>
                    <option>Software Architect</option>
                    <option>QA Engineer</option>
                    <option>DevOps Engineer</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Department</label>
                  <select className="form-control">
                    <option>IT</option>
                    <option>HR</option>
                    <option>Finance</option>
                    <option>Procurement</option>
                    <option>Legal</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Sub Department</label>
                  <select className="form-control">
                    <option>QA</option>
                    <option>Software Development</option>
                    <option>Operations</option>
                    <option>PM</option>
                    <option>Recruitment</option>
                  </select>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Joining Date</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Leaving Date</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Save
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EmployeeModal;

