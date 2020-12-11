import React from 'react';
import { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
// import login from '../Login/Login';
// import './viewalldoc.css';
import Button from 'react-bootstrap/Button'

class ListofPatients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patient: [],
            click: false
        }

    }



    pati = () => {
        this.setState({ click: true })
        axios.get(' http://localhost:8081/bookmydoctor/admin/patients')
            .then((resp) => {
                console.log(resp.data);
                this.setState({ patient: resp.data.data })
                // console.log(typeof (this.state.doctor));
                console.log(this.state.patient);
            });
    }


    book = () => {
        this.props.history.push("/addPatient")
    }
   
    
    home=()=>{
                this.props.history.push('/admin')
    }
        
        

    render() {
        <login click={this.pati} />
        return (

            <div className="container">
            

              <h2>List of all Patients in Health-Care</h2>
              <br/>
            <Button variant="primary" size="lg" className="mr-5" onClick={this.pati} active>
                  View All Patients</Button>

            <Button variant="primary" size="lg" className="mr-5" onClick={this.home} active>
                  Home </Button><p><p></p></p>
               



                {
                    this.state.patient.map((pati) => (
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>SL NO</th>
                                    <th>Patient Name</th>
                                    <th>Email</th>
                                    <th>Age</th>
                                    <th>Contact No</th>
                                    <th>City</th>
                                    <th>Gender</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {pati.patientId}
                                    </td>
                                    <td>
                                        {pati.patientName}
                                    </td>
                                    <td>
                                        {pati.email}
                                    </td>
                                    <td>
                                        {pati.age}
                                    </td>
                                    <td>
                                        {pati.contactNo}
                                    </td>
                                    <td>
                                        {pati.city}
                                    </td>
                                    <td>
                                        {pati.gender}

                                        {/* <Button variant="success" onClick={this.book}>Book Appointment</Button> */}
                                        <Button variant="success" onClick={this.myClick}>Update</Button>
                                        <Button variant="danger" onClick={this.myClick}>Delete</Button>
                                    </td>

                                </tr>

                            </tbody>


                        </Table>

                    ))
                }


            </div>
        );
    }
}

export default ListofPatients;