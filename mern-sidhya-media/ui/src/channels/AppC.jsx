import React from "react";
import "./AppC.scss";
import NavBar from "../components/navbar/NavBar";
import ChannelBody from "./src/ChannelBody/ChannelBody";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";
import BodyNavbar from "./src/components/bodyNav/BodyNavbar";

const AppC = () => {
  return (
    <div className="indivisual-channel-main-container">
      <NavBar />
      <div className="indivisual-channel-main-body-container">
        <div className="indivisual-channel-advertise-box universal-box-shadow">
          <div className="adbox-left">
            <h3>Hey My Name Is Sidhya</h3>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              nobis ipsa corporis soluta incidunt excepturi voluptates
              perferendis autem fuga doloremque?
            </div>
            <NavLink className="exploreBTN">Explore</NavLink>
          </div>
          <div className="adbox-right"></div>
        </div>

        <div className="indivisual-channel-body-navigationbar">
            <BodyNavbar/>
        </div>


        <div className="induvisual-channel-content-body-box">
          <ChannelBody />
        </div>
        <div className="indivisual-channel-footer-box">
          <Stack direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default AppC;
