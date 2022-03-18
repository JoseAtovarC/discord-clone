import React from 'react'
import { Container } from 'react-bootstrap'
import ChatHeader from '../chatHeader'

function Chat() {
  return (
    <Container  fluid className='bg-dark vh-100  '>
  
        <ChatHeader></ChatHeader>
    
    </Container>
  )
}

export default Chat