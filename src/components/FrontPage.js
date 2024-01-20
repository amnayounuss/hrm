import React from 'react'
import TopNav from './Navbar';
import { Row, Col } from 'react-bootstrap';
import { SideNav } from './SideNav';
import AttendanceCards from './AttendanceCards';
import AttendanceFlagSummary from './AttendanceFlagSummary';
import RecentRequestandUnit from './RecentRequestandUnit';
import TimesheetsBirthdaysUsers from './TimesheetsBirthdaysUsers';



function FrontPage() {
  return (
    <>
    <Row style={{width: '100%'}}>
    <Col className='col-md-2'>
      <SideNav/>
    </Col>
    <Col className='col-md-10' >
      <TopNav/>
      <AttendanceCards/>
      <AttendanceFlagSummary/>
      <RecentRequestandUnit/>
      <TimesheetsBirthdaysUsers/>
    </Col>
    </Row>

    </>
  )
}

export default FrontPage;