import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import './navi.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from '../login/Login';
import Register from '../register/Register';
import Welcome from '../welcome/Welcome';
import Health from '../terms/Health';
import images from './HCHd.png';
import About from '../terms/About.jsx';
import ListOfDOctor from '../patient/ListofDoctors';
import addPatient from "../patient/AddPatient";
import Feedback from '../patient/Feedback';
import DoctorForm from '../doctor/DoctorForm';
import Doctor from '../doctor/Doctor';
// import PatientDashboard from '../patient/PatientDashboard';
import ListofPatients from '../doctor/ListofPatients';
import AdminHome from '../admin/AdminHome';
import AddAdmin from '../admin/AddAdmin';
import AllDocsAdd from '../admin/AllDocsAdd';
import AllPatientsAdd from '../admin/AllPatientsAdd';
import DeleteDoctor from '../admin/BlockUser';
import BlockUser from '../admin/BlockUser';
import UpdateProfile from '../doctor/UpdateProfile';


let isLogged = false;

class Navbarhpg extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        isLoggedIn: false
    }
}

  loginCheck=()=>{
    this.setState({isLoggedIn:true})
}

// log = () => {
//   this.props.history.push("/login")
// }

render() {
    return(
        <div>
        <div> 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand NavLink href='/'><img src={images}  NavLink href='/' height="" width="100px" alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/health" >Health-tips</Nav.Link>
            <Nav.Link href="/about" >About us</Nav.Link>
          </Nav>
          <Nav>
           {
             !this.state.isLoggedIn && <Nav.Link href="/login" eventKey={2}> 
             <button className="sign">SignIn</button>
            </Nav.Link>
           }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
</div>
      <Router>
<Route path='/' exact component={Welcome} />
<Route path="/login" render={()=><Login loginCheck={this.loginCheck} />} />
<Route path='/register' extact component={Register}/>
{/* <Route path='/doctor' exact component={doctor} />  */}
<Route path='/about' exact component={About}/>
<Route path='/health' exact component={Health}/>
<Route path='/doctors' exact component={ListOfDOctor}/>
<Route path='/addPatient' exact component={addPatient}/>
<Route path='/feedback' exact component={Feedback}/>
<Route path='/profile' exact component={DoctorForm}/>
{/* <Route path='/doctorForm' exact component={Doctor}/> */}
<Route path='/doctor' exact component={Doctor}/>
{/* <Route path='/patient' exact component={PatientDashboard}/> */}
<Route path='/admin' exact component={AdminHome}/>
<Route path='/add-admin' exact component={AddAdmin}/>
<Route path='/viewall-doctors' exact component={AllDocsAdd}/>
<Route path='/viewall-patients' exact component={AllPatientsAdd}/>
<Route path='/allPatients' exact component={ListofPatients}/>
<Route path='/del' exact component={BlockUser}/>
<Route path='/doc-manage' exact component={UpdateProfile}/>

</Router>


      </div>
    );
}
}
export default Navbarhpg;

