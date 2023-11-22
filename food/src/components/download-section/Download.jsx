import React from 'react'
import './download.css'
import appImg from "../../assets/images/app.png";
import { Container, Row, Col } from "reactstrap"

const Download = () => {
  return (
    <section id='contect'>
        <Container className="app__container">
            <Row>
                <Col lg="6" md="6">
                    <div className="app__img">
                       <img src={appImg} alt="" />
                    </div>
                </Col>
                <Col lg="6" md="6">
                    <div className="app__content">
                        <h5>Download our app</h5>
                        <h2 className='mb-4'>
                            Never Feel Hungry! Download Our App Order Delicious food
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, consequatur at cupiditate voluptatum provident tenetur optio pariatur beatae. Mollitia, exercitationem.
                        </p>
                        <div className="app__btns d-flex align-items-center gap-5 mt-4">
                            <button className="btn__apple d-flex align-items-center gap-3">
                            <i class="ri-apple-line"></i><a href="#">Apple Store</a>
                            </button>

                            <button className="btn__google d-flex align-items-center gap-3">
                            <i class="ri-google-play-line"></i><a href="#">Google Play</a>
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Download
