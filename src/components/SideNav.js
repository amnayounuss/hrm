import React from 'react';
import { Sidenav, Nav } from 'rsuite';

export const SideNav = () => {
  const navItemStyle = {
    color: 'white',     // Set font color to white
    textDecoration: 'none',  // Remove underline
  };

  return (
    <div className="bg-body-tertiary justify-content-between d-flex" data-bs-theme="dark" style={{ width: 220 }}>
      <Sidenav defaultOpenKeys={['3', '4']}>
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1" style={navItemStyle}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" style={navItemStyle}>
              User Group
            </Nav.Item>
            <Nav.Menu placement="rightStart" eventKey="3" >
              <Nav.Item eventKey="3-1" style={navItemStyle}>Geo</Nav.Item>
              <Nav.Item eventKey="3-2" style={navItemStyle}>Devices</Nav.Item>
              <Nav.Item eventKey="3-3" style={navItemStyle}>Loyalty</Nav.Item>
              <Nav.Item eventKey="3-4" style={navItemStyle}>Visit Depth</Nav.Item>
            </Nav.Menu>
            <Nav.Menu placement="rightStart" eventKey="4" title="Settings">
              <Nav.Item eventKey="4-1" style={navItemStyle}>Applications</Nav.Item>
              <Nav.Item eventKey="4-2" style={navItemStyle}>Channels</Nav.Item>
              <Nav.Item eventKey="4-3" style={navItemStyle}>Versions</Nav.Item>
              <Nav.Menu eventKey="4-5" title="Custom Action">
                <Nav.Item eventKey="4-5-1" style={navItemStyle}>Action Name</Nav.Item>
                <Nav.Item eventKey="4-5-2" style={navItemStyle}>Action Params</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};
