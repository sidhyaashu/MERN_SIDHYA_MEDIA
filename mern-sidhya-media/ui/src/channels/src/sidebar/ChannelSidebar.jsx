import React from 'react'
import "./ChannelSidebar.scss"
import { NavLink } from 'react-router-dom'
import BackupTableOutlinedIcon from "@mui/icons-material/BackupTableOutlined";



const sidebarElm = [
  {
    id: 1,
    name: "Popular",
    logo: <BackupTableOutlinedIcon />,
    path: "popular",
  },
  {
    id: 2,
    name: "It & Software",
    logo: <BackupTableOutlinedIcon />,
    path: "it-software",
  },
  {
    id: 3,
    name: "Datascience",
    logo: <BackupTableOutlinedIcon />,
    path: "datascience",
  },
  {
    id: 4,
    name: "Artificial Intelegence",
    logo: <BackupTableOutlinedIcon />,
    path: "artificalintegelence",
  },
  {
    id: 5,
    name: "Matchine Learning",
    logo: <BackupTableOutlinedIcon />,
    path: "matchinelearning",
  },
  {
    id: 6,
    name: "Digital Marketing",
    logo: <BackupTableOutlinedIcon />,
    path: "dig-marketing",
  },
  {
    id: 7,
    name: "Chat GPT & Generative AI",
    logo: <BackupTableOutlinedIcon />,
    path: "chat-gpt-gener-ai",
  },
  {
    id: 8,
    name: "Bigdata",
    logo: <BackupTableOutlinedIcon />,
    path: "big-data",
  },
  {
    id: 9,
    name: "UI/UX ",
    logo: <BackupTableOutlinedIcon />,
    path: "ui-ux",
  },
  {
    id: 10,
    name: "Web Applications",
    logo: <BackupTableOutlinedIcon />,
    path: "w-apps",
  },
  {
    id: 11,
    name: "Android Development",
    logo: <BackupTableOutlinedIcon />,
    path: "a-development",
  },
  {
    id: 12,
    name: "For Collage",
    logo: <BackupTableOutlinedIcon />,
    path: "f-collage",
  },
];

const component = sidebarElm.map((e,i)=>{
  return <NavLink key={i} to={e.path} className="indivisual-sidebar-elements">
    {e.logo}
    <small>
      {e.name}
    </small>
  </NavLink>
})

const ChannelSidebar = () => {
  return (
    <div className="channelSidebar universal-box-shadow">{component}</div>
  );
}

export default ChannelSidebar
