import React from 'react'
import {signInWithPopup} from "firebase/auth"
import { auth,provider } from '../../firebase'
import { Button, Col, Container } from 'react-bootstrap'

function Login() {
  

    const handleSingIn =()=>{
        signInWithPopup(auth,provider)
        .catch(err=> alert(err.message))
    }

    
    
    
  return (
    <Container className='d-flex flex-column p-4'>
    <img src="https://tvazteca.brightspotcdn.com/6b/59/87c3b9a745ef85cfd40160081667/discord.png" 
    alt="" />

        <Col className='d-flex justify-content-center'>
        <Button onClick={handleSingIn} className='text-white w-25 ' variant='warning'>SIGN IN</Button>
        </Col>
    
    </Container>
  )
}

export default Login