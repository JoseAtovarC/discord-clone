import React from 'react'
import {FaHashtag} from "react-icons/fa"
import {Navbar, Container, Nav,  Form, FormControl, Button} from "react-bootstrap"
import {BsFillBellFill} from "react-icons/bs"
import {MdEditLocation} from "react-icons/md"
import {MdPeopleAlt} from "react-icons/md"
import {MdSend} from "react-icons/md"
import {FiHelpCircle} from "react-icons/fi"

function ChatHeader() {
  return (
    <Navbar bg="dark" expand="lg">
  <Container fluid>
  <h3 className="text-light mt-4"><FaHashtag style={{color:"#ffff"}} ></FaHashtag> Youtube</h3>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        
      </Nav>
      <Form className="d-flex">
          <BsFillBellFill className='m-2' style={{color:"#ffff",fontSize:"2rem"}}></BsFillBellFill>
          <MdEditLocation className='m-2' style={{color:"#ffff",fontSize:"2rem"}}></MdEditLocation>
          <MdPeopleAlt className='m-2' style={{color:"#ffff",fontSize:"2rem"}}></MdPeopleAlt>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant='dark'> <MdSend style={{color:"#ffff",fontSize:"2rem"}}></MdSend></Button>
        <Button variant='dark'>    <FiHelpCircle style={{color:"#ffff",fontSize:"2rem"}}></FiHelpCircle></Button>
     
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default ChatHeader