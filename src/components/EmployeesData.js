import React from 'react';
import { Row, Container,Dropdown, Col, Image,Navbar,Nav,Form,InputGroup, Button } from 'react-bootstrap';
// import { Navbar,Nav, Container, Dropdown, Button,Badge, Stack, Form, Row, Col, InputGroup } from 'react-bootstrap';

import records from './Records.json'

function EmployeesData() {
  return (
    <>
    <Row style={{width: '100%'}}>
        <Navbar expand="lg mx-2 my-2 flex-wrap">
            <Container className='mx-2'>
                <Navbar.Brand href="#" className='text-white' >Employees</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='w-50'>
                <Nav className="me-auto my-2 my-lg-0"  navbarScroll></Nav>
                
                <Form className="d-flex " >
                <Col>
                  <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic ">
                    Bitswits
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                  </Dropdown>                
                </Col>
                <Col>
                  <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic ">
                    All Departments
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                  </Dropdown>                
                </Col>
                <Row className='d-flex search' style={{width: '200px'}}> 
                <Col xs="auto">
                <Form.Control
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                  type="search"
                />
                </Col>
                <Col id="basic-addon1">
                  <img
                  src="/Search.png"
                  width="15"
                  height="15"
                  className="align-top d-flex"
                  />
                </Col>
                </Row>
                    <Button className='mx-3 d-flex body-text' type="submit">+ Add Employee</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </Row>


    <Row className='mx-3' style={{height: '100vh'}}>

    <Container className="d-flex bg-body-tertiary" data-bs-theme="dark" style={{height: '550px'}} >
    <Row className='my-3'>
      <Row className="text-white align-items-center" style={{fontSize: '12px', width: '98%', height: '48px', backgroundColor: '#0E0F12', marginLeft: '2%' }}>
        <Col xs={2} md={3} >User </Col>
        <Col xs={3} md={2} >Department</Col>
        <Col xs={3} md={2} >Designation</Col>
        <Col xs={2} md={2} >Email</Col>
        <Col xs={1} md={2} >Phone</Col>
        <Col xs={1} md={1} ></Col>
      </Row>

      {records.employeePageData.map((employee, index ) => (
      <Row
      key={index}
       className="text-white mx-1 my-2 align-items-center" style={{fontSize: '12px',height: '60px', width: '100%'}}>
      <Col xs={2} md={3} className='d-flex flex-wrap align-items-center'>
        <div className='employeeimage'>
          <Image src={employee.img} alt="" fluid />
        </div>  
        <div className='ml-2 mx-3'>
          <span> {employee.employeeCode} <br /> {employee.name} </span>
        </div>
      </Col>
        <Col className='flex-wrap' xs={3} md={2} > {employee.department} </Col>
        <Col className='flex-wrap' xs={3} md={2} > {employee.designationTitle} <br /> {employee.designation} </Col>
        <Col className='flex-wrap' xs={2} md={2} > {employee.email} </Col>
        <Col className='flex-wrap' xs={1} md={2} > {employee.phoneNo} </Col>
        <Col className='flex-wrap' xs={1} md={1} > <img src="/dots.png" alt="" /> </Col>
      <hr className='my-2 mx-3 flex-wrap' style={{width: '98%'}} />

      </Row>
      ))}
      </Row>
    </Container>
    </Row>
    </>
  );
}

export default EmployeesData;
