import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCog, faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Form,
  Button,
  ButtonGroup,
  Breadcrumb,
  InputGroup,
  Dropdown,
  Modal,
} from "@themesberg/react-bootstrap";
import {
  faCashRegister,
  faChartLine,
  faCloudUploadAlt,
  faPlus,
  faRocket,
  faTasks,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";

import { TransactionsTable } from "../../components/Tables";
import { SOLUTION_NAME } from "../../data/Constants";
import { Link } from "react-router-dom";
import { Routes } from "../../routes";
import { PerfomanceContext } from "../../data/PerformanceContext";

export default function TestPlans() {
  const [isNewPlanModalOpen, setIsNewPlanModalOpen] = React.useState(false);
  const [isPlanPage, setIsPlanPage] = React.useState(true);
  const { setPage } = useContext(PerfomanceContext);

  const onClickNewPlan = () => {
    setIsNewPlanModalOpen(!isNewPlanModalOpen);
    setIsPlanPage(!isPlanPage);
  };

  const onEditTestPlan = (TestPlanId) => {
    // Code here
    setPage(2);
  };
  return (
    <>
      {isPlanPage && (
        <div>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
            <div className="d-block mb-4 mb-md-0">
              <Breadcrumb
                className="d-none d-md-inline-block"
                listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}
              >
                <Breadcrumb.Item>
                  <FontAwesomeIcon icon={faHome} />
                </Breadcrumb.Item>
                <Breadcrumb.Item>{SOLUTION_NAME}</Breadcrumb.Item>
                <Breadcrumb.Item active>Perfomance</Breadcrumb.Item>
              </Breadcrumb>
              <h4>Perfomance</h4>
              <div className="" style={{ width: "100%" }}>
                <p className="mb-0">Perfomance Testing and Monitoring Dashboard</p>
                <Dropdown className="btn-toolbar mt-3">
                  <Dropdown.Toggle as={Button} variant="primary" size="sm" className="me-2">
                    <FontAwesomeIcon icon={faPlus} className="me-2" />
                    New Test plan
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
                    <Dropdown.Item className="fw-bold" onClick={onClickNewPlan}>
                      <FontAwesomeIcon icon={faTasks} className="me-2" /> New Test Plan
                    </Dropdown.Item>
                    <Dropdown.Item className="fw-bold">
                      <FontAwesomeIcon icon={faTasks} className="me-2" /> New Request
                    </Dropdown.Item>
                    {/* <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" /> Upload Files
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faUserShield} className="me-2" /> Preview Security
                </Dropdown.Item> */}

                    <Dropdown.Divider />

                    <Dropdown.Item className="fw-bold">
                      <FontAwesomeIcon icon={faRocket} className="text-danger me-2" /> View Dashboard
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
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

          <div class="card">
            <h4 class="card-header">Blogs Perfomance Pan</h4>
            <div class="card-body justify-content-between d-flex">
              <div>
                <span></span>
                {/* <h5 class="card-title">Special title treatment</h5> */}
                <ul>
                  <li>
                    <b>Created: </b>26 january 2024
                  </li>
                  <li>
                    <b>Last modified: </b>26 january 2024
                  </li>
                  <li>
                    <b>Last Run: </b>26 january 2024
                  </li>
                </ul>
                <p class="card-text">Comments come here</p>
              </div>
              <div class="justify-content-between d-grid ">
                <Button variant="info" className="m-1" onClick={() => onEditTestPlan("2")}>
                  Edit Plan
                </Button>

                <Button variant="tertiary" className="m-1">
                  Run Test
                </Button>

                <Button variant="danger" className="m-1">
                  Delete Test
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isNewPlanModalOpen && (
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Test Plan name:</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Comments</Form.Label>
                <Form.Control as="textarea" rows="4" placeholder="Enter your message..." />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" on onClick={onClickNewPlan}>
              Close
            </Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      )}
    </>
  );
}
