import React, { useState } from 'react'
import NextComponent from './NextComponent'
import PhotoCapture from '../Components/PhotoCapture'
import './Feel.css'
import { Tab, Tabs, Image, Card } from 'react-bootstrap'

function Feel() {
  const [name, setName] = useState('')
  const [showNext, setShowNext] = useState(false)
  const _name = localStorage.getItem('name')
  const _imageSrc = localStorage.getItem('imageSrc')
  const _emotion = localStorage.getItem('emotion')

  const handleNextClick = () => {
    if (!_name) localStorage.setItem('name', name)
    setShowNext(true)
  }

  return (
    <div className="row h-100 ms-5">
      <div className="col-5 h-100 bls-left-radius d-flex">
        <div className="align-self-center mx-5">
          <h1 className="bls-title-medium mb-3">Hi {_name} </h1>

          <h5 className="mb-4">Let's see how well you're doing today ! </h5>
          {!_imageSrc && (
            <Card>
              {/* <Card.Img variant="bottom" src="instructions.png" className="w-75" /> */}
              <Card.Header>Instructions</Card.Header>
              <Card.Body>
                <div className="d-flex justify-content-center">
                  <Image src="instructions.png" className="w-75" />
                </div>
              </Card.Body>
            </Card>
          )}
          {_emotion && (
            <Tabs defaultActiveKey="tab1" id="tabbed-cards">
              <Tab eventKey="tab1" title="Book">
                <Card>
                  <Card.Body>
                    <Card.Text className="text-center">
                      <span>The Body Keeps The Score, Bessel Van Der Kolk</span>
                      <iframe
                        className="mt-3"
                        type="text/html"
                        sandbox="allow-scripts allow-same-origin allow-popups"
                        width="212"
                        height="362"
                        frameborder="0"
                        allowfullscreen
                        src="https://read.amazon.com/kp/card?asin=B00G3L1C2K&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_3NK7BPD3ST7YXZJK4WG0"
                      ></iframe>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Tab>
              <Tab eventKey="tab2" title="Podcast">
                <Card>
                  <Card.Body>
                    <Card.Text className="text-center">
                      <span>Let's Talk About Mental Health, Jeremy Godwin</span>
                      <iframe
                        className="mt-3"
                        src="https://open.spotify.com/embed/show/2kH3ec1ljTia7VmwYsm8Xt?utm_source=generator&theme=0"
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                      ></iframe>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Tab>
            </Tabs>
          )}
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
            <Card.Header className="fw-bold">Capture Face</Card.Header>
            <Card.Body>
              <PhotoCapture />
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Feel
