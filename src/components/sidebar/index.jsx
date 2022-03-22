import React,{useState, useEffect} from 'react'
import { Button, Container, Dropdown } from 'react-bootstrap'
import { BsPlusLg } from "react-icons/bs"
import SidebarChannel from '../sidebarChannel'
import { BsTelephone } from "react-icons/bs"
import { AiFillSignal } from "react-icons/ai"
import { BiInfoCircle } from "react-icons/bi"
import { Image } from 'react-bootstrap'
import { FaMicrophone } from "react-icons/fa"
import { BsHeadphones } from "react-icons/bs"
import { AiFillSetting } from "react-icons/ai"
import { selectUser } from '../../features/userSlice'
import { useSelector } from 'react-redux'
import {signOut} from "firebase/auth"
import { auth } from '../../firebase'
import db from '../../firebase'
import { collection,  onSnapshot,addDoc, getDocs  } from 'firebase/firestore'



function Sidebar() {

    const user = useSelector(selectUser)
    const [channel, setchannel] = useState([])

    useEffect(() => {

     const q= collection(db,"channels");
 

         onSnapshot(q, (querySnapshot) => {
            const ch = []; 
           querySnapshot.forEach((doc) =>( 
            ch.push({id:doc.id,channel:doc.data()})


           )) 
           setchannel(ch)
    })
    
      
    }, [])

  
    
    const handleChannel= async()=>{
        const channelName= prompt("enter a new channel name")

        if(channelName){
             addDoc(collection(db,"channels"),{
                channelName
        })
        }
       
    }

    return (
        <Container fluid className="vh-100 bg-primary d-flex flex-column">

            <Container className='p-0 m-0' >
                <Button variant="primary p-3">JoseT App</Button>
                <Dropdown.Toggle split id="dropdown-custom-2" />
            </Container>


            <div className="dropdown-divider"></div>

            <Container fluid className='d-flex mb-4 justify-content-around'>
                <Dropdown.Toggle split id="dropdown-custom-1" />
                <Button variant="primary ">Text Channel</Button>

                <BsPlusLg onClick={handleChannel} className=' mt-3 p-0' style={{ color: "#ffff" }} ></BsPlusLg>
            </Container>


                    <Container  style={{flex:1}}>
                        
                    { channel=== 0 ? "":  channel.map((v,i)=>{
                    return <SidebarChannel channel={v} key={i}></SidebarChannel>

                })
                    
                }
                        </Container>

              
           



            <div className="dropdown-divider "></div>
            {/* call */}

            <div className='d-flex justify-content-between'>

                <p className="text-light mt-4 "><AiFillSignal style={{ color: "#4fb185", fontSize: "1.5rem" }}></AiFillSignal></p>

                <div className='mt-4'>
                    <p className="text-info ">Voice Connected</p>
                    <p className="text-light text-center ">Strem</p>
                </div>


                <div className='mt-2'>
                    <p>
                        <BiInfoCircle style={{ color: "#ffff", fontSize: "1.5rem" }}></BiInfoCircle>
                    </p>
                    <p>
                        <BsTelephone style={{ color: "#ffff", fontSize: "1.5rem" }}></BsTelephone>
                    </p>


                </div>

            </div>


            <div className="dropdown-divider"></div>
            {/* profile */}

            <div className='d-flex justify-content-between'>
               
                <Image
                    onClick={()=>signOut(auth)}
                    src={user.photo} className="mt-4 me-4" roundedCircle style={{ width: "2rem", height: "2rem" }}></Image>
                

                <div className='mt-4'>
                    <p className="text-light ">{user.displayName}</p>
                    <p className="text-light text-center ">#{user.uid.substring(0, 5)}</p>
                </div>
                <div className='mt-2'>
                    <p>
                        <FaMicrophone style={{ color: "#ffff", fontSize: "1.5rem" }}></FaMicrophone>
                    </p>
                    <p>
                        <BsHeadphones style={{ color: "#ffff", fontSize: "1.5rem" }}></BsHeadphones>
                    </p>
                    <p>
                        <AiFillSetting style={{ color: "#ffff", fontSize: "1.5rem" }}></AiFillSetting>
                    </p>


                </div>

            </div>



        </Container>

    )
}

export default Sidebar