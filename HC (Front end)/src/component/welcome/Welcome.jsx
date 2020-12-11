import React, { Component } from 'react';
import './welcome.css';
import Carousel from 'react-bootstrap/Carousel';
import images2 from './images2.jpg';
import images3 from './images3.png';



function Welcome() {

  return (
    <div >
     
            
      
      <div>

        <Carousel style={{ position: 'relative' }} fade={true}>

          <Carousel.Item interval={1000}>
            <div className="imag">
              <img
                className="d-block w-100 h-55"
                src={images2}
                alt="First slide"
              />
            </div>

          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className="imag">
              <img
                className="d-block w-100"
                src={images3}
                alt="second slide"
              />
            </div>

          </Carousel.Item>
         
        </Carousel>
        <div className="p">
          <p>Online Doctor appointment is a smart web application, this provides a registration and login for both doctors and patients. Doctors can register by giving his necessary details like timings, fee, category, etc. After successful registration, the doctor can log in by giving username and password. The doctor can view the booking request by patients and if he accepts the patient requests the status will be shown as booking confirmed to the patient. He can also view the feedback given by the patient. The patients must be registered and log in to book a doctor basing the category and the type of problem patient is facing and the location. For millions of people, Health Care is the trusted and familiar home where they know they’ll find a healing touch. It connects them with everything they need to take good care of themselves and their family - assessing health issues, finding the right doctor, booking diagnostic tests, obtaining medicines, storing health records or learning new ways to live healthier. </p>
        </div>
        
      </div>
    </div>

  );

}
export default Welcome;