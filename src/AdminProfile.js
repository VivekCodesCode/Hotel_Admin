import React from 'react';
import './AdminProfile.css'; // Import your CSS file
import { useSelector } from "react-redux";
const AdminProfile = () => {
  const Name = useSelector((state) => state.amount[0]); // useSelector hook to read the state
  return (
    <div className="admin_profile_container">
      <div className="admin_profile_sidebar">
        <ul>
          <li className="admin_profile_sidebar_item active">
            <i className="fas fa-user"></i>
          </li>
          <li className="admin_profile_sidebar_item">
            <i className="fas fa-book"></i>
          </li>
          <li className="admin_profile_sidebar_item">
            <i className="fas fa-cog"></i>
          </li>
          <li className="admin_profile_sidebar_item">
            <i className="fas fa-power-off"></i>
          </li>
        </ul>
      </div>
      <div className="admin_profile_content">
        <div className="admin_profile_header">
          <h2>User Profile</h2>
        </div>
        <div className="admin_profile_main">
          <div className="admin_profile_details">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="admin_profile_image"
            />
            <div className="admin_profile_form">
              <label>Full Name</label>
              <input type="text" value="{Name}" className="admin_profile_input"/>
              
              <label>Mobile Number</label>
              <input type="text" value="+1 16538552163" className="admin_profile_input"/>
              
              <label>Email Address</label>
              <input type="email" value="Bob.smith22@gmail.com" className="admin_profile_input"/>
              
              <label>Joined On</label>
              <input type="text" value="12/12/2022" className="admin_profile_input"/>
              
              <label>Savings/Coins</label>
              <input type="number" value="20" className="admin_profile_input"/>
              <button className="admin_profile_btn_save">Update Savings</button>
            </div>
          </div>
          <div className="admin_profile_history">
            <h3>History and Recent Bookings</h3>
            <div className="admin_profile_booking">
              <div className="admin_profile_booking_info">
                <p>Sea Grill of Merrick Park</p>
                <p>Reserved</p>
                <p>17 December 2022 | 12:15 PM</p>
                <p>2 Guests</p>
              </div>
              <div className="admin_profile_booking_action">
                <p>Saved: $2</p>
                <a href="#">Cancel Booking</a>
              </div>
            </div>
            {/* Repeat the booking component for other bookings */}
          </div>
        </div>
        <div className="admin_profile_footer">
          <div className="admin_profile_status">
            <button className="admin_profile_btn_delete">Delete User</button>
            <button className="admin_profile_btn_inactive">Make Inactive</button>
          </div>
          <button className="admin_profile_btn_save_details">Save/Update Details</button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
