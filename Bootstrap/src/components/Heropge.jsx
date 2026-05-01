import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Website() {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">WebWorks</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="home" className="hero-section text-center text-white d-flex align-items-center">
        <Container>
          <h1 className="display-4 fw-bold">Welcome to WebWorks</h1>
          <p className="lead">Build modern UI with React & Bootstrap</p>
          <Button variant="primary" size="lg">Get Started</Button>
        </Container>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Our Services</h2>
          <Row>
            {[1, 2, 3].map((item) => (
              <Col md={4} key={item} className="mb-4">
                <Card className="service-card h-100">
                  <Card.Body>
                    <Card.Title>Service {item}</Card.Title>
                    <Card.Text>
                      Your thaught our visual.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2>About Us</h2>
              <p>
                We create beautiful and responsive web applications using modern technologies.
              </p>
            </Col>
            <Col md={6}>
              <img src=" https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="about" className="img-fluid rounded" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Portfolio</h2>
          <Row>
            {[1, 2, 3, 4].map((item) => (
              <Col md={3} key={item} className="mb-4">
                <Card className="portfolio-card">
                  <Card.Img variant="top" src=" https://images.unsplash.com/photo-1545235617-9465d2a55698" />
                  <Card.Body>
                    <Card.Title>Project {item}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-dark text-white py-5">
        <Container className="text-center">
          <h2>Contact Us</h2>
          <p>Email: example@email.com</p>
        </Container>
      </section>

      {/* footer */}
             <footer className="footer-section text-white pt-4 pb-2">
        <Container>
          <Row>
            <Col md={4} className="mb-3">
              <h5>MyWebsite</h5>
              <p>Building modern and responsive websites using React & Bootstrap.</p>
            </Col>

            <Col md={4} className="mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
              </ul>
            </Col>

            <Col md={4} className="mb-3">
              <h5>Follow Us</h5>
              <div className="social-icons">
                <a href="#">Facebook</a><br />
                <a href="#">Instagram</a><br />
                <a href="#">LinkedIn</a>
              </div>
            </Col>
          </Row>

          <hr className="bg-light" />

          <p className="text-center small mb-0">
            © {new Date().getFullYear()} MyWebsite. All rights reserved.
          </p>
        </Container>
      </footer>
      
    </div>
  );
}
