import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCog, faHome, faPlay, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Form,
  Button,
  ButtonGroup,
  Breadcrumb,
  Modal,
  InputGroup,
  Dropdown,
} from "@themesberg/react-bootstrap";

import { TransactionsTable } from "../../components/Tables";
import { AddSamplerForm } from "../../components/Forms";

export default function TestPlanDetails() {
  const [isAddTestModal, setIsAddTestModal] = React.useState(false);
  const [isSamplerModel, setIsSamplerModel] = React.useState(false);

  const handleClose = () => setIsSamplerModel(!isSamplerModel);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb
            className="d-none d-md-inline-block"
            listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}
          >
            <Breadcrumb.Item>
              <FontAwesomeIcon icon={faHome} />
            </Breadcrumb.Item>
            <Breadcrumb.Item>Volt</Breadcrumb.Item>
            <Breadcrumb.Item active>Transactions</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Transactions</h4>
          <p className="mb-0">Your web analytics dashboard template.</p>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <ButtonGroup>
            <Button variant="outline-primary" size="sm">
              Share
            </Button>
            <Button variant="outline-primary" size="sm">
              Export
            </Button>
          </ButtonGroup>
        </div>
      </div>

      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" />
            </InputGroup>
          </Col>
          <Col xs={4} md={2} xl={2} className="ps-md-0 d-lg-flex">
            <Button variant="success" className="m-1">
              <FontAwesomeIcon icon={faPlay} />
              Run
            </Button>
            <Button variant="secondary" className="m-1" onClick={() => setIsSamplerModel(true)}>
              <FontAwesomeIcon icon={faPlus} />
              Sampler
            </Button>
          </Col>
        </Row>
      </div>

      <TransactionsTable />

      <Modal as={Modal.Dialog} centered show={isSamplerModel} onHide={() => {}}>
        <Modal.Header>
          <Modal.Title className="h6">Terms of Service</Modal.Title>
          <Button variant="close" aria-label="Close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <AddSamplerForm />
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <Button variant="link" className="text-gray ms-auto" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="Tertiary" className="text-gray ms-auto" onClick={handleClose}>
            Save All
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
