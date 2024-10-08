import React, { useEffect, useState } from 'react';
import vivek from "./Images/man.jpg"
import { Container, Row, Col, Form, Button, Image, ListGroup, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaPowerOff } from "react-icons/fa";
import { Audio } from 'react-loader-spinner'
import { Link } from 'react-router-dom';
import { faCalendarAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import {
  Header,
  Navbar,
} from 'rsuite';
import { useSelector } from 'react-redux';
import "./App.css";
import Navbars from './Navbar';
import axios from 'axios';
const UserProfile = () => {
  const [user_data,set_user_data]=useState({
    name:"",
    phone:"",
    email:"",
    image:"",
  })
  const Name = useSelector((state) => state.amount[0]); // useSelector hook to read the state
  useEffect(()=>{
   function call_api(params) {
    axios.get(`https://hotelloginbackend.onrender.com/api/get_waiter_details/${Name}`).then((res)=>{
      set_user_data({
        ...user_data,name:res.data.name,
        phone:res.data.phone,
        email:res.data.email,
        image:res.data.image
      })
    })
   }
   if(Name){
    call_api();
   }
  },[Name])
  return (
    <>
      {/* Header */}
     <Navbars/>
    <div className='waiter_profile_maincontainer d-flex'>
    <div className="waiter_profile_sidebar w-10" style={{backgroundColor:"black"}}>
    <div className="waiter_profile_sidebar-item active">
          <img width="40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4WypskBF6B4F0NUewFgN--4mjiAyCI2_LZA&s" alt="User Profile Icon" />
        </div>

        <div className="waiter_profile_sidebar-item active">
        <Link to="/Tables"> <img width="40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGkxkQwj4nKJq7wzVgcq1QNjAEv0FPxwC_4g&s" alt="User Profile Icon" /></Link> 
        </div>
        <div className="waiter_profile_sidebar-item active">
          <img width="40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBqPGnBVxNcciJClCawl8fnZovFiRoc-c3g&s" alt="User Profile Icon" />
        </div>
        <div className="waiter_profile_sidebar-item active">
          <img width="40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXAmtYV3HJHOI5xib00-Ukfh8G4Ji4P69KA&s" alt="User Profile Icon" />
        </div>
        {/* Additional Sidebar Items */}
      </div>

      {/* Main Content Area */}
    

      {/* Main Container */}
      <Container className="waiter_profile-container mx-30">
        <Row className="mt-5 mx-30">
          {/* User Profile Section */}
          <Col md={6}>
            <h2 className="waiter_profile-heading">User Profile</h2>
            <hr style={{ borderTop: '3px solid #ff5733' }} />
            <div className="align-items-center mb-3">
              <Image
                src={user_data.image}
                roundedCircle
                className="me-3 waiter_profile-avatar"
                alt="User Avatar"
                style={{ height: "110px", width: "110px" }}
              />
              <Form className="waiter_profile-form mt-4">
                <Form.Group controlId="fullName" className="waiter_profile-formGroup">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" value={Name} className="waiter_profile-input" readOnly />
                </Form.Group>

                <Form.Group controlId="mobileNumber" className="mt-3 waiter_profile-formGroup">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="text" value={user_data.phone}className="waiter_profile-input" readOnly />
                </Form.Group>

                <Form.Group controlId="emailAddress" className="mt-3 waiter_profile-formGroup">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" value={user_data.email} className="waiter_profile-input" readOnly />
                </Form.Group>

                <Form.Group controlId="joinedOn" className="mt-3 waiter_profile-formGroup">
                  <Form.Label>Joined On</Form.Label>
                  <Form.Control type="text" value="12/12/2022" className="waiter_profile-input" readOnly />
                </Form.Group>

                <Form.Group controlId="savings" className="mt-3 align-items-center waiter_profile-formGroup">
                  <Form.Label className="me-3">Savings</Form.Label>
                  <Form.Control type="text" value="20" className="me-2 waiter_profile-input" readOnly />
                  <Button variant="outline-warning" className="mt-2">Update Savings</Button>
                </Form.Group>
              </Form>
            </div>
          </Col>

          {/* Booking History Section */}
          <Col md={6}>
            <h4 className="waiter_profile-heading">History and Recent Bookings</h4>
            <ListGroup className="mt-3">
              <ListGroup.Item className="waiter_profile-listItem mt-4">
                <div className="d-flex justify-content-between">
                  <div>
                    <strong>Sea Grill of Merrick Park</strong> <br />
                    <span className="waiter_profile-status reserved">Reserved</span> <br />
                    <small><FontAwesomeIcon icon={faCalendarAlt} /> 17 December 2022 | 12:15 PM</small> <br />
                    <small><FontAwesomeIcon icon={faUserFriends} /> 2 Guests</small>
                  </div>
                  <div className="text-end">
                    <small>Saved: $2</small>
                  </div>
                </div>
              </ListGroup.Item>
              <hr style={{ borderTop: '3px solid #ff5733' }} />

              <ListGroup.Item className="waiter_profile-listItem">
                <div className="d-flex justify-content-between">
                  <div>
                    <strong>Sea Grill North Miami Beach</strong> <br />
                    <span className="waiter_profile-status cancelled">Cancelled</span> <br />
                    <small><FontAwesomeIcon icon={faCalendarAlt} /> 17 December 2022 | 12:15 PM</small> <br />
                    <small><FontAwesomeIcon icon={faUserFriends} /> 2 Guests</small>
                  </div>
                  <div className="text-end">
                    <small>Saved: $0</small>
                  </div>
                </div>
              </ListGroup.Item>
              <hr style={{ borderTop: '3px solid #ff5733' }} />

              <ListGroup.Item className="waiter_profile-listItem">
                <div className="d-flex justify-content-between">
                  <div>
                    <strong>Villagio Restaurant and Bar</strong> <br />
                    <span className="waiter_profile-status completed">Completed</span> <br />
                    <small><FontAwesomeIcon icon={faCalendarAlt} /> 17 December 2022 | 12:15 PM</small> <br />
                    <small><FontAwesomeIcon icon={faUserFriends} /> 2 Guests</small>
                  </div>
                  <div className="text-end">
                    <small>Saved: $2</small>
                  </div>
                </div>
              </ListGroup.Item>

              <div className="waiter_profile-actionButtons mt-4 d-flex gap-2">
                <h5>Select user status:</h5>
                <Button variant="outline-danger" className="me-2">Delete User</Button>
                <Button variant="outline-secondary" className="me-2">Make Inactive</Button>
              </div>

              <Button onClick={()=>{console.log(user_data)}} variant="warning" size="lg" className="waiter_profile-saveButton mt-3">
                Save/Update Details
              </Button>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
};

export default UserProfile;
