import React from 'react'
import { Container, Navbar, Nav, Image, Button, Card, Col, Row } from 'react-bootstrap'

function Results({detectedEmotion, name}) {
  return (
    <div className="home">

      {/*  content*/}
      <div className="d-flex justify-content-evenly">
        <div className="align-self-center col-5">
          <h1>How Are You Today? {name}</h1>
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

export default Results
