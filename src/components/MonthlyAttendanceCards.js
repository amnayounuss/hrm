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

    <div className="container mt-3">
      <div  className="row mx-1 ">{cards}</div>
    </div>
    
   
    </>
  );
}

export default MonthlyAttendanceCards;