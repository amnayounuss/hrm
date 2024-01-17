import React from 'react';
import { Col, Badge, Stack, Row } from 'react-bootstrap';
import PieChart from './PieChart';
import records from './Records.json';

function RecentRequestandUnit() {

  return (
    <>
    <Row className='mx-2' style={{width: '100%',display: 'flex'}}>
        <Col className='text-light bg-dark my-2' style={{ borderRadius: 8, marginRight: '1%' }}>
          <div className="p-2 mx-2 my-1 body-text">Recent Requests</div>
          <hr style={{ width: '100%', marginLeft: '0' }} />

          {records.request.map((request, index) => (
            <React.Fragment key={index}>
              <Row className='d-flex' style={{ width: '100%' }}>
                <Stack className="fw-lighter small" direction="horizontal">
                  <div className="p-1 d-flex">
                    {request.code} <br />
                    {request.name} <br />
                    {request.designation}
                  </div>
                  <div className="p-2 d-flex mx-3">{request.date}</div>
                  <div className="p-3 d-flex mx-2">
                    <span className={`dot my-1 d-flex mx-1 ${request.type}`}></span> {request.title}
                  </div>
                  <Col></Col>
                  <div className="p-1 ">
                    <img src={request.tickimage} alt="" />
                  </div>
                  <div className="p-1">
                    <img src={request.crossimage} alt="" />
                  </div>
                </Stack>
                <hr style={{ width: '100%', marginLeft: '10px' }} />
              </Row>
            </React.Fragment>
          ))}
          <Row>
            <div className="text-center card-subtitle-1 my-2">View All</div>
          </Row>
        </Col>

        {/* Second column */}
        <Col className='text-light my-2 bg-dark' style={{ width: '100%', borderRadius: 8 }}>
          <div className="p-2 mx-2 my-1 body-text">Today's Unit Strength</div>
          <hr style={{ width: '100%', marginLeft: '0' }} />

          <Row>
            <Col>
              <Row className='mx-2'>
                <Col className='my-2'>
                  <img src={records.bitsimage.img} width="34" height="34.89" alt="" />
                </Col>
              </Row>
              <Row className='mx-2'>
                <Col>
                  <h5 className='my-2 lead.lead-text'>{records.department.title}</h5>
                  <p className="fw-lighter body-text">Users 68</p>
                </Col>
              </Row>

              <Stack className="mx-2" data-bs-theme="dark" direction="horizontal" style={{ width: '100%', marginTop: '30px' }} gap={2}>
                  {records.stackData.slice(0, 2).map((stack, index) => (
                    <React.Fragment key={index}>
                      <Badge className={`${stack.className} my-2`} bg="">
                        {' '}
                      </Badge>
                      <span className='mx-2'>{`${stack.count} ${stack.label} `}</span>
                    </React.Fragment>
                  ))}
                </Stack>

                <Stack className="mx-2" data-bs-theme="dark" direction="horizontal" style={{ width: '100%' }} gap={2}>
                  {records.stackData.slice(2).map((stack, index) => (
                    <React.Fragment key={index}>
                      <Badge className={`${stack.className} my-2`} bg="">
                        {' '}
                      </Badge>
                      <span className='mx-2'>{`${stack.count} ${stack.label}` }</span>
                    </React.Fragment>
                  ))}
                </Stack>


            </Col>

            {/* Second column Doughnut chart */}
            <Col style={{ marginTop: '15px' }}>
              <PieChart/>
            </Col>
          </Row>
          <hr style={{ width: '100%', marginLeft: '0', marginTop: '35px' }} />

          <Row className='my-2'>
            <div className="text-center">
              <Row>
                <Col></Col>
                <Col></Col>
                <Col>
                  <img src={records.leftbutton.img} width="34" height="34.89" alt="" />
                </Col>
                <Col>
                  <img src={records.righbutton.img} width="34" height="34.89" alt="" />
                </Col>
                <Col></Col>
                <Col></Col>
              </Row>
            </div>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default RecentRequestandUnit;
