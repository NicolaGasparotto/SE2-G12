import React, { useState } from "react";
import { Container, Row, Col, Table, ListGroup, Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "../style.css";

function DefaultLayout(props) {
  const [isClicked1, setIsClicked1] = useState(true);
  const [isClicked2, setIsClicked2] = useState(false);

  const handleLink1Click = () => {
    setIsClicked1(true);
    setIsClicked2(false); // Imposta l'altro link su false
  };

  const handleLink2Click = () => {
    setIsClicked2(true);
    setIsClicked1(false); // Imposta l'altro link su false
  };

  const link1Style = {
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: "black",
    backgroundColor: isClicked1 ? "whitesmoke" : "white",
  };

  const link2Style = {
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: "black",
    backgroundColor: isClicked2 ? "whitesmoke" : "white",
  };

  return (
    <>
      <Container fluid>
        <Row className="vh-100 justify-content-center">
          {/* Sidebar */}
          <Col md={3} style={{ backgroundColor: "white" }}>
            <div style={{ marginTop: "2rem" }}>
              <h2>Admin Panel</h2>
              <ListGroup defaultActiveKey="#link1">
                <Link to="/" style={link1Style} onClick={handleLink1Click}>
                  {" "}
                  Service Types
                </Link>
                <Link
                  to="/counters"
                  style={link2Style}
                  onClick={handleLink2Click}
                >
                  {" "}
                  Counters{" "}
                </Link>
              </ListGroup>
            </div>
          </Col>

          {/* Contenuto principale */}
          <Col md={9} style={{ backgroundColor: "whitesmoke" }}>
            <div style={{ padding: "2rem" }}>
              <Outlet />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

function MainLayout() {
  const services = [
    { id: 1, serviceName: "Servizio A", counters: [1, 3, 5] },
    { id: 2, serviceName: "Servizio B", counters: [2, 4] },
    { id: 3, serviceName: "Servizio C", counters: [1, 5] },
    { id: 4, serviceName: "Servizio D", counters: [3] },
    { id: 5, serviceName: "Servizio E", counters: [1, 2, 4] },
  ];

  return (
    <>
      <h2 className="mb-2">Service Overview</h2>
      <div className="mb-5">
        <Button className="createButton"> Create </Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Service Name</th>
            <th>Counters</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.serviceName}</td>
              <td>{service.counters.join(", ")}</td>
              <td>
                <Button className="editButton">Edit</Button>
              </td>
              <td>
                <Button className="deleteButton">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function CountersOverview() {
  const counters = [
    { id: 1, counterName: "Counter A", services: [1, 3, 5] },
    { id: 2, counterName: "Counter B", services: [2, 4] },
    { id: 3, counterName: "Counter C", services: [1, 5] },
    { id: 4, counterName: "Counter D", services: [3] },
    { id: 5, counterName: "Counter E", services: [1, 2, 4] },
  ];

  return (
    <>
      <h2 className="mb-2">Counter Overview</h2>
      <div className="mb-5">
        <Button className="createButton"> Create </Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Counter Name</th>
            <th>Services</th>
            
          </tr>
        </thead>
        <tbody>
          {counters.map((counter) => (
            <tr key={counter.id}>
              <td>{counter.id}</td>
              <td>{counter.counterName}</td>
              <td>{counter.services.join(", ")}</td>
              <td>
                <Button className="editButton">Edit</Button>
              </td>
              <td>
                <Button className="deleteButton">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export { DefaultLayout, MainLayout, CountersOverview };
