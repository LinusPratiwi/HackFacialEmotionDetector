import React from 'react'
import './Home.css'
import { Container, Navbar, Nav, Image, Button, Card, Col, Row} from 'react-bootstrap'

function Home() {
  return (
    <div className="home">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Bliss</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/chat">Chat With Us</Nav.Link>
            <Nav.Link href="/feedback">Feedback</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/*  content*/}
      <div className="d-flex justify-content-evenly">
        <div className="align-self-center col-5">
          <h1>How Are You Today?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit
            consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. consectetur
            adipisicing elit consectetur adipisicing eli
          </p>
          <Button variant="primary">Check Your Emotion</Button>
        </div>

        <Image src="meditation.png" alt="homepage-image" fluid />
      </div>
      {/* End Content */}
      <Container fluid className="cards-container">
        <div className="d-flex gap-5 justify-content-center p-5">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>Content for Card 1.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>Content for Card 2.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>Content for Card 3.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </Container>
    </div>
  )
}

export default Home
