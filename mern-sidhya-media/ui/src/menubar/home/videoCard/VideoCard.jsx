import React from "react";
import "./VideoCard.scss";
import { NavLink } from "react-router-dom";

const VideoCard = () => {
  return (
    <NavLink className="video-card-container" to="/channel/1" >
      <div className="video">
        <iframe src="https://www.youtube.com/embed/VIDEO_ID"></iframe>
      </div>
      <div className="title">Channel Name</div>
      <div className="description">Video Description</div>
    </NavLink>
  );
};

export default VideoCard;
