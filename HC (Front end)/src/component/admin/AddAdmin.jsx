import React from "react";
import {  Button} from 'react-bootstrap';
import './AddAdmin.css';
import axios from  'axios';
import { withRouter } from "react-router";

 function AddAdmin(props){


    const handleSubmitClick = (e) => {
        props.history.push('/admin-home'); 
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

        axios.post('http://localhost:8081/bookmydoctor/user/register', json,config).then((response)=>{
             console.log(response);
           })   
           .catch((error)=>{
             console.log(error);
          });
        }
        
        function can(){
            props.history.push('/admin-home');
        }


        return (
            
            <div className="col-md-4 offset-4 card card-body mt-5">
                
                <form onSubmit={handleSubmitClick} className="cd">
                    <h3>Add New Admin</h3>

                    <div className="form-group">
                        <label>Email Id</label>
                        <input type="email" className="form-control" name="email" placeholder="Enter new email-id"  required/>
                    </div>
                 
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Enter new password"  required/>
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Re-enter the new password"  required/>
                    </div>
                   

                    <div className="form-group">
                        <label>Phone</label>
                        <input type="number" className="form-control" name="phone" placeholder="Enter new phone number" required/>
                    </div>

                   
                    <div className="form-group">

                    <input type="radio" id="rolea" value="Admin" name="role" className="mr-2" checked/>
                        <label htmlFor="radioa" className="mr-4">Admin</label> 
                        
                        <input type="radio" id="roled" value="Doctor" name="role" className="mr-2"/>
                        <label htmlFor="roled"> Doctor</label>
                        
                    </div>


                <div>
                     <Button variant="outline-primary" type="submit" className="mr-3" >Add</Button>
                     <Button variant="btn" type= "reset" onClick={can} >Cancel</Button>
                </div>

                </form>
            </div>
     
        );
    }

    export default withRouter(AddAdmin);


