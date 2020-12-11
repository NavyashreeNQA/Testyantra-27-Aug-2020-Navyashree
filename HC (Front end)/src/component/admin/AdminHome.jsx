
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class AdminHome extends Component {

    myClick = () => {
        this.props.history.push('/add-admin')
    }

    proUpdate = () => {
        this.props.history.push('/edit-profile')
    }

   view = () => {
        this.props.history.push('/viewall-doctors')
    }
    
    pat = () => {
        this.props.history.push('/viewall-patients')
    }

    block = () => {
        this.props.history.push('/del')
    }

    render() {
        return (
            <div>
                <h1>Welcome to admin page</h1> <p>
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste deserunt magni, sunt neque possimus, iure temporibus id tenetur aliquam quae sed natus! Suscipit dolorem aliquam, voluptatem nostrum temporibus at.</p>
                <Button variant="primary" className="mr-5" onClick={this.myClick} active>
                    Add Admin</Button>

                <Button variant="primary" className="mr-5" onClick={this.view} active>
                    View All Doctors</Button>
                {/* <Button variant="primary" className="mr-5" href="/feedback" active>
                    View All Appointments</Button> */}

                {/* <Button variant="primary" className="mr-5" onClick={this.proUpdate} active>
                    Update Doctor Profile</Button> */}


                <Button variant="primary" className="mr-5" onClick={this.pat} active>
                    View All Patients</Button>

                    <Button variant="primary" className="mr-5" onClick={this.block} active>
                    Block User</Button>

                <Button variant="primary" className="mr-5" href="/" active>
                    Log Out</Button>
            </div>
        );
    }
}


export default AdminHome;