
import React from 'react'
import { FaHashtag } from "react-icons/fa"
import { useDispatch } from 'react-redux'
import { setChannelInfo} from '../../features/appSlice'


function SidebarChannel({ channel }) {

 const dispatch= useDispatch()
  return (
    <div onClick={()=>{
      dispatch(setChannelInfo({
          channelId:channel.id,
          channelName:channel.channel.channelName
      }))
    }}>
      <p className="text-light "><FaHashtag style={{ color: "#ffff" }} >
        </FaHashtag> {channel.channel.channelName}</p>

    </div>
  )
}

export default SidebarChannel