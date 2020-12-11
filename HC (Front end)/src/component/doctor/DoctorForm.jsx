// import React, { Component } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import './Doctor.css';
// import Footerhpg from '../navbar/Footerhpg';
// class DoctorForm extends Component {
//     render(){
//     return(
//         <div>
//        <div className="h1"><h1>Create your profile</h1></div> 
//         <Form className="form">
//         <Form.Group controlId="name">
//           <Form.Label> Name</Form.Label>
//           <Form.Control type="name" placeholder="Enter your name" />
//         </Form.Group>
//         <Form.Group controlId="qualification">
//           <Form.Label>Qualification</Form.Label>
//           <Form.Control type="text" placeholder="Qualification" />
//         </Form.Group>
//         <Form.Group controlId="specialisation">
//           <Form.Label>Specialisation</Form.Label>
//           <Form.Control type="text" placeholder="Specialisation" />
//         </Form.Group>
//         <Form.Group controlId="prcticing">
//           <Form.Label>Practicing From</Form.Label>
//           <Form.Control type="date" placeholder="Practicing From" />
//         </Form.Group>
//         <div className="btn">
//         <Button type="submit" >Submit</Button>
//         <Button type="submit" href="/doctorForm">Cancel</Button></div>
//       </Form>
//       <Footerhpg/>
//       </div>

//     );
// }
// }
// export default DoctorForm;


import {Form, Col, Button, InputGroup} from 'react-bootstrap';
import  React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Doctor.css';
import axios from 'axios';

function DoctorForm(props) {
      
    const handleSubmitClick = (e) => {
      props.history.push('/Login'); 
      e.preventDefault();
      
      let object = {};
      let formData=new FormData(e.target);
      formData.forEach((value,key)=>{
          object[key] = value;
          
      }
      );
      console.log(object);
      let json = JSON.stringify(object); 
      console.log(json); 


      const config = {     
          headers: { 'content-type' : "application/json" }
      }

      axios.post('http://localhost:8081/bookmydoctor/doctor-profile/doctor', json,config).then((response)=>{
           console.log(response);
         })   
         .catch((error)=>{
           console.log(error);
        });
      }
      
      function click(){
        props.history.push('/doctor')
    }

    return (
      <div className="container">
      <div className="h1"><h1>Create your profile</h1></div> 
       <Form  onSubmit={handleSubmitClick}>
       <Form.Group controlId="name">
         <Form.Label> Name</Form.Label>
         <Form.Control type="name" placeholder="Enter your name" name="doctorName" />
       </Form.Group>
       <Form.Group controlId="qualification">
         <Form.Label>Qualification</Form.Label>
         <Form.Control type="text" placeholder="Qualification" name="qualification" />
       </Form.Group>
       <Form.Group controlId="specialisation">
         <Form.Label>Specialisation</Form.Label>
         <Form.Control type="text" placeholder="Specialisation" name="specialisation" />
       </Form.Group>
       <Form.Group controlId="prcticing">
         <Form.Label>Practicing From</Form.Label>
         <Form.Control type="date" placeholder="Practicing From" name='practicingFrom' />
       </Form.Group>
       <div >
       <Button type="submit" className="b">Submit</Button>
       <Button type="submit" onClick={click}>Cancel</Button></div>
     </Form>
     </div>
   );
    }     

  export default DoctorForm;