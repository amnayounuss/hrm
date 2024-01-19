import React from 'react';
import { Sidenav, Nav } from 'rsuite';
import { Row,Col } from 'react-bootstrap';
import SidenavHeader from 'rsuite/esm/Sidenav/SidenavHeader';

export const SideNav = () => {
  const navlogoStyle  = {
    width: '132px',
    height: '25px'
  };
  const navItemStyle = {
    color: 'grey',     // Set font color to white
    textDecoration: 'none',  // Remove underline
  };
  const navHeadStyle = {
    color: 'white',     // Set font color to white
    textDecoration: 'none',  // Remove underline
  };

  return (
    <div className="bg-body-tertiary justify-content-between d-flex" data-bs-theme="dark" style={{ width: 200 }}>
      <Sidenav defaultOpenKeys={['3', '4']}>
      <SidenavHeader>
      <Nav>
      <Row className='my-3 d-flex'>
              <Col className='col-md-2'>
              <Nav.Item>  <img style={navlogoStyle} src="/logo-Footer.png" alt="" /> </Nav.Item>
              </Col>
              
            </Row>
            </Nav>
      </SidenavHeader>
        <Sidenav.Body>
          <Nav>
          <Row className='my-3 d-flex'>
              <Col className='col-md-2'>
              <Nav.Item> <img src="/dashboardIcon.png"  alt="" /> </Nav.Item>
              </Col>
              <Col>
              <Nav.Item style={navHeadStyle}>Dashboard</Nav.Item>
              </Col>
            </Row>
          
            <Row className='my-3 d-flex'>
              <Col className='col-md-2'>
              <Nav.Item> <img src="/sidenavuser.png"  alt="" /> </Nav.Item>
              </Col>
              <Col>
              <Nav.Item style={navItemStyle}>Empoyees</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3 d-flex'>
              <Col className='col-md-2'>
              <Nav.Item> <img src="/sidenavuser.png"  alt="" /> </Nav.Item>
              </Col>
              <Col>
              <Nav.Item style={navItemStyle}>Empoyees</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3 d-flex'>
              <Col className='col-md-2'>
              <Nav.Item> <img src="/sidenavuser.png"  alt="" /> </Nav.Item>
              </Col>
              <Col>
              <Nav.Item style={navItemStyle}>Empoyees</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3 d-flex'>
              <Col className='col-md-2'>
              <Nav.Item> <img src="/sidenavuser.png"  alt="" /> </Nav.Item>
              </Col>
              <Col>
              <Nav.Item style={navItemStyle}>Empoyees</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3 d-flex'>
              <Col className='col-md-2'>
              <Nav.Item> <img src="/sidenavuser.png"  alt="" /> </Nav.Item>
              </Col>
              <Col>
              <Nav.Item style={navItemStyle}>Empoyees</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3 d-flex'>
              <Col className='col-md-2'>
              <Nav.Item> <img src="/sidenavuser.png"  alt="" /> </Nav.Item>
              </Col>
              <Col>
              <Nav.Item style={navItemStyle}>Empoyees</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3 d-flex'>
              <Col className='col-md-2'>
              <Nav.Item> <img src="/sidenavuser.png"  alt="" /> </Nav.Item>
              </Col>
              <Col>
              <Nav.Item style={navItemStyle}>Empoyees</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3 d-flex'>
              <Col className='col-md-2'>
              <Nav.Item> <img src="/sidenavuser.png"  alt="" /> </Nav.Item>
              </Col>
              <Col>
              <Nav.Item style={navItemStyle}>Empoyees</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3 d-flex'>
              <Col className='col-md-2'>
              <Nav.Item> <img src="/sidenavuser.png"  alt="" /> </Nav.Item>
              </Col>
              <Col>
              <Nav.Item style={navItemStyle}>Empoyees</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3 d-flex'>
              <Col className='col-md-2'>
              <Nav.Item> <img src="/sidenavuser.png"  alt="" /> </Nav.Item>
              </Col>
              <Col>
              <Nav.Item style={navItemStyle}>Empoyees</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3 d-flex'>
              <Col className='col-md-2'>
              <Nav.Item> <img src="/sidenavuser.png"  alt="" /> </Nav.Item>
              </Col>
              <Col>
              <Nav.Item style={navItemStyle}>Empoyees</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3 d-flex'>
              <Col className='col-md-2'>
              <Nav.Item> <img src="/sidenavuser.png"  alt="" /> </Nav.Item>
              </Col>
              <Col>
              <Nav.Item style={navItemStyle}>Empoyees</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3 d-flex'>
              <Col className='col-md-2'>
              <Nav.Item> <img src="/sidenavuser.png"  alt="" /> </Nav.Item>
              </Col>
              <Col>
              <Nav.Item style={navItemStyle}>Empoyees</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3 d-flex'>
              <Col className='col-md-2'>
              <Nav.Item> <img src="/sidenavuser.png"  alt="" /> </Nav.Item>
              </Col>
              <Col>
              <Nav.Item style={navItemStyle}>Empoyees</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3 d-flex'>
              <Col className='col-md-2'>
              <Nav.Item> <img src="/sidenavuser.png"  alt="" /> </Nav.Item>
              </Col>
              <Col>
              <Nav.Item style={navItemStyle}>Empoyees</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3 d-flex'>
              <Col className='col-md-2'>
              <Nav.Item> <img src="/sidenavuser.png"  alt="" /> </Nav.Item>
              </Col>
              <Col>
              <Nav.Item style={navItemStyle}>Empoyees</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3 d-flex'>
              <Col className='col-md-2'>
              <Nav.Item> <img src="/sidenavuser.png"  alt="" /> </Nav.Item>
              </Col>
              <Col>
              <Nav.Item style={navItemStyle}>Empoyees</Nav.Item>
              </Col>
            </Row>

            
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};
