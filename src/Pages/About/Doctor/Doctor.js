import React from 'react';
import './Doctor.css'
const Doctor = (props) => {
    const { name, picture, description, email , cost } = props.doctor;
    return (
        <div className="col-md-4 col-12 col-sm-12 py-2  custom-hover">
            <div class="card">
                <img className="img-fluid imgStayle  custom-height" src={picture} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h4 class="card-title text-info">{name}</h4>
                    <p class="card-text text-success">{description}</p>
                    <p class="card-text text-success">Contact: {email}</p>
                    <p class="card-text text-success">Apoitment cost :$ {cost}</p>
                   
                    
                </div>
            </div>
        </div>
    );
};

export default Doctor;