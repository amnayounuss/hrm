import React, { useState, useEffect } from 'react';
import { Col, Form, Button, Row } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

// fetch data from json server
function Login() {
  const [username, usernameupdate] = useState('');
  const [password, passwordupdate] = useState('');
  const navigate = useNavigate();

  const ProceedLogin = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch("http://localhost:9000/users");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const users = await response.json();
        console.log(users); //To check if the data has been fetched from json file and show in console
        const isValidUser = users.some(user => user.username === username && user.password === password);

        if (isValidUser) {
          console.log('Login successful');
          toast.success('Login successful');

          // sessionStorage.setItem('username', username);
          // sessionStorage.setItem('password', password);
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);

          // Redirect to dashboard
          navigate('/dashboard');
        } else {
          console.error('Invalid username or password');
          toast.error('Invalid username or password');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast.error('Error fetching user data');
      }
    }
  };

  const validate = () => {
    let result = true;
    if (username === '') {
      result = false;
      toast.warning('Please enter username');
    }
    if (password === '') {
      result = false;
      toast.warning('Please enter password');
    }
    return result;
  };
  return (
    <>
      <Row className="d-flex" data-bs-theme="dark" style={{width: '100%'}}>
        <Col className='bg-body-tertiary left col-md-7' data-bs-theme="dark">
          <img className='logoicon' src="./logoicon.png" alt="Logo Icon" />
          <Row className='h1 text-light mx-5 p-3'> Crystallite Attendance <br /> Management System</Row>
          <Row style={{width: '99%'}}>
          <Row className='col-md-6 my-5 h-25'>
          <div className='data'>
              <div className='circle'></div>
              <p>Time and attendance tracking</p>
            </div>
            <div className='data'>
              <div className='circle'></div>
              <p>Leave management</p>
            </div>
            <div className='data'>
              <div className='circle'></div>
              <p>Integration with payroll</p>
            </div>
            <div className='data'>
              <div className='circle'></div>
              <p>Reporting and analytics</p>
            </div>
          </Row>
          <Row className='col-md-6 d-flex'>
            <div className='heximg' >
                <img src="image.png" alt='' />
            </div>
            
          </Row>
          <div className='copyright'>
              <p>Copyright &copy; - Crystal-lite. All Rights Reserved. 2023</p>
            </div>
            
          </Row>

        </Col>
        <Col className='right col-md-5'>
          <img className='logomark' src="./logo-Footer.png" alt="Logo Mark" />
          <h4>Login to your account</h4>
          <p>Start managing your finance faster and better</p>

          <div className="container px-5 py-5">
            <div className="form-box">
              <div className="header-form">
                <div className="image"></div>
              </div>
              <div className="body-form">
              {/* FORM */}
              <ToastContainer />
              <Form onSubmit={ProceedLogin}>
                  <Row>
                    <div className='d-flex'>
                      <div className="input-group-prepend">
                        <span className="user"><i className="fa fa-user"></i></span>
                      </div>
                      <input
                        value={username}
                        onChange={(e) => usernameupdate(e.target.value)}
                        type="text"
                        className="username-content text-white"
                        placeholder="User name"
                        
                      />
                    </div>
                  </Row>
                  <Row>
                    <div className="d-flex my-3">
                      <div className="input-group-prepend">
                        <span className="user"><i className="fa fa-lock"></i></span>
                      </div>
                      <input
                        value={password}
                        onChange={(e) => passwordupdate(e.target.value)}
                        type="password"
                        className="username-content text-white"
                        placeholder="Password"
                      />
                    </div>
                  </Row>
                  <Form.Group className="message my-3 mb-4" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                    <Form.Text>
                      <a className='forgotpassword' href="#">
                        Forgot password
                      </a>
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className='d-flex'>
                    <Button className='loginbutton' variant="primary" type="submit" >
                      Login
                    </Button>
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>
        </Col>
        </Row>
    </>
  )
}
export default Login;
