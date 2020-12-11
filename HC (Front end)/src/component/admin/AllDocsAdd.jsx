import React from 'react';
import { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Form, Alert, Spinner } from "react-bootstrap";
// import login from '../Login/Login';
// import './viewalldoc.css';
import Button from 'react-bootstrap/Button'

class AllDocsAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            doctor: [],
            click: false
        }
    }



    doc = () => {
        this.setState({ click: true })
        axios.get('http://localhost:8081/bookmydoctor/admin/doctors')
            .then((resp) => {
                console.log(resp.data);
                this.setState({ doctor: resp.data.data })
                console.log(this.state.doctor);
            });
    }



    myClick = () => {
        this.props.history.push('/doc-manage')
    }

    feed = () => {
        this.props.history.push('/del')
    }

    home = () => {
        this.props.history.push('/admin')
    }

    // DeleteEmployee = (props) => {
    //     const [text, setText] = useState("");
    //     const [emps, setEmps] = useState([]);
    //     const [tbl, setTbl] = useState();
    //     const [alert, setAlert] = useState();



    // deleteEmp = () => {
    //     // setAlert(<Spinner animation="border" />);
    //     let val = document.getElementById('Q').value;
    //     console.log(val);
    //     axios
    //         .delete(`http://localhost:8081/bookmydoctor/admin/user/${val}`)
    //         .then((res) => {
    //             if (res.data.error) {
    //                 setAlert(<Alert variant="danger"> Unable to delete employee</Alert>);
    //             } else {
    //                 setAlert(<Alert variant="success">Employee Deleted SuccessFully</Alert>);
    //             }
    //         });
    // };


    render() {
        <login click={this.doc} />
        return (
            <div >

                <h2>List of all doctors in Health-Care</h2>
                <br />
                <Button variant="primary" size="lg" className="mr-5" onClick={this.doc} active>
                    View All doctors</Button>

                <Button variant="primary" size="lg" className="mr-5" onClick={this.home} active>
                    Home </Button><p></p>

                {
                    this.state.doctor.map((doc) => (
                        <div className="container">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>SL NO</th>
                                        <th id="Q">Doctor Name</th>
                                        <th>Specialisation</th>
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
                                        
                                        <Button variant="success" onClick={this.myClick}>Update</Button>
                                        {/* <Button variant="danger" onClick={this.userFunc}>Delete</Button> */}
                                        </td>

                                        {/* <td>
                                        <Button variant="success" onClick={this.myClick}>Delete</Button>
                                    </td> */}
                                    </tr>

                                </tbody>

                            </Table>
                        </div>
                    ))
                }
            </div>
        );
    }

}
export default AllDocsAdd;