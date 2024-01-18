import { Row, Col} from 'react-bootstrap';
import React from 'react'
import Circularprogress from './Circularprogress';
import OnlineUsersData from './OnlineUsersData';
import BirthdayWorkAnniversary from './BirthdayWorkAnniversary';


function TimesheetsBirthdaysUsers() {
  return (
    <>
    <Row className='mx-2' style={{width: '100%',display: 'flex'}}>
    <Col className='text-light bg-dark my-2' style={{ borderRadius: 8, marginRight: '1%' }}>
          <div className="p-2 body-text">Timesheet</div>
          <Row>
            <hr style={{ width: '93%', marginLeft: '2%' }} />
          </Row>
          <div className='punchintime' style={{ paddingLeft: 10, paddingTop: 30, paddingBottom: 60 }}>
            <p> Punch In at </p>
            <h6>Thursday, 29 Jun 2023 09:05 AM</h6>
          </div>
          <Row>
            <Col xs={12} className='d-flex justify-content-center'>
              <Circularprogress />
            </Col>
          </Row>
        </Col>

        {/* second col2 */}
        <Col className='text-light bg-dark my-2' style={{borderRadius: 8,marginRight: '1%'}}>
          <BirthdayWorkAnniversary/>  
        </Col>
        
        {/* second col3 */}
        <Col className='text-light bg-dark my-2' style={{borderRadius: 8}}>
          <OnlineUsersData/>     
        </Col>


    </Row>
    </>
  )
}

export default TimesheetsBirthdaysUsers;
