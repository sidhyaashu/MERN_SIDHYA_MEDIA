import React from 'react'
import "./ChannelBody.scss"
import ChannelSidebar from '../sidebar/ChannelSidebar'
import { Outlet } from 'react-router-dom'


const ChannelBody = () => {
  return (
    <div className='channel-body-container' >
      <div className="channel-body-sidebar">
        <ChannelSidebar/>
      </div>
      <div className="channel-body-content">
        <Outlet/>
      </div>
    </div>
  )
}

export default ChannelBody
