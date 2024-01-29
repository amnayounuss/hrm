import React, { useEffect } from 'react'
import { Navbar, Container, NavDropdown, Form, Row, Col, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export function TopNav() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['isLoggedIn', 'username']);
useEffect(() => {
  if(sessionStorage.getItem('isLoggedIn')==='false'){
    navigate('/login');
  }
}, [])


  const handleLogout = async function (){

    sessionStorage.setItem('isLoggedIn', 'false');

    navigate('/login');
  };

  return (
    <>
    <Navbar className="bg-body-tertiary nav" data-bs-theme="dark" style={{width: '102%', marginLeft: '-2%'}}>
      <Container fluid style={{marginLeft: '1%'}}>
        <InputGroup fluid >
          <InputGroup.Text id="basic-addon1">
          <img
              src="/Search.png"
              width="15"
              height="15"
              className="d-inline-block align-top"
            />
          </InputGroup.Text>
          <Form.Control
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      
        <Row className='d-flex'>
          <Col xs="auto my-2">
          <img
              src="/bellvector.png"
              width="15"
              height="15"
              className="d-inline-block"
            />
          </Col>
          <Col className='d-flex'>
              <span className='small my-3 mx-2'> HR Department </span>
                <img
                  src="/iconwhitebg.png"
                  width="40"
                  height="40"
                  className='my-1'
                />
          </Col>
          <Col xs="auto">
          <NavDropdown  id="basic-nav-dropdown d-flex" >
              <Container>
              <NavDropdown.Item href="#action/3.1" onClick={handleLogout}>LogOut</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              </Container>
            </NavDropdown>
          </Col>
        </Row>
      </Container>
    </Navbar>
    </>
  )
}

export default TopNav;