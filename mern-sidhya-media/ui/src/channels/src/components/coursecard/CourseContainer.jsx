import React from 'react'
import "./CourseContainer.scss";
import CourseCard from './CourseCard';


const CourseContainer = ({type}) => {
  return <div className='course-container'>
    <CourseCard type={type} />
    <CourseCard type={type} />
    <CourseCard type={type} />
    <CourseCard type={type} />
    <CourseCard type={type} />
    <CourseCard type={type} />
    <CourseCard type={type} />
    <CourseCard type={type} />
    <CourseCard type={type} />
    <CourseCard type={type} />

  </div>;
}

export default CourseContainer
