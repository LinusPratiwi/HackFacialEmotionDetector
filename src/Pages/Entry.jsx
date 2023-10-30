import React, { useState } from 'react'
import './Home.css'
import { Container, Navbar, Nav, Image, Button, Card, InputGroup, Form } from 'react-bootstrap'
import { Router } from 'react-router-dom'

function Entry() {
  const [name, setName] = useState('')
  const handleNextClick = () => {
    localStorage.setItem('name', name)
    
  }
  return (
    <div className="row h-100 ms-5">
      <div className="col-5 h-100 bls-left-radius d-flex">
        <div className="align-self-center ms-5">
          <h1 className="bls-title-medium mb-3">Welcome to </h1>
          <h1 className="bls-title-medium mb-5">
            <img src="bliss_wl.png" className="d-inline-block align-top bls-image-span"></img>{' '}
            Official Website!
          </h1>
          <h5 className="mb-4">Embrace Positivity, Find Peace, and Reconnect with Bliss</h5>
        </div>
      </div>
      <div className="col-6 h-100 bls-right-radius d-flex">
        <div className="align-self-center px-4">
          <div id="detail" className="mt-3">
            <div className="mb-3 bls-field-info">
              <svg
                className="me-2 mb-1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="15"
                height="15"
                viewBox="0 0 50 50"
              >
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
              </svg>
              <span className="fw-bold">Fields marked with * are mandatory</span>
            </div>
          </div>
          <Card>
            <Card.Header className="fw-bold">Personal Information</Card.Header>
            <Card.Body>
              <label>
                Full Name <span className="text-danger">*</span>
              </label>
              <InputGroup className="my-3 required">
                <Form.Control
                  value={name}
                  label="name"
                  placeholder="Enter Your Name"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={(e) => setName(e.target.value)}
                />
              </InputGroup>
              <div className="d-flex gap-2">
                <Form.Check // prettier-ignore
                  type="checkbox"
                />
                <p>
                  These terms and conditions are an agreement between you and Bliss. By using our
                  website, you agree to these terms and conditions. If you have any questions about
                  these terms and conditions, please contact us.
                </p>
              </div>
              <Button variant="primary" onClick={handleNextClick}>
                <a href="/chat" className="text-white text-decoration-none">
                  Next
                </a>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Entry
