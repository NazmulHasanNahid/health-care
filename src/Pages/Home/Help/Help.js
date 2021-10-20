import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Help = () => {
    return (
        <div className="p-4">
            <Row xs={1} md={2} className="g-4 p-4 ">

                <Col >
                    <h1 className='text-warning'>How can we Help you?</h1>
                    <p>We Have a lot Of Services specially for covid patient , and many more if you are feelling Sick just Take the mobile in hand and contact with our  Consultant  we are providing 24hours online services , amd we have emergency Ambulence service just call and we provide you ambulance service  <br/> <br/>  <span className="text-warning fw-bold "> Thank You</span>  </p>

                </Col>
                <Col>
                    <img className='img-fluid' src="https://media.istockphoto.com/photos/sick-woman-laying-on-sofa-blowing-nose-picture-id171631871?k=20&m=171631871&s=612x612&w=0&h=LR1Ng20JtBokGI6tMwQxtgcmhh_FL9u9K51F9AokV20=" />
                </Col>

            </Row>
        </div>
    );
};

export default Help;