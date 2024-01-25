import React from 'react';
import { Row, Container, Col, Image } from 'react-bootstrap';

function EmployeesData() {
  return (
    <>
    <Container className="bg-body-tertiary" data-bs-theme="dark" style={{ width: '100%', maxWidth: '1100px', height: '519px' }}>
    <Row>
      <Row className="text-white my-4" style={{fontSize: '12px', width: '98%', height: '48px', backgroundColor: '#0E0F12', marginLeft: '2%' }}>
        <Col className='col-md-3 my-3' >User </Col>
        <Col className='col-md-2 my-3' >Department</Col>
        <Col className='col-md-2 my-3' >Designation</Col>
        <Col className='col-md-2 my-3' >Email</Col>
        <Col className='col-md-2 my-3' >Phone</Col>
        <Col className='col-md-1 my-3' ></Col>
      </Row>

      <Row className="text-white mx-3" style={{fontSize: '12px', height: '60px'}}>
      <Col xs={12} md={3} className='d-flex align-items-center'>
        <div className='employeeimage'>
          <Image src="/image2.jpg" alt="" fluid />
        </div>
        <div className='ml-2 mx-3'>
          <span> (88431) <br /> Nolan Kenter</span>
        </div>
      </Col>
        <Col className='col-md-2 my-3' >Mobile App</Col>
        <Col className='col-md-2 my-3' >Head of Department (H.O.D)</Col>
        <Col className='col-md-2 my-3' >chrisjohn@crystal-lite.com</Col>
        <Col className='col-md-2 my-3' >+92 325 6654800</Col>
        <Col className='col-md-1 my-3' > <img src="/dots.png" alt="" /> </Col>
        <hr className='my-2' style={{width: '98%'}} />
      </Row>

      <Row className="text-white mx-3 my-1" style={{fontSize: '12px', height: '60px'}}>
      <Col xs={12} md={3} className='d-flex align-items-center'>
        <div className='employeeimage'>
          <Image src="/image2.jpg" alt="" fluid />
        </div>
        <div className='ml-2 mx-3'>
          <span> (88431) <br /> Nolan Kenter</span>
        </div>
      </Col>
        <Col className='col-md-2 my-3' >Mobile App</Col>
        <Col className='col-md-2 my-3' >Head of Department (H.O.D)</Col>
        <Col className='col-md-2 my-3' >chrisjohn@crystal-lite.com</Col>
        <Col className='col-md-2 my-3' >+92 325 6654800</Col>
        <Col className='col-md-1 my-3' > <img src="/dots.png" alt="" /> </Col>
        <hr className='my-2' style={{width: '98%'}} />
      </Row>

      <Row className="text-white mx-3 my-1" style={{fontSize: '12px', height: '60px'}}>
      <Col xs={12} md={3} className='d-flex align-items-center'>
        <div className='employeeimage'>
          <Image src="/image2.jpg" alt="" fluid />
        </div>
        <div className='ml-2 mx-3'>
          <span> (88431) <br /> Nolan Kenter</span>
        </div>
      </Col>
        <Col className='col-md-2 my-3' >Mobile App</Col>
        <Col className='col-md-2 my-3' >Head of Department (H.O.D)</Col>
        <Col className='col-md-2 my-3' >chrisjohn@crystal-lite.com</Col>
        <Col className='col-md-2 my-3' >+92 325 6654800</Col>
        <Col className='col-md-1 my-3' > <img src="/dots.png" alt="" /> </Col>
        <hr className='my-2' style={{width: '98%'}} />
      </Row>

      <Row className="text-white mx-3 my-1" style={{fontSize: '12px', height: '60px'}}>
      <Col xs={12} md={3} className='d-flex align-items-center'>
        <div className='employeeimage'>
          <Image src="/image2.jpg" alt="" fluid />
        </div>
        <div className='ml-2 mx-3'>
          <span> (88431) <br /> Nolan Kenter</span>
        </div>
      </Col>
        <Col className='col-md-2 my-3' >Mobile App</Col>
        <Col className='col-md-2 my-3' >Head of Department (H.O.D)</Col>
        <Col className='col-md-2 my-3' >chrisjohn@crystal-lite.com</Col>
        <Col className='col-md-2 my-3' >+92 325 6654800</Col>
        <Col className='col-md-1 my-3' > <img src="/dots.png" alt="" /> </Col>
        <hr className='my-2' style={{width: '98%'}} />
      </Row>

      <Row className="text-white mx-3 my-1" style={{fontSize: '12px', height: '60px'}}>
      <Col xs={12} md={3} className='d-flex align-items-center'>
        <div className='employeeimage'>
          <Image src="/image2.jpg" alt="" fluid />
        </div>
        <div className='ml-2 mx-3'>
          <span> (88431) <br /> Nolan Kenter</span>
        </div>
      </Col>
        <Col className='col-md-2 my-3' >Mobile App</Col>
        <Col className='col-md-2 my-3' >Head of Department (H.O.D)</Col>
        <Col className='col-md-2 my-3' >chrisjohn@crystal-lite.com</Col>
        <Col className='col-md-2 my-3' >+92 325 6654800</Col>
        <Col className='col-md-1 my-3' > <img src="/dots.png" alt="" /> </Col>
        <hr className='my-2' style={{width: '98%'}} />
      </Row>

      <Row className="text-white mx-3 my-1" style={{fontSize: '12px', height: '60px'}}>
      <Col xs={12} md={3} className='d-flex align-items-center'>
        <div className='employeeimage'>
          <Image src="/image2.jpg" alt="" fluid />
        </div>
        <div className='ml-2 mx-3'>
          <span> (88431) <br /> Nolan Kenter</span>
        </div>
      </Col>
        <Col className='col-md-2 my-3' >Mobile App</Col>
        <Col className='col-md-2 my-3' >Head of Department (H.O.D)</Col>
        <Col className='col-md-2 my-3' >chrisjohn@crystal-lite.com</Col>
        <Col className='col-md-2 my-3' >+92 325 6654800</Col>
        <Col className='col-md-1 my-3' > <img src="/dots.png" alt="" /> </Col>
      </Row>

      
      </Row>
    </Container>
    
    </>
  );
}

export default EmployeesData;
