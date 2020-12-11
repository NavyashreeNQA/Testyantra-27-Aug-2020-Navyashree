import React from 'react';
import { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import login from '../login/Login';
import './patient.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'

class ListOfDOctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctor: [],
            click: false
        }

    }



    doc = () => {
        this.setState({ click: true })
        axios.get(' http://localhost:8081/bookmydoctor/admin/doctors')
            .then((resp) => {
                console.log(resp.data);
                this.setState({ doctor: resp.data.data })
                // console.log(typeof (this.state.doctor));
                console.log(this.state.doctor);
            });
    }

    
    book=()=>{
        this.props.history.push("/addPatient")
    }
    feed=()=>{
        this.props.history.push("/feedback")
    }
    
    render() {
        <login click={this.doc} />
        return (

            <div className="container">
                <div className="h2">
                    <h2>Instant appointment with doctors.<strong>Guaranteed.</strong></h2></div>
                <p></p>
                <h3>View all the doctors in the city and book an appointment</h3>
                <ul>
                    <li><h4>300+ Verified Doctors </h4> </li>

                    <li> <h4>10000+ Patient recomendations</h4></li>

                    <li><h4>10000+ Patients/year</h4> </li>


                </ul>

                <Button variant="primary" size="lg" className="mr-5" onClick={this.doc} active>
                    Find me the right doctor</Button>
                
                <Button variant="primary" size="lg" className="mr-5" onClick={this.feed} active>
                 Give Feedback</Button>
                 <Button variant="primary" size="lg" className="mr-5" href="/" active>
                    Log Out</Button>
                <p></p> <p></p>
                



                    {
                        this.state.doctor.map((doc) => (
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>SL NO</th>
                                        <th>Doctor Name</th>
                                        <th>Specialization</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            {doc.doctorId}
                                        </td>
                                        <td>
                                            {doc.doctorName}
                                        </td>
                                        <td>
                                            {doc.specialisation}

                                            <Button variant="success" onClick={this.book}>Book Appointment</Button>
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

export default ListOfDOctor;