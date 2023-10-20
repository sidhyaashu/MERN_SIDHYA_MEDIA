import React from 'react'
import "./Navbar.scss"
import Avatar from '@mui/material/Avatar';
import VideocamIcon from '@mui/icons-material/Videocam';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';


import {
  IconButton
} from "@mui/material"

const NavBar = () => {
  return (
    <nav>
      <div className="navbar_logo">
        <IconButton>
          <MenuIcon/>
        </IconButton>
        <div>
          <VideocamIcon/>
          <small>OneLive</small>
        </div>
      </div>
      <div className="navbar_search">
        <input type="text" placeholder='Search' />
          <SearchIcon/>
      </div>
      <div className="navbar_setting">
        <Groups2OutlinedIcon/>
        <MessageOutlinedIcon/>
        <NotificationsIcon/>
        <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" />
      </div>
    </nav>
  )
}

export default NavBar
