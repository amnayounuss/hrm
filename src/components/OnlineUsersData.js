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

            <Container style={{ backgroundColor: '#0E0F12', width: '99%', height: '307px' }}>
            <Row style={{ height: '307px'}}>
                {records.onlineEmployeesData.map((data, index) => (
                <Row key={index} className='mx-3' style={{ width: '90%', height: '55px' }}>
                    <Col className='frontimage col-md-3 my-2 d-flex'>
                    <img src={data.employeeImage} alt="" />
                    </Col>
                    <Col className='col-md-7 d-flex'>
                    <span>
                        <p className='my-2' style={{ fontSize: '14px' }}>{data.name}</p>
                        <p style={{ fontSize: '12px', color: 'grey', lineHeight: '0px' }}>{data.designation}</p>
                    </span>
                    </Col>
                    <Col className='col-md-2 d-flex my-4'>
                    <div className={data.online ? 'online' : 'offline'}></div>
                    </Col>
                </Row>
                ))}
            </Row>

            
            </Container>
            
            {/* <Container  style={{backgroundColor: '#0E0F12', width: '328px', height: '307px'}}>
            <Row className='d-flex ' style={{height: '307px'}}  > 
                <Row className='d-flex mx-3' style={{width: '90%', height: '55px', marginTop: '30px'}}>
                    <Col className='frontimage col-md-3 my-2  d-flex'  >
                        <img src="/image2.jpg" alt=""/>
                    </Col>
                    <Col className='col-md-7 d-flex' >
                        <span> <p className='my-2' style={{fontSize: '14px'}}> Ebad Ahmed</p>
                        <p style={{fontSize: '12px', color: 'grey', lineHeight: '0px'}}> UX Designer </p> </span>
                    </Col>
                    <Col className='col-md-2 d-flex my-4' >
                        <div className='online'></div>
                    </Col>
                </Row>
                <Row className='d-flex mx-3' style={{width: '90%', height: '55px'}}>
                    <Col className='frontimage col-md-3 my-2  d-flex'  >
                        <img src="/image2.jpg" alt=""/>
                    </Col>
                    <Col className='col-md-7 d-flex' >
                        <span> <p className='my-2' style={{fontSize: '14px'}}> Ebad Ahmed</p>
                        <p style={{fontSize: '12px', color: 'grey', lineHeight: '0px'}}> UX Designer </p> </span>
                    </Col>
                    <Col className='col-md-2 d-flex my-4' >
                        <div className='online'></div>
                    </Col>
                </Row>
                <Row className='d-flex mx-3' style={{width: '90%', height: '55px'}}>
                    <Col className='frontimage col-md-3 my-2  d-flex'  >
                        <img src="/image2.jpg" alt=""/>
                    </Col>
                    <Col className='col-md-7 d-flex' >
                        <span> <p className='my-2' style={{fontSize: '14px'}}> Ebad Ahmed</p>
                        <p style={{fontSize: '12px', color: 'grey', lineHeight: '0px'}}> UX Designer </p> </span>
                    </Col>
                    <Col className='col-md-2 d-flex my-4' >
                        <div className='online'></div>
                    </Col>
                </Row>
                <Row className='d-flex mx-3' style={{width: '90%', height: '55px'}}>
                    <Col className='frontimage col-md-3 my-2  d-flex'  >
                        <img src="/image2.jpg" alt=""/>
                    </Col>
                    <Col className='col-md-7 d-flex' >
                        <span> <p className='my-2' style={{fontSize: '14px'}}> Ebad Ahmed</p>
                        <p style={{fontSize: '12px', color: 'grey', lineHeight: '0px'}}> UX Designer </p> </span>
                    </Col>
                    <Col className='col-md-2 d-flex my-4' >
                        <div className='online'></div>
                    </Col>
                </Row>
            </Row>
            </Container> */}
            
    </>
  )
}

export default OnlineUsersData