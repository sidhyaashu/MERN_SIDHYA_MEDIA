import React from 'react'
import "./CourseCard.scss";
import Avatar from "@mui/material/Avatar";
import { NavLink } from 'react-router-dom';

const CourseCard = ({type}) => {
  return (
    <div className="course-card-container universal-box-shadow">
      <img
        src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/03/Small-Business1--1--2.jpg"
        alt=""
      />
      <div className="details-box">
        <div className="profile-info">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <p>Sidhya channel</p>
          <small>last update 3 days ago</small>
        </div>

        <div className="video-info">
          <div>
            <span>video 1 lg-eng length-45h Type {type} </span>
            <span>Instructor - Rama rao , shiva Shing</span>
            <span>* * * * * 5/5</span>
          </div>
          <NavLink className="card-navlink">Explore</NavLink>
        </div>
      </div>
    </div>
  );
}

export default CourseCard
