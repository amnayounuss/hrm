import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import records from './Records.json'


function OnlineUsersData() {
  return (
    <>
        <Row>
            <Col>
                <div className="p-1 body-text">Online Users</div></Col>
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
            {/* USERS scrollbar scrollbar-primary */}
            <Container className='' style={{ backgroundColor: '#0E0F12',  width: '328px', height: '307px' }}>
            {records.onlineEmployeesData.map((event, index) => (
                <Row className='d-flex ' key={index} >
                <Row className='mx-2 my-1'>
                <Col className='my-2 col-md-2 d-flex'>
                    <div className="frontimage">
                    <img src={event.employeeImage} alt="" />
                    </div>
                </Col>
                <Col className='my-2 col-md-8 d-flex flex-column '>
                    <p className='my-2' style={{ fontSize: '14px', lineHeight: '1px'}}>{event.name}</p>
                    <p style={{ fontSize: '12px', color: 'grey' }}>{event.designation}</p>
                </Col>
                <Col className='col-md-2 d-flex '>
                    <div className='online'></div>
                </Col>
                </Row>
                </Row>
            ))}
            </Container>
            {/* <Container className="" style={{backgroundColor: '#0E0F12', width: '328px', height: '307px'}}>
            {records.onlineEmployeesData.map((event, index) => (
            <div className='mx-3'>

            <Row className='d-flex' key={index}>
                <Col className='col-md-2 my-3 d-flex' style={{marginTop: '6px', marginBottom: "6px"}} >
                  <div className="frontimage">
                    <img src={event.employeeImage} alt=""/>
                  </div>                  
                </Col>
                <Col className='col-md-8 d-flex' style={{marginTop: '6px', marginBottom: "6px"}} >
                    <span> <p className='my-2' style={{fontSize: '14px'}}> {event.name} </p>
                    <p style={{fontSize: '12px', color: 'grey', lineHeight: '0px'}}> {event.designation} </p> </span>
                </Col>
                <Col className='col-md-2 d-flex' style={{marginTop: '6px', marginBottom: "6px"}}>
                    <div className='online'></div>
                </Col>
                
            </Row>
            </div>

             ))}
             </Container> */}
    </>
  )
}

export default OnlineUsersData