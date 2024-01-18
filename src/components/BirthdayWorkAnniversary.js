import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import records from './Records.json';

export default function BirthdayWorkAnniversary() {
  return (
    <>
        <Row>
              <div className="p-2 body-text">Monthly Birthdays/ Work Anniversaries </div>
            </Row>
            <Row>
              <hr style={{width: '93%', marginLeft:'2%' }}/>
            </Row>
             {/* inner section */}
            {records.eventsData.map((event, index) => (
            <Row className='d-flex' key={index}>
            <Container className='my-2' style={{width: 328,  height: 118, backgroundColor: '#0E0F12'}}>
                <Row>
                  <p className='my-2' style={{ color: '#97C121' }}>{event.type}</p>
                </Row>
                <Row style={{height: '2px'}}>
                  <hr style={{width: '97%', marginLeft:'1%' }}/>
                </Row>
                <Row className='h-50 my-2'>
                <Col className='h-75 mx-3 d-flex col-md-2' >
                  <div className="images" style={{marginLeft: "-15px"}}>
                  <div className="frontimage">
                    <img src={event.employeeImage} alt=""/>
                  </div>
                  <div className="backimage">
                    <img src={event.eventImage} alt=""/>
                  </div>
                  </div>
                </Col>
                <Col className='d-flex col-md-5' style={{marginLeft: "-25px"}}>
                    <span> <p className='my-2' style={{fontSize: '14px', lineHeight: '3px'}}> {event.name} </p>
                    <p style={{fontSize: '12px', color: 'grey'}}> {event.designation} </p> </span>
                </Col>
                <Col className='col-md-3'>
                  <Container className='eventsbox mx-4' style={{ width: 68, height: '64'}}>
                    <h3 style={{fontSize: '24px'}}> {event.date} </h3>
                    <p style={{fontSize: '14px'}}> {event.month} </p>
                  </Container>    
                </Col>
                </Row>
                </Container>
            </Row>
             ))}
           
    </>
  )
}
