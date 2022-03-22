import React from 'react'
import { Container, Image } from 'react-bootstrap'
// import { useSelector } from 'react-redux'
// import { selectUser } from '../../features/userSlice'

function Message({message, user,time}) {

  console.log(user)
  return (
    <Container className='d-flex' >
    <Image src={user.photo} roundedCircle style={{width:"2rem", height:"2rem"}}></Image>
    <Container>
        <p className='text-white'>{user.displayName}<span className='text-primary ms-4'>{
         new Date(time?.toDate()).toUTCString()}</span></p>
   
        <p className='text-white'>{message}</p>
    </Container>
 
    </Container >
  )
}

export default Message