import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Footerhpg from '../navbar/Footerhpg';
class Doctor extends Component {

    constructor(props){
        super(props);

    }

    myClick=()=>{
        this.props.history.push({
            path:'/doc-manage',
            userData: this.props.location.userData
        });
    }

    render() {
        return (
            <div>
                <h1>Welcome</h1>
               
                    <Button variant="primary" size="lg" className="mr-5" href="/profile" active>
                        Create Profile</Button>
                    <Button variant="primary" size="lg" className="mr-5" onClick={this.myClick} active>
                        Update Profile</Button>
                    {/* <Button variant="primary" size="lg" className="mr-5" href="/feedb" active>
                        View All Patients</Button> */}
                    <Button variant="primary" size="lg" className="mr-5" href="/" active>
                        Log Out</Button>
                    <Footerhpg />
                 </div>
        );
    }
}
export default Doctor;