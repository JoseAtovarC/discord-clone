import React, { useState, useEffect } from 'react'
import { Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap'
import ChatHeader from '../chatHeader'
import { IoAddCircleOutline } from "react-icons/io5"
import { MdCardGiftcard } from "react-icons/md"
import { AiOutlineGif } from "react-icons/ai"
import { BsEmojiSmileFill } from "react-icons/bs"
import Message from '../message'
import { useSelector } from 'react-redux'
import { selectChannelId, selectChannelName } from "../../features/appSlice"
import { selectUser } from '../../features/userSlice'
import db from '../../firebase'
import { addDoc, collection, doc, onSnapshot, orderBy, serverTimestamp } from 'firebase/firestore'

function Chat() {
  const user = useSelector(selectUser);
  const id = useSelector(selectChannelId);
  const channel = useSelector(selectChannelName)
  const [input, setinput] = useState("")
  const [message, setmessage] = useState([])


  useEffect(() => {

    const fun = async () => {


      try {
        if (id) {


          const docRef = doc(db, "channels", id);

          const messg = collection(docRef, "message")

          onSnapshot(messg, (querySnap) => {
            console.log(querySnap)
            const ch = [];
            querySnap.forEach((doc) => (
              ch.push(doc.data())


            ))
            setmessage(ch)
          })



        }
      }
      catch (err) {
        console.log(err)

      }

    }
    fun()



  }, [id])

  console.log(message)

  const sendMessage = async (e) => {
    e.preventDefault()

    const docRef = doc(db, "channels", id);
    addDoc(collection(docRef, "message"), {
      timestamp: serverTimestamp(),
      message: input,
      user: user
    })

    setinput("")
  }

  return (
    <Container fluid className='bg-dark vh-100  d-flex flex-column'>

      <ChatHeader name={channel}></ChatHeader>

      <Container fluid style={{ flex: 1 }}>
        {message.length === 0 ? "" : message.map(v => {
          return <Message message={v.message} time={v.timestamp} user={v.user}></Message>
        })}

      </Container>


      <Container className=' p-4 bg-primary' >
        <Row>

          <Col xs={8}>
            <Form className='d-flex text-white'>
              <IoAddCircleOutline className='me-4' style={{ color: "#ffff", fontSize: "3rem" }}></IoAddCircleOutline>
              <FormControl
                value={input}
                className='text-white'
                onChange={(e) => setinput(e.target.value)}
                disabled={!id}
                type="search"
                placeholder={`message to #${channel}`}
                aria-label="Search"
              />
              <Button onClick={sendMessage}></Button>
            </Form>

          </Col>


          <Col xs={4} className='d-flex justify-content-end'>
            <MdCardGiftcard className='me-3' style={{ color: "#ffff", fontSize: "2rem" }}></MdCardGiftcard>
            <AiOutlineGif className='me-3' style={{ color: "#ffff", fontSize: "2rem" }}></AiOutlineGif>
            <BsEmojiSmileFill className='me-3' style={{ color: "#ffff", fontSize: "2rem" }}></BsEmojiSmileFill>
          </Col>
        </Row>
      </Container>


    </Container>
  )
}

export default Chat