import React from 'react';
import { Row, Col } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div className="p-2">
            <h1 className="my-2 mt-5 mb-5 text-center text-danger fw-bold">Accidental patients Service!!</h1>
            <Row xs={1} md={2} className="g-4 p-4 ">
                <Col>
                    <img className='img-fluid' src="https://media.istockphoto.com/vectors/accident-safety-emergency-transit-vector-id917527910?k=20&m=917527910&s=612x612&w=0&h=S8RXTMaOvo3liJrTr8Vn5Vdk73BjpPEuidpphJbeWvY=" />
                </Col>

                <Col >
                    <h1 className='text-warning'>Car Accident is most Dangerous for everyone</h1>
                    <p>We provide you the services that can be help your for recover your injuries and we have emergecncy ambulance service for critial patients , most of the car accident patients are get so much injuries and they need to emergency Treatment </p> <br/>

                    <h1 className='text-warning'>We Have Special Ambulance service</h1>
                    <p>You have to just Login our website and just contact with us we can provide you emergency ambulance service any time any were our service is open 24/7 days so stay safe and stay connected with us , Thank you!!</p>


                </Col>


            </Row>
        </div>
    );
};

export default AboutUs;