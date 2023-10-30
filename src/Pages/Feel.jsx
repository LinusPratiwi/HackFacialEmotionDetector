import React, { useState } from 'react'
import NextComponent from './NextComponent'
import PhotoCapture from './PhotoCapture'
import './Feel.css'
// import { Form } from 'react-bootstrap'
import { Form, Nav, Image, Card } from 'react-bootstrap'

function Feel() {
  const [name, setName] = useState('')
  const [showNext, setShowNext] = useState(false)
  const _name = localStorage.getItem('name')
  const _imageSrc = localStorage.getItem('imageSrc')
  const _emotion = localStorage.getItem('emotion')

  console.log(_name, 'daf', showNext)
  const handleNextClick = () => {
    if (!_name) localStorage.setItem('name', name)
    setShowNext(true)
  }

  return (
    // <div>
    //   <div className="container center-card">
    //     {showNext || _name ? (
    //       <NextComponent name={name} />
    //     ) : (
    //       <div className="container center-card">
    //         <div className="row">
    //           <div className="mb-3">
    //             <h2 className="text-center">Let Us Know More About You</h2>
    //             {/* <h3 className="text-center">Tell Us More About You</h3> */}
    //             <h2 className="text-center">...</h2>
    //           </div>
    //           <div className="col-12 d-flex align-items-center justify-content-center">
    //             <div
    //               className="card"
    //               style={{
    //                 width: '30vw',
    //                 boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    //               }}
    //             >
    //               <div className="card-body">
    //                 <h5 className="card-title"></h5>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     )}
    //   </div>

    // </div>
    <div className="row h-100 ms-5">
      <div className="col-5 h-100 bls-left-radius d-flex">
        <div className="align-self-center mx-5">
          <h1 className="bls-title-medium mb-3">Hi {_name}, </h1>

          <h5 className="mb-4">Let's see how well you're doing today ...</h5>
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
          {_imageSrc && _emotion && (
            <div className="">
              <div class="container">
                <h1 class="text-center">Card component with Navigation</h1>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="card text-center my-4">
                      <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs">
                          <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#tab1">
                              Tab 1
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#tab2">
                              Tab 2
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#tab3">
                              Tab 3
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div class="card-body tab-content">
                        <div class="tab-pane fade show active" id="tab1">
                          <h4 class="card-title">Title Tab 1</h4>
                          <p class="card-text">We have some propose for your better life</p>
                          <a href="#" class="btn btn-primary">
                            Read More 1
                          </a>
                        </div>
                        <div class="tab-pane fade" id="tab2">
                          <h4 class="card-title">Tab 2 Title</h4>
                          <p class="card-text">Don't give up 'cos you have friends </p>
                          <a href="#" class="btn btn-danger">
                            Read More 2
                          </a>
                        </div>
                        <div class="tab-pane fade" id="tab3">
                          <h4 class="card-title">Tab 3 Title</h4>
                          <p class="card-text">Never say Never. Dont't warry, be happy</p>
                          <a href="#" class="btn btn-success">
                            Read More 3
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <Image src={_imageSrc} className="w-75 rounded-3 bls-shadow-image" /> */}
              <h2>You look {_emotion}</h2>

            </div>
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
