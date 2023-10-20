import "./Sidebar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { NavLink } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink className="nav-link" to="video" >
        <HomeOutlinedIcon/>
        <small>Home</small>
      </NavLink>
      <NavLink className="nav-link" to="subscriptions"  >
        <SubscriptionsOutlinedIcon/>
        <small>Subscription</small>
      </NavLink>
      <NavLink className="nav-link" to="group" >
        <Groups2OutlinedIcon/>
        <small>Group</small>
      </NavLink>
      <NavLink className="nav-link" to="message" >
        <MessageOutlinedIcon/>
        <small>Message</small>
      </NavLink>
      <NavLink className="nav-link" to="courses" >
        <BackupTableOutlinedIcon/>
        <small>courses</small>
      </NavLink>
      <NavLink className="nav-link" to="settings" >
        <SettingsIcon/>
        <small>Settings</small>
      </NavLink>

    </div>
  )
}

export default Sidebar
