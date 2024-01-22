import Card from 'react-bootstrap/Card';
import { CardGroup, Row } from 'react-bootstrap';
import records from './Records.json';

function AttendanceCards() {
  
  return (   
    <>
      {/* <Row > */}
        <CardGroup>
          {records.attendanceCards.map((attendanceCards, index) => (
            <Card 
            key={index} 
            className={`mx-2 my-3 ${attendanceCards.className}`}>
              <Card.Body>
                <Card.Title>{attendanceCards.Title}</Card.Title>
                <Card.Text style={{ color: attendanceCards.fontColor }}>
                  {attendanceCards.Text}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      {/* </Row> */}
    </>
    
    
  );
}

export default AttendanceCards;