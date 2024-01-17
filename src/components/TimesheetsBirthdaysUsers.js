import { Row, Col, Container} from 'react-bootstrap';
import React from 'react'
import Circularprogress from './Circularprogress';


function TimesheetsBirthdaysUsers() {
  return (
    <>
    <Row className='mx-2' style={{width: '100%',display: 'flex'}}>
    <Col className='text-light bg-dark my-2' style={{ borderRadius: 8, marginRight: '1%' }}>
          <div className="p-2 body-text">Timesheet</div>
          <hr style={{ width: '93%', marginLeft: '2%' }} />
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
             <Row>
                 <div className="p-2 body-text">Monthly Birthdays/ Work Anniversaries </div>
                 <hr style={{width: '93%', marginLeft:'2%' }}/>

             </Row>
             <Row className='d-flex'>
                 <Container className='my-2' style={{width: 300,  height: 118, backgroundColor: '#0E0F12'}}>
                     <p className='my-2' style={{ color: '#97C121' }}>Birthday Today</p>
                     <Row>
                     <hr style={{width: '97%', marginLeft:'1%' }}/>

                     <Col className='mx-3'>
                     <div className="images">
                        <div className="frontimage">
                             <img src="/image2.jpg" alt=""/>
                         </div>
                         <div className="backimage">
                             <img src="/birthday-cake.png" alt=""/>
                         </div>
                     </div>
                     </Col>
                     <Col>
                     <Container className='eventsbox' style={{ width: 68, height: '64'}}>
                         <h3 style={{fontSize: '24px'}}>10</h3>
                         <p style={{fontSize: '14px'}}>October</p>
                     </Container>
                        
                     </Col>
                     </Row>
                 </Container>
                 <Container className='my-4' style={{width: 300,  height: 118, backgroundColor: '#0E0F12'}}>
                     <p className='my-2' style={{ color: '#97C121' }}>2 years Work Anniversary</p>
                     <Row>
                     <hr style={{width: '97%', marginLeft:'1%' }}/>

                     <Col className='mx-3'>
                     <div className="images">
                        <div className="frontimage">
                             <img src="/image2.jpg" alt=""/>
                         </div>
                         <div className="backimage">
                             <img src="/workanniversary.png" alt=""/>
                         </div>
                     </div>
                     </Col>
                     <Col>
                     <Container className='eventsbox' style={{ width: 68, height: '64'}}>
                         <h3 style={{fontSize: '24px'}}>10</h3>
                         <p style={{fontSize: '14px'}}>October</p>
                     </Container>
                        
                     </Col>
                     </Row>
                 </Container>
             </Row>
         </Col>


        {/* second col3 */}
        <Col className='text-light bg-dark my-2' style={{borderRadius: 8}}>
             <Row>
                 <Col><div className="p-1 body-text">Online Users</div></Col>
                 <Col>
                 <Container className='my-2 w-25' style={{marginLeft: '70%'}}>
                 <img
                     src="/Search2.png"
                     width="15"
                     height="15"
                 />
                 </Container>
                            
                 </Col>
                 <hr style={{width: '93%', marginLeft:'2%' }}/>
             </Row>
             <div className="scrollbar scrollbar-primary">

            </div>
         </Col>


    </Row>
    </>
  )
}

export default TimesheetsBirthdaysUsers;
