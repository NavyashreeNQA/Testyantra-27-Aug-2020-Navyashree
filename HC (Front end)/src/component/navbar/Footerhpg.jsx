import 'bootstrap/dist/css/bootstrap.min.css';
import '../welcome/welcome.css';
import { Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
function Footerhpg(){

    return(

        <div className="footer">
          <footer className="page-footer font-small mdb-color pt-4">
            <div className="container text-center text-md-left">
              <div className="row text-center text-md-left mt-3 pb-3">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Health Care</h6>
                  <p align="justify">Health Care app emphasize disease prevention, helping you to live your best life. We are committed to ensuring our patients receive team-based patient-centered care. we know people are busy. That’s why we offer same-day and pre-booked appointments.</p>
                </div>
                <hr className="w-100 clearfix d-md-none"></hr>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Terms</h6>
                  <p>
                    <navLink href="/terms" color="black">Terms and Conditions</navLink><br/>
                    <navLink href="/about" color="black">About Us</navLink><br/>
                    <navLink href="/privacy" color="black">Privacy Policy</navLink>
                  </p>
                  {/* <p>
                    <navLink href="#!" color="black">Help</navLink>
                  </p> */}
                  {/* <p>
                    <a href="#!" color="black">Grievance Policy</a>
                  </p> */}

                </div>
                {/* <hr className="w-100 clearfix d-md-none"></hr>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>

                  <p>
                    <a href="#!" color="black">AboutUs</a>
                  </p>
                  {/* <p>
                    <a href="#!" color="black">Track Application Status</a>
                  </p> */}
                  {/* <p>
                    <a href="#!" color="black">Help</a>
                  </p>
                </div> */} 
                <hr className="w-100 clearfix d-md-none"></hr>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p>
                    <i className="fas fa-home mr-3"></i> #14 fort, Bangalore, Karnataka</p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i>healthCare@gmail.com</p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> +91-9876543210</p>

                </div>
              </div>
              <hr>
              </hr>
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8">
                  <p align="center" className="text-center text-md-left">© 2020 Copyright:<a href="#"><strong ><b>HealthCare.com</b> </strong></a>
                  </p>
                </div>
                <div className="col-md-5 col-lg-4 ml-lg-0">
                  <div className="text-center text-md-right">
                    <ul className="list-unstyled list-inline">
                      <li className="list-inline-item">
                        <NavLink className="btn-floating btn-sm rgba-white-slight mx-1">
                          <i className="fab fa-facebook-f"></i>
                        </NavLink>
                      </li>
                      <li className="list-inline-item">
                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                          <i className="fab fa-google-plus-g"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </footer>

        </div>
    );
 
}
export default Footerhpg;
