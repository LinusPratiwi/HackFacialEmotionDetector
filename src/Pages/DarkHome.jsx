import React from 'react'
import './Home.css'
import { Container, Image, Button, Navbar, Nav, Carousel } from 'react-bootstrap'

function DarkHome() {
  return (
    <>
      <div className="dark-mode-home row">
        <div className="col-6 bls-side-desc">
          <h6 className="bls-text-subheadline mb-5">
            {/* Hi <span className="bls-text-subheadline text-decoration-underline">,</span> */}
          </h6>
          <h1 className="bls-title-medium mb-3">Welcome to </h1>
          <h1 className="bls-title-medium mb-5">
            <img src="bliss_wl.png" className="d-inline-block align-top bls-image-span"></img>{' '}
            Official Website!
          </h1>

          <h5 className="text-white mb-4">
            Embrace Positivity, Find Peace, and Reconnect with Bliss
          </h5>
          <Button variant="primary">
            <a href="/entry" className="text-white text-decoration-none">
              More
            </a>
          </Button>
        </div>
        <div className="col-6 mb-4 pe-5">
          <Image src="menu.png" />
          <Carousel id="darkhome-carousel">
            <Carousel.Item>
              <div className="col-12 d-flex justify-content-center mb-4">
                <Image src="emotion.png" className="d-block carousel-images " />
              </div>
              <Carousel.Caption>
                <h1>Emotion</h1>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="col-12 d-flex justify-content-center mb-5">
                <Image src="chatbot.png" className="d-block carousel-images " />
              </div>
              <Carousel.Caption>
                <h1>Chatbot</h1>
                <p className='mx-5'>
                  It engages in conversations with you, asks questions about your well-being, and
                  offers constructive feedback to help you better understand and manage your mental
                  health.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="col-12 d-flex justify-content-center mb-4">
                <Image src="suggestion.png" className="d-block carousel-images " />
              </div>
              <Carousel.Caption>
                <h1>Feedback</h1>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default DarkHome
