import React from "react";
import { Button } from 'react-bootstrap';
import './SignUp.css';
import axios from 'axios';
import { withRouter } from "react-router";

function Register(props) {


    const handleSubmitClick = (e) => {
        props.history.push('/Login');
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

        axios.post('http://localhost:8081/bookmydoctor/user/signup', json, config).then((response) => {
            console.log(response);
        })
            .catch((error) => {
                console.log(error);
            });
    }
    return (

        <div className="col-md-4 offset-4 card card-body mt-4">

            <form onSubmit={handleSubmitClick} className="cd">
                <h3>User Sign Up</h3>

                <div className="form-group">
                    <label>Email Id</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter your email-id" required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Enter your password" required maxLength="8"/>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Re-enter your password" required maxLength="8"/>
                </div>


                <div className="form-group">
                    <label>Phone</label>
                    <input type="number" className="form-control" name="phone" placeholder="Enter your phone number" required maxLength="10"/>
                </div>


                <div className="form-group">
                    <input type="radio" id="rolep" value="Patient" name="role" className="mr-2" checked />
                    <label htmlFor="rolep" className="mr-4">Patient</label>
                    <input type="radio" id="roled" value="Doctor" name="role" className="mr-2" />
                    <label htmlFor="roled"> Doctor</label>
                    {/* <input type="radio" id="rolea" value="Admin" name="role" className="mr-2" checked />
                    <label htmlFor="radioa" >Admin</label> */}
                </div>

                <div>
                    <input
                        type="radio"
                        className="rad-form-control"
                        value="Active"
                        id="role"
                        checked
                        name="status"
                    />
                </div>

                <div>
                    <Button variant="outline-primary" type="submit" className="mr-3" >SignUp</Button>

                    <Button variant="btn" type="reset" >Cancel</Button>{' '}


                </div>

            </form>

        </div>


    );
}

export default withRouter(Register);


