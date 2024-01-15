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
    <TopNav/>
    <Row>
        <SideNav/>
        <Col>
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