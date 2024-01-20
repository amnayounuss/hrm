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
    <div className="bg-body-tertiary d-flex" data-bs-theme="dark" style={{fontSize: '12px', fontWeight:'600', width: "100%", height: '100%', marginLeft: '-20px'}}>
      <Sidenav >
      <SidenavHeader>
      <Nav>
      <Row className='my-3 d-flex w-100 p-3'>
              <Col className='col-md-2'>
              <Nav.Item>  <img style={navlogoStyle} src="/logo-Footer.png" alt="" /> </Nav.Item>
              </Col>
            </Row>
       </Nav>
      </SidenavHeader>
        <Sidenav.Body>
          <Nav>
            <Row className='my-4'>
            <Col xs={6} md={2}>
              <Nav.Item> <img src="/dashboardIcon.png"  alt="" /> </Nav.Item>
            </Col>
            <Col xs={6} md={10}>
              <Nav.Item style={navHeadStyle}>Dashboard</Nav.Item>
            </Col>
            </Row>
            <Row className='my-3'>
              <Col xs={6} md={2}>
              <Nav.Item> <img src="/sidenavuser.png"  alt="" /> </Nav.Item>
              </Col>
              <Col xs={6} md={10}>
              <Nav.Item style={navItemStyle}>Empoyees</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3'>
            <Col xs={6} md={2}>
              <Nav.Item> <img src="/attendanceIcon.png" alt="" /> </Nav.Item>
            </Col>
            <Col xs={6} md={10}>
              <Nav.Item style={navItemStyle}>Company Attendance</Nav.Item>
            </Col>
            </Row>
            
            <Row className='my-3'>
              <Col xs={6} md={2}>
              <Nav.Item> <img src="/documentsIcon.png"  alt="" /> </Nav.Item>
              </Col>
              <Col xs={6} md={10}>
              <Nav.Item style={navItemStyle}>Company Documents</Nav.Item>
              </Col>
            </Row>
            <Row>
              <hr className='my-4' style={{width: '93%', marginLeft:'2%' }} />
            </Row>
            <Row className='my-3'>
              <Col xs={6} md={2}>
              <Nav.Item> <img src="/fleetIcon.png"  alt="" /> </Nav.Item>
              </Col>
              <Col xs={6} md={10}>
              <Nav.Item style={navItemStyle}>Fleet</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3'>
              <Col xs={6} md={2}>
              <Nav.Item> <img src="/loanIcon.png"  alt="" /> </Nav.Item>
              </Col>
              <Col xs={6} md={10}>
              <Nav.Item style={navItemStyle}>Loan Requests</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3'>
              <Col xs={6} md={2}>
              <Nav.Item> <img src="/payrollIcon.png"  alt="" /> </Nav.Item>
              </Col>
              <Col xs={6} md={10}>
              <Nav.Item style={navItemStyle}>Payroll</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3'>
              <Col xs={6} md={2}>
              <Nav.Item> <img src="/compensationIcon.png"  alt="" /> </Nav.Item>
              </Col>
              <Col xs={6} md={10}>
              <Nav.Item style={navItemStyle}>Compensation Request</Nav.Item>
              </Col>
            </Row>
            <Row xs={6} md={2}>
              <Col className='col-md-2'>
              <Nav.Item> <img src="/fleetIcon.png"  alt="" /> </Nav.Item>
              </Col>
              <Col xs={6} md={10}>
              <Nav.Item style={navItemStyle}>Venders</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3'>
              <Col xs={6} md={2}>
              <Nav.Item> <img src="/sidenavuser.png"  alt="" /> </Nav.Item>
              </Col>
              <Col xs={6} md={10}>
              <Nav.Item style={navItemStyle}>Departments</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3'>
              <Col xs={6} md={2}>
              <Nav.Item> <img src="/hierarchyUsericon.png"  alt="" /> </Nav.Item>
              </Col>
              <Col xs={6} md={10}>
              <Nav.Item style={navItemStyle}>Departments Hierarchy</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3'>
              <Col xs={6} md={2}>
              <Nav.Item> <img src="/teamsIcon.png"  alt="" /> </Nav.Item>
              </Col>
              <Col xs={6} md={10}>
              <Nav.Item style={navItemStyle}>Teams</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3'>
              <Col xs={6} md={2}>
              <Nav.Item> <img src="/newsFeedIcon.png"  alt="" /> </Nav.Item>
              </Col>
              <Col xs={6} md={10}>
              <Nav.Item style={navItemStyle}>News Feed</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3'>
              <Col xs={6} md={2}>
              <Nav.Item> <img src="/reagionsIcon.png"  alt="" /> </Nav.Item>
              </Col>
              <Col xs={6} md={10}>
              <Nav.Item style={navItemStyle}>Regions</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3'>
              <Col xs={6} md={2}>
              <Nav.Item> <img src="/companiesIcon.png"  alt="" /> </Nav.Item>
              </Col>
              <Col xs={6} md={10}>
              <Nav.Item style={navItemStyle}>Companies</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3'>
              <Col xs={6} md={2}>
              <Nav.Item> <img src="/rolesIcon.png"  alt="" /> </Nav.Item>
              </Col>
              <Col xs={6} md={10}>
              <Nav.Item style={navItemStyle}>Roles</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3'>
              <Col xs={6} md={2}>
              <Nav.Item> <img src="/permissionsIcon.png"  alt="" /> </Nav.Item>
              </Col>
              <Col xs={6} md={10}>
              <Nav.Item style={navItemStyle}>Permissions</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3'>
              <Col xs={6} md={2}>
              <Nav.Item> <img src="/holidaysIcon.png"  alt="" /> </Nav.Item>
              </Col>
              <Col xs={6} md={10}>
              <Nav.Item style={navItemStyle}>Holidays</Nav.Item>
              </Col>
            </Row>
            <Row className='my-3'>
              <Col xs={6} md={2}>
              <Nav.Item> <img src="/leavesIcon.png"  alt="" /> </Nav.Item>
              </Col>
              <Col xs={6} md={10}>
              <Nav.Item style={navItemStyle}>Leave Types</Nav.Item>
              </Col>
            </Row>

            
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};
