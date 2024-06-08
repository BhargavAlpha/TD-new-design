import React from 'react'
import './Dashboard.css'
import Card from './Card.jsx'
import { useState } from 'react'
import { useEffect,useRef } from 'react'

import BrowseCourses from './BrowseCourses.jsx'
function Dashboard({enrolledCourses,email,courses,certificates,certIds}) {

    const [coursesScrollPercentage, setCoursesScrollPercentage] = useState(0);
    const scrollRef = useRef(null);

    const certificateMap = certificates.reduce((acc, cert, index) => {
        acc[cert] = certIds[index];
        return acc;
      }, {});

      useEffect(() => {
        const handleScroll = () => {
          const scrollContainer = scrollRef.current;
          const scrollTop = scrollContainer.scrollLeft;
          const scrollHeight = scrollContainer.scrollWidth - scrollContainer.clientWidth;
          const scrolled = (scrollTop / scrollHeight) * 100;
          document.getElementById("myBar").style.width = scrolled + "%";
        };
    
        const scrollContainer = scrollRef.current;
        scrollContainer.addEventListener("scroll", handleScroll);
    
        return () => {
          scrollContainer.removeEventListener("scroll", handleScroll);
        };
      }, []);
    

  return (
    <div className='dashboard'>
        <div className='dash-header'>
            <div className='dash-header-left'>
                <div className='dash-header-offer'>40% <br/> OFF</div>
                <h1>
                Upgrade your SKILLS by enrolling into any 3 course at just ₹799
                </h1>
                <div style={{display:"flex",gap:"10px"}}>
                    <div className='dash-incr-refund'>Increase Refund Validity by 1 Year*</div>
                    <button className='dash-explore-btn'>Explore Now</button>
                </div>
            </div>
            <div className='dash-header-right'>
            <div className='dash-header-offer'>40% <br/> OFF</div>
            <h1>
            Explore Our Pro Pack Bundles and Accelerate Your Career @₹2,999
                </h1>
                <div style={{display:"flex",gap:"10px"}}>
                    <div className='dash-incr-refund'>Increase Refund Validity by 2 Years*</div>
                    <button className='dash-explore-btn'>Explore Now</button>
                </div>
            </div>
        </div>
        <div className='dash-courses'>
            <h1>My courses</h1>
            <div className='cards-scroller' ref={scrollRef}>
             {Object.keys(enrolledCourses).map((enrolledCourse)=>{
                const certId=certificateMap[enrolledCourse] ? certificateMap[enrolledCourse] : null;
                return <Card key={enrolledCourse} slug={enrolledCourse} date={enrolledCourses[enrolledCourse]} email={email} certId={certId}/>
             })}
            </div>
            <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>

        </div>
        <BrowseCourses courses={courses} />
        

    </div>
  )
}

export default Dashboard