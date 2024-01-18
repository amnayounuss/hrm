import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';


function OnlineUsersData() {
  return (
    <>
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
             <div className="scrollbar scrollbar-primary" style={{backgroundColor: '#0E0F12'}}>
             </div>
    </>
  )
}

export default OnlineUsersData