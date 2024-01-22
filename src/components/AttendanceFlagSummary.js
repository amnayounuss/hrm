import { Navbar,Nav, Container, Dropdown, Button,Badge, Stack, Form, Row, Col, InputGroup } from 'react-bootstrap';
import MonthlyAttendanceCards from './MonthlyAttendanceCards';
import record from './Records.json';
import React from 'react';


function AttendanceFlagSummary() {
    
 

  return (
    <>
    
        <Row className="bg-body-tertiary mx-2 text-light" data-bs-theme="dark" >
        <Row>
        <Navbar expand="lg mx-2 my-2 flex-wrap">
            <Container fluid>
                <Navbar.Brand href="#" style={{fontSize: '14px'}}>Attendance Flag Summary</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='w-50'>
                <Nav className="me-auto my-2 my-lg-0"  navbarScroll></Nav>
                <Form className="d-flex " >
                <InputGroup className=''>
                        <Form.Control
                            placeholder="Ebad Ahmed (4353)"
                            aria-label="Search"
                            aria-describedby="basic-addon1"
                            type="search"
                        />
                        <InputGroup.Text id="basic-addon1">
                            <img
                            src="/Search.png"
                            width="15"
                            height="15"
                            className="align-top d-flex"
                            />
                        </InputGroup.Text>
                </InputGroup>
                    <Button className='mx-3 d-flex body-text' type="submit">Attendance Detail</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    <hr style={{width: '1071%', marginLeft:'1%' }}/>  
        </Row>
        <Row className='flex-wrap' style={{width: '95%', marginLeft: '0%'}}>
        <Stack direction="horizontal" className="bg-body-tertiary nav mx-2 my-2" gap={2}> 
        {
            record.attendancebadgeData.map((badge, index) => (
        <React.Fragment key={index}>
          <Badge className={`${badge.className} mx-3`} bg="">
            {' '}
          </Badge>
          <span style={{ marginLeft: -15 }}>{badge.text} </span>
        </React.Fragment>
        ))}
        </Stack>
        </Row>

        <Row>
        <hr style={{width: '1071%', marginLeft:'1%' }}/>
        </Row>



        <Row className='d-flex mx-0 flex-wrap'>
            <Navbar className="justify-content-between nav">
                <Form inline className='my-3 d-flex'>
                <span className='mx-2'> Start of pay: <span className='fw-bold'>{record.startpay.text}</span> </span>
                <span className='mx-2'> End of pay: <span className='fw-bold'>{record.endpay.text}</span> </span>
                </Form>
                <Form inline className=''>
                    <Row>
                        <Col>
                            <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic ">
                                Current Month
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>                
                        </Col>
                    </Row>
                </Form>
                
            </Navbar>
            
        </Row>
        <Row className='mx-1 d-flex' >
            <MonthlyAttendanceCards/>
        </Row>
        </Row>
        
        </>
        
  );
}

export default AttendanceFlagSummary;