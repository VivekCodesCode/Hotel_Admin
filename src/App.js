import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { FaPowerOff } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import './App.css';
import { MdDelete } from "react-icons/md";
import Navbars from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import chat from "./Images/chat.png"
import { useSelector } from "react-redux";
import discount from "./Images/discount.png"
import setting from "./Images/settings.png"
import shopping from "./Images/shopping-bag.png"
import pack from "./Images/package.png"
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';

//Planning,Shopping,discount,package,warehouse,chat,settings
function App() {
  const[admin_data,set_admin_data]=useState([])
  const[status,set_status]=useState(Array(69).fill(["Delivery","red"]));
  const [name,set_name]=useState("");
  const amount = useSelector((state) => state.amount); // useSelector hook to read the state
  useEffect(()=>{
    console.log(amount[amount.length-1]);
    set_name(amount[amount.length-1]);
    axios.post("https://hotelloginbackend.onrender.com/api/final_order").then((res)=>{
      console.log(res.data);
      set_admin_data(res.data);
    })
  },[status])
  function delete_user(id,table) {
    set_admin_data(admin_data.filter((val,index,arr)=>{
      return index!=id;
    
    }))
    axios.post("https://hotelloginbackend.onrender.com/api/delete_final_order",[table]);
  }
  function refresh_table(params) {
    axios.post("https://hotelloginbackend.onrender.com/api/final_order").then((res)=>{
      console.log(res.data);
      set_admin_data(res.data);
    })
  }
  function completed_orders(params) {
  set_admin_data(admin_data.filter((val,index,arr)=>{
    return status[index][1]!=="red";
  }))
  }
  function update_status(index) {
    console.log("status changed")
    set_status(status.map((val,i,arr)=>{
      if(i==index && val[1]=="red") return ["Confirmed","green"];
      else if(i==index && val[1]=="green") return ["Delivery","red"];
      return val
    }))
  }
  //This file is known as App.js
  return (
   <>
   <Navbars name={name}/>
    <div className="d-flex">
      
      
      {/* <div class="sidebar">

        <ul class="nav flex-column mt-5">
          <li class="nav-item">
            <a class="nav-link active" href="#"
              ><img src="./planning.png" alt="" />&nbsp;Live Orders</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><img src="./shopping-bag.png" alt="" />&nbsp;&nbsp;Order
              History</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="./discount.png" alt="" />&nbsp;&nbsp;Offers</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="./package.png" alt="" />&nbsp;&nbsp;Products</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><img src="./warehouse.png" alt="" />&nbsp;&nbsp;Stock</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><img src="./chat.png" alt="" />&nbsp;&nbsp;Message</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><img src="./settings.png" alt="" />&nbsp;&nbsp;Settings</a
            >
          </li>
        </ul>
      </div> */}

      <div className="main-content container-fluid" id="order-container">
        
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Order History</h2>
        </div>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a
            style={{background:"none",color:"black"}}
              className="nav-link active"
              id="pills-all-tab"
              data-toggle="pill"
              href="#pills-all"
              role="tab"
              aria-controls="pills-all"
              aria-selected="false"
            >
              All Orders
            </a>
          </li>
          <li className="nav-item" onClick={refresh_table}>
            <a
              className="nav-link"
              id="pills-summary-tab"
             style={{cursor:"pointer"}}
            >
             <button> Refresh</button>
            </a>
          </li>
          <li onClick={completed_orders} className="nav-item">
            <a
              className="nav-link"
              id="pills-completed-tab"
              data-toggle="pill"
              href="#pills-completed"
              role="tab"
              aria-controls="pills-completed"
              aria-selected="false"
            >
              Completed
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-cancelled-tab"
              data-toggle="pill"
              href="#pills-cancelled"
              role="tab"
              aria-controls="pills-cancelled"
              aria-selected="false"
            >
              Cancelled
            </a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-all"
            role="tabpanel"
            aria-labelledby="pills-all-tab"
          >
            <div className="table-responsive">
              <table className="table project-list-table table-nowrap align-middle table-borderless">
                <thead>
                  <tr className="shadow-sm">
                    <th
                      style={{
                        borderTopLeftRadius: '10px',
                        borderBottomLeftRadius: '10px',
                      }}
                      scope="col"
                    >
                      ID
                    </th>
                    <th scope="col">Table</th>{
                      //This is a table and this is a index...
                    }
                    <th scope="col">Payment</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Status</th>
                    <th scope="col">Status</th>
                    <th scope="col">Total</th>
                    <th
                      style={{
                        borderTopRightRadius: '10px',
                        borderBottomRightRadius: '10px',
                      }}
                      scope="col"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {admin_data.map((val, index) => (
                    <tr key={index} className="shadow-sm">
                      <th
                        style={{
                          borderTopLeftRadius: '10px',
                          borderBottomLeftRadius: '10px',
                        }}
                        scope="row"
                        className="ps-4"
                      >
                        #1234
                      </th>
                      <td>{val.amount2[0]}</td>
                      <td>Cash</td>
                      <td><MdDelete onClick={()=>delete_user(index,val.amount2[0])} style={{cursor:"pointer"}}/></td>
                      <td>
                        <span onClick={()=>{update_status(index)}} style={{color:status[index][1]}} className="badge badge-soft-danger1 mb-0">
                          <i onClick={()=>{update_status(index)}} className="fa-regular fa-circle-dot">&nbsp;</i>
                          {status[index][0]}
                        </span>
                      </td>
                      <td>
                        <span className="badge text-bg-warning mb-0">
                          <i className="fa-regular fa-circle-dot">&nbsp;</i>
                          Delivered
                        </span>
                      </td>
                      <td>$12</td>
                      <td
                        style={{
                          borderTopRightRadius: '10px',
                          borderBottomRightRadius: '10px',
                        }}
                      >
                        <Dropdown>
                          <Dropdown.Toggle 
                          
                            variant="link" 
                            id="dropdown-basic" 
                            style={{ border: 'none', backgroundColor: 'transparent', padding: '0' }}
                          >
                            <BsThreeDotsVertical />

                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                          {/* <h4>Table{val.amount2}</h4> */ console.log("rmthiontrih"+val.amount2[0])}
                            {
                              
                              val.amount.map((value,i,arr)=>{
                                console.log("weijfbg"+value.title);
                               
                               return (<Dropdown.Item href="#/action-1">{value.title+" "+value.quantity}</Dropdown.Item> )
                              })
                            }
                            
                            
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  ))}
                  {
        !admin_data.length&&(
          <div className='no_order'>
          <h1>
          No Orders Yet!!
          </h1>
          </div>
        )
      }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
