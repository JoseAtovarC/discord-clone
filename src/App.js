import React,{useEffect} from 'react';
import Sidebar from './components/sidebar';
import Chat from './components/chat';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { login, selectUser, logout } from './features/userSlice';
import Login from './components/login';
import { auth } from './firebase';
import {onAuthStateChanged} from "firebase/auth"

function App() {
  const disptach= useDispatch()
 const user= useSelector(selectUser)

 useEffect(() => {
   onAuthStateChanged(auth,(authUser)=>{
     console.log( "user is", authUser)
     if(authUser){
       disptach(login({
         uid: authUser.uid,
         photo: authUser.photoURL,
         email: authUser.email,
         displayName: authUser.displayName
       }))
     }else{
       disptach(logout())

     }
   })
 
   
 }, [disptach])
 

  return (
    < >
    {user? 
     <Container  fluid>
     <Row >
       <Col xs={2} className="p-0">
       <Sidebar></Sidebar>
       </Col>

       <Col xs={10} className="p-0">
       
   <Chat></Chat>
       </Col>

     </Row>
   
   </Container>:<Login></Login>
  
  }
 

  
 
    </>
  );
}

export default App;
