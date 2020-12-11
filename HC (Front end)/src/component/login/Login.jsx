import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, withRouter, BrowserRouter as Router, NavLink } from 'react-router-dom';
// import './Log.css';
import axios from 'axios';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: true,
      mail: '',
      pass: '',
      role: '',
      status:''
    };
  }
  setEmail = (event) => {
    this.setState({ mail: event.target.value });
  }
  setPass = (event) => {
    this.setState({ pass: event.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.loginCheck();
    var body = {
      email: this.state.mail,
      password: this.state.pass
    }

    let json = JSON.stringify(body);

    axios({
      method: 'post',
      url: 'http://localhost:8081/bookmydoctor/user/login',
      data: json,
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      this.setState({ role: response.data.data.role });
      this.setState({status:response.data.data.status});
      localStorage.setItem(response.data.data.email,JSON.stringify(response.data.data));
      console.log(this.state.role);
      if (this.state.role === "Doctor" && this.state.status==="Active") {
        this.props.history.push({
          pathname:'/doctor',
          userData: response.data.data
        });
      } else if (this.state.role === "Admin" && this.state.status==="Active" ) {
        this.props.history.push({
          pathname:'/admin',
          userData: response.data.data
        })
      } else if (this.state.role === "Patient" && this.state.status==="Active") {
        this.props.history.push({
          pathname:'/doctors',
          userData: response.data.data
        });
      } else {
        console.log("Incorrect");
        document.write("Invalid Credentials")
      }
    }).catch(err => {
      console.log(err);
    });
    
    document.myform.reset();
  }
  reg = () => {
    this.props.history.push('/register')
}


  render() {
    return (
      
      <Router>
            
        <div className="col-md-3 mr-auto card card-body ml-auto mt-5 mb-5">
          <form className="logform" onSubmit={this.handleSubmit} name="myform">
          <h3 className="mr-3 align-content-center">Sign In</h3>
            <div className="form-group">
              <label for="exampleInputEmail1" className="mail">Email Id</label>
              <input type="email" onChange={this.setEmail} className="form-control border-blue" name="email" placeholder="Eg: abc123@xyz.com" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="form-group mb-5">
              <label for="exampleInputPassword1" className="pass">Password</label>
              <input type="password" onChange={this.setPass} className="form-control" name="password" placeholder="Enter your password" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-success" >Submit</button>
            <button type="reset" className="btn  float-right">Cancel</button>
          
      <p>Or, don't have account? <a onClick={this.reg} > Signup </a> now to book appointment </p>
      
          </form>
        </div></Router>
    );
    
  }
}
export default withRouter(Login); 