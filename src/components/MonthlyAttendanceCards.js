import Card from 'react-bootstrap/Card';
import records from './Records.json';


function MonthlyAttendanceCards () {
    
    const cards = records.monthlyAttendanceCards.map((card, index) => (
            <Card 
            key={index}
             className='attendancecard cardrow' style={{marginLeft: '-5px'}}>
            <Card.Body className='cardbg purple' >
                <Card.Text className='cardbg'  >
                {card.date}
                </Card.Text>
            </Card.Body>
            <p className='cardpara' >{card.day}</p>
            </Card>
          ));

  return (
    <>

    <div className="container mt-4">
      <div  className="row ">{cards}</div>
    </div>
    
    {/* <Row className='mx-2 '>
    <Card className='my-3 attendancecard cardrow'>
        <Card.Body className='cardbg purple' >
            <Card.Text className='cardbg'  >
            {records.monthlyAttendanceCards.date}
            </Card.Text>
        </Card.Body>
        <p className='cardpara' >{records.monthlyAttendanceCards.day}</p>
    </Card>
    </Row>
     */}
    </>
  );
}

export default MonthlyAttendanceCards;