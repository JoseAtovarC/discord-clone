import React from 'react';
import { Counter } from './features/Counter';
import Sidebar from './components/sidebar';
import Chat from './components/chat';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    < >
    <Container  fluid>
      <Row >
        <Col xs={2} className="p-0">
        <Sidebar></Sidebar>
        </Col>

        <Col xs={10} className="p-0">
        
    <Chat></Chat>
        </Col>

      </Row>
    
    </Container>

  
 
    </>
  );
}

export default App;
