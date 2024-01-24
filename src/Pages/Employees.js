import React from 'react';
import TopNav from '../components/Navbar';
import { Row, Col } from 'react-bootstrap';
import { SideNav } from '../components/SideNav';


function FrontPage() {
  return (
    <>
      <Row style={{ margin: 0, padding: 0 }}>
          <Col xs={12} md={2} style={{ padding: 0 }}>
            <SideNav />
          </Col>
          <Col xs={12} md={10} style={{ padding: 0 }}>
            <TopNav />
            {/* <AttendanceCards />
            <AttendanceFlagSummary />
            <RecentRequestandUnit />
            <TimesheetsBirthdaysUsers /> */}
          </Col>
      </Row>
    </>
  );
}

export default FrontPage;
