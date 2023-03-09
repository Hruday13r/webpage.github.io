import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import Sonnet from '../components/Sonnet';
import Logout from './Logout';
import ManageStudent from './ManageStudent';

function Login() {
  return (
    <>
     <div className='Studentslogin'>
        <h1 className='logo'>LOGO</h1>
       <span className='companyemail' >
       <i class="fa-solid fa-user animal" ></i> username@revolution.in
       </span>
        </div>
        
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" className='Main-content'>
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column btn-side" >
            <Nav.Item className='btn-main'>
              <Nav.Link eventKey="first" className='btn-name'><i class="fa-solid fa-user animal" ></i>Add Students</Nav.Link>
            </Nav.Item >
            <Nav.Item className='btn-main'>
              <Nav.Link eventKey="second" className='btn-name'><i class="fa-solid fa-list animal"></i>Manage Students</Nav.Link>
            </Nav.Item>
            <Nav.Item className='btn-main'>
              <Nav.Link eventKey="third" className='btn-name'><i class="fa-solid fa-right-from-bracket animal"></i>Logout</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Sonnet />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <ManageStudent />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Logout />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </>
  );
}

export default Login;