import React from 'react'
import { Button, Container, Dropdown } from 'react-bootstrap'
import {BsPlusLg} from "react-icons/bs"
import SidebarChannel from '../sidebarChannel'
import {BsTelephone} from "react-icons/bs"
import {AiFillSignal} from "react-icons/ai"
import {BiInfoCircle} from "react-icons/bi"
import {CgProfile} from "react-icons/cg"
import {FaMicrophone} from "react-icons/fa"
import {BsHeadphones} from "react-icons/bs"
import {AiFillSetting} from "react-icons/ai"


function Sidebar() {
  return (
    <Container fluid className="vh-100 bg-primary">
        

<Button variant="primary p-4">JoseT App</Button>
    <Dropdown.Toggle split  id="dropdown-custom-2" />

    <div class="dropdown-divider"></div>
    <Dropdown.Toggle split  id="dropdown-custom-1" /> 
<Button variant="primary ">Text Channel</Button>

<BsPlusLg className=' m-2 p-0' style={{color:"#ffff"}} ></BsPlusLg>

<SidebarChannel></SidebarChannel>



<div class="dropdown-divider "></div>
{/* call */}

<div className='d-flex justify-content-between'>

<p className="text-light mt-4 "><AiFillSignal style={{color:"#4fb185",fontSize:"1.5rem"}}></AiFillSignal></p>

<div className='mt-4'>
<p className="text-info ">Voice Connected</p>
<p className="text-light text-center ">Strem</p>
</div>


<div className='mt-2'>
    <p>
    <BiInfoCircle  style={{color:"#ffff",fontSize:"1.5rem"}}></BiInfoCircle>
    </p>
    <p>
    <BsTelephone style={{color:"#ffff", fontSize:"1.5rem"}}></BsTelephone>
    </p>


</div>

</div>


<div class="dropdown-divider"></div>
{/* profile */}

<div className='d-flex justify-content-between'>
    <p className="text-light mt-4 "> <CgProfile style={{color:"#ffff", fontSize:"1.8rem"}}></CgProfile></p>

    <div className='mt-4'>
<p className="text-light ">@knljf</p>
<p className="text-light text-center ">jdhjshfsfj</p>
</div>
<div className='mt-2'>
    <p>
    <FaMicrophone  style={{color:"#ffff",fontSize:"1.5rem"}}></FaMicrophone>
    </p>
    <p>
    <BsHeadphones style={{color:"#ffff", fontSize:"1.5rem"}}></BsHeadphones>
    </p>
    <p>
    <AiFillSetting style={{color:"#ffff", fontSize:"1.5rem"}}></AiFillSetting>
    </p>


</div>

</div>


 
    </Container>

  )
}

export default Sidebar