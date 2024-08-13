import axios from "axios";
import 'rsuite/dist/rsuite.min.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Header,
  Content,
  Footer,
  Form,
  Button,
  Navbar,
  Panel,
  Stack,
  Divider,
  InputGroup
} from 'rsuite';
import { FaGithub, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

function Login() {
  const [waiter_data, set_waiter_data] = useState({
    name: "",
    password: ""
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function onchange_listner(value, name) {
    set_waiter_data({
      ...waiter_data,
      [name]: value
    });
  }

  function onclick_listner() {
    console.log(waiter_data);
    axios.post("http://localhost:8000/api/waiter_login", waiter_data).then((res) => {
      if (res.data === "found") {
        console.log("User authenticated");
        navigate("/");
      }
    });
  }

  return (
    <Container>
      <Header className="waiter_login_navbar"> 
        <Navbar className="waiter_login_navbar" appearance="inverse">
          <Navbar.Brand className="navbar_head_admin">CyberInstant</Navbar.Brand>
        </Navbar>
      </Header>
      <Content>
        <Stack alignItems="center" justifyContent="center" style={{ height: '100vh' }}>
          <Panel className="admin_login_container" header="Welcome Back" bordered style={{ width: 500 }}>
            <Form fluid>
              <Form.Group>
                <Form.ControlLabel>Name</Form.ControlLabel>
                <Form.Control 
                  name="name" 
                  style={{ backgroundColor: "white" }}
                  onChange={(value) => onchange_listner(value, "name")} 
                />
              </Form.Group>
              <Form.Group>
                <Form.ControlLabel>Password</Form.ControlLabel>
                <InputGroup inside>
                  <Form.Control
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="off"
                    style={{ backgroundColor: "white" }}
                    onChange={(value) => onchange_listner(value, "password")}
                  />
                  <InputGroup.Button onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </InputGroup.Button>
                </InputGroup>
              </Form.Group>
              <Button className="admin_login_button" appearance="primary" block onClick={onclick_listner}>
                SUBMIT
              </Button>
              <Divider>OR</Divider>
               <center>
                <FaGithub style={{ marginRight: 8 }} />
                Forgot Password?
                </center>
            </Form>
          </Panel>
        </Stack>
      </Content>
    </Container>
  );
}

export default Login;
