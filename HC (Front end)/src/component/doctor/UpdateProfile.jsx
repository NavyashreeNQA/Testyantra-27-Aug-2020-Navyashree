import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Form, Col, Button, InputGroup} from 'react-bootstrap';
import { render } from '@testing-library/react';


class UpdateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctor: [],
           click: false,
           info:{}

          }
    }
    

    componentDidMount(){
      axios({
        method:'post',
        url:'http://localhost:8081/bookmydoctor/doctor-profile/doctor-data',
        data: this.props.location.userData,
        headers: { 'content-type' : "application/json" }
      })
      .then((response)=>{
      this.setState({info:response.data.data});
      console.log(this.state.info);
      }).catch((error)=>{
           console.log(error);
        });
      }
    
   
   op=()=> {
    console.log(this.state.props);
  }

    update = (e) => { 
e.preventDefault();
      let data= new FormData(e.target)
      let object={};
      data.forEach((value, key)=>{
        object[key]=value;

      } 
          )
          object.doctorId=this.state.info.doctorId;
          object.user=this.state.info.user;
          console.log(object);
        axios({
          method: "put",
          url:'http://localhost:8081/bookmydoctor/doctor-profile/manage-profile',
          data:JSON.stringify(object),
          headers: { 'content-type' : "application/json" } })
            .then(res => {
                  console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })

    }


    click=()=>{
        this.props.history.push('/doctors-home')
    }

render(){

return(

    <div className="container">
    <div className="h1"><h1>Update your profile</h1></div> 
     <Form className="form" onSubmit={this.update}>
     <Form.Group controlId="name">
       <Form.Label> Name</Form.Label>
       <Form.Control type="name" value={this.state.info.doctorName} name="doctorName" />
     </Form.Group>
     <Form.Group controlId="qualification">
       <Form.Label>Qualification</Form.Label>
       <Form.Control type="text" placeholder={this.state.info.doctorQualification} name="doctorQualification" />
     </Form.Group>
     <Form.Group controlId="specialisation">
       <Form.Label>Specialisation</Form.Label>
       <Form.Control type="text" placeholder={this.state.info.doctorSpeacilization} name="doctorSpeacilization" />
     </Form.Group>
     <Form.Group controlId="prcticing">
       <Form.Label>Practicing From</Form.Label>
       <Form.Control type="date" value={this.state.info.praticefrom} name='praticefrom' />
     </Form.Group>
     <div className="btn">
     <Button type="submit" >Submit</Button>
     <Button type="reset" onClick={this.click}>Cancel</Button></div>
   </Form>
   </div>
)

}

}
export default UpdateProfile;