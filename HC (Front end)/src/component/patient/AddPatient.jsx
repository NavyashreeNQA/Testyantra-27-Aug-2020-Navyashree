// // const axios = require('axios');

// // async function makePostRequest() {

// //     params = {
// //         id: 6,
// //         first_name: 'Fred',
// //         last_name: 'Blair',
// //         email: 'freddyb34@gmail.com'
// //       }

// //     let res = await axios.post('http://localhost:3000/users/', params);

// //     console.log(res.data);
// // }

// // makePostRequest();

// import React, { Component } from 'react'; 
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import NavItem from 'react-bootstrap/NavItem';
// import './patient.css';
// class AddPatient extends Component{
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     isClicked: true,
//   //     name: '',
//   //     age:'',
//   //     ph: '',
//   //     email:'',
//   //     symp: '',
//   //     city:'',
//   //     timeslot:''
//   //   };
//   // }
//   // setEmail = (event) => {
//   //   this.setState({ mail: event.target.value });
//   // }
//   // setPass = (event) => {
//   //   this.setState({ pass: event.target.value });
//   // }
//   // handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   this.props.loginCheck();
//   //   var body = {
//   //     email: this.state.mail,
//   //     password: this.state.pass
//   //   }

//   //   let json = JSON.stringify(body);

//   //   axios({
//   //     method: 'post',
//   //     url: 'http://localhost:8081/bookmydoctor/user/login',
//   //     data: json,
//   //     headers: { 'Content-Type': 'application/json' }
//   //   })
//   render(){
//   return(

//     <div className="container">
//     <div className="h2">   <h2>Fill the form to book an appointment</h2></div>
//     <Form className="form">

//   <Form.Row >
//     <Form.Group as={Col} controlId="formGridEmail">
//       <Form.Label>Name</Form.Label>
//       <Form.Control type="text" placeholder="Enter your name" />
//     </Form.Group>

//     <Form.Group as={Col} controlId="formGridEmail">
//     <Form.Label>Age</Form.Label>
//     <Form.Control type="number" placeholder="Enter your age" />
//     </Form.Group>
//   </Form.Row>

//   <Form.Group controlId="formGridPhone">
//     <Form.Label>Phone Number</Form.Label>
//     <Form.Control type="phone" placeholder="Enter your phone number" />
//   </Form.Group>

//   <Form.Group controlId="formGridAge">

//     <Form.Label>Alternative Email</Form.Label>
//     <Form.Control type="email" placeholder="Enter your email" />
//   </Form.Group>

//   <Form.Group controlId="formGridSymptoms">
//     <Form.Label>Symptoms</Form.Label>
//     <Form.Control placeholder="Mention your symptoms" />
//   </Form.Group>

//   <Form.Row>
//     <Form.Group as={Col} controlId="formGridCity">
//       <Form.Label>City</Form.Label>
//       <Form.Control as="select" defaultValue="Choose...">
//       <option>Choose...</option>
//         <option>Bangalore</option>
//         <option>Mumbai</option>
//         <option>Chennai</option>
//         <option>Hyderabad</option>
//       </Form.Control>

//     </Form.Group>

//     <Form.Group as={Col} controlId="formGridState">
//       <Form.Label>Select a timeslot</Form.Label>
//       <Form.Control as="select" defaultValue="Choose...">
//       <option>Choose...</option>
//         <option>Morning 9-11</option>
//         <option>Afternoon 12-3</option>
//         <option>Evening 4-7</option>
//       </Form.Control>
//     </Form.Group>


//   </Form.Row>

//   {/* <Form.Group id="formGridCheckbox">
//     <Form.Check type="checkbox" label="Check me out" />
//   </Form.Group> */}

//   <Button variant="primary" type="submit">
//     Book Appointment
//   </Button>{' '}
//   <Button variant="primary" type="submit" className="btn" href="/doctors">
//     Cancel
//   </Button>
// </Form>
// </div>
//   );
// }
// }
// export default AddPatient;

import React, { Component } from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function PatientForm(props) {

  const handleSubmitClick = (e) => {
    props.history.push('/');
    e.preventDefault();

    let object = {};
    let formData = new FormData(e.target);
    formData.forEach((value, key) => {
      object[key] = value;

    }
    );
    console.log(object);
    let json = JSON.stringify(object);
    console.log(json);


    const config = {
      headers: { 'content-type': "application/json" }
    }

    axios.post('http://localhost:8081/bookmydoctor/patient-profile/patient', json, config).then((response) => {
      console.log(response);
    })
      .catch((error) => {
        console.log(error);
      });
  }

  function hm() {
    props.history.push('/doctors')
  }

  return (
    <div className="container">

      <div className="h2">
        <h2>Fill the form to book an appointment</h2></div>
      <Form onSubmit={handleSubmitClick} >

        <Form.Row >
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="patientName" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" name="age" placeholder="Enter your age" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select" name="gender" defaultValue="Choose...">
              <option>Choose...</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="phone" name="contactNo" placeholder="Enter your phone number" />
        </Form.Group>

        <Form.Group controlId="formGridAge">

          <Form.Label>Email Id</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter your email" />
        </Form.Group>


        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control as="select" name="city" defaultValue="Choose...">
              <option>Choose...</option>
              <option>Bangalore</option>
              <option>Mumbai</option>
              <option>Chennai</option>
              <option>Hyderabad</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Book Appointment
     </Button>{' '}
        <Button variant="primary" type="submit" className="btn" onClick={hm}>
          Cancel
     </Button>
      </Form>
    </div>
  );

}