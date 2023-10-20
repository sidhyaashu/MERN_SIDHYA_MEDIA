import React from 'react'
import "./BodyNavbar.scss";
import { NavLink, Outlet } from 'react-router-dom';

const bodynavbar = [
    {
        id:1,
        name:"ALL",
        path:"/",
    },
    {
        id:2,
        name:"COURSES",
        path:"/",
    },
    {
        id:3,
        name:"LIVE COURSE",
        path:"/",
    },
    {
        id:4,
        name:"UPCOMING COURSES",
        path:"/",
    },
    {
        id:5,
        name:"INFORMATIONAL",
        path:"/",
    },
    {
        id:6,
        name:"CHANNELS",
        path:"/",
    },
    {
        id:7,
        name:"ABOUT",
        path:"/",
    },
    
]

const content = bodynavbar.map((e, i) => (
  <NavLink key={i} className="navbar-navlink">
    <small>{e.name}</small>
  </NavLink>
));

const BodyNavbar = () => {
  return <div className="body-navbar">
    {content}
    {/* <Outlet/> */}
  </div>;
}

export default BodyNavbar
