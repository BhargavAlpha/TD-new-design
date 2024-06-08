import React from 'react';
import './Card2.css';

function Card2({ course }) {
    const imgs = {
        "MERN Stack": "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/mern.png",
        "Web Development With PHP/MySQL": "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/webdev.png",
        "App Development": "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/Appdev.png",
        "Ethical Hacking": "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/ethical+hacking.png",
        "Java": "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/java.png",
        "Python": "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/python.png",
        "C++": "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/cpp.png",
        "Data Structures & Algorithms": "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/dsa.png",
        "Competetive Programming": "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/cp.png",
        "After Effects": "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/AE.png",
        "Photoshop": "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/photoshop.png",
        "Premiere Pro": "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/premierpro.png",
        "Digital Marketing": "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/digital+marketing.png",
        "Stock Market": "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/fma.png",
        "Technical Analysis": "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/TechAna.png",
        "Adobe Illustrator": "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/ai.png",
        "Financial Modelling & Valuation": "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/fmv.png",
        "Data Science": "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/datascience.png",
        "UI/UX": "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/uiux.png",
        "React Native": "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/reactNative.png",
        "Risk Management": "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/TechAna.png",
        "DBMS": "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/dbms.png",
        "DevOps": "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/devops.png",
        "React JS": "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/react.png"
    };

    return (
        <div className='card2-container'>
            <div className='card2-top'>
                <div className='card2-top-r1'>
                    <img src={imgs[course.name]} className='card2-img' alt={course.name} />
                    <span>{course.name}</span>
                </div>
                <div className='card2-line'></div>
                <div className='card2-top-r2'>
                    <div className='card2-lec-dur-cont'>
                        <div className='card2-lec'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.00001 15.1668C11.6819 15.1668 14.6667 12.1821 14.6667 8.50016C14.6667 4.81826 11.6819 1.8335 8.00001 1.8335C4.31811 1.8335 1.33334 4.81826 1.33334 8.50016C1.33334 12.1821 4.31811 15.1668 8.00001 15.1668ZM7.129 11.064L10.2758 9.20614C10.797 8.89844 10.797 8.10189 10.2758 7.79418L7.129 5.93629C6.62248 5.63724 6.00001 6.02648 6.00001 6.64227V10.3581C6.00001 10.9738 6.62248 11.3631 7.129 11.064Z" fill="#992E9D" fillOpacity="0.8"/>
                            </svg>
                            <span>{course.lectures}</span>
                        </div>
                        <div className='card2-dur'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.00001 15.1668C11.6819 15.1668 14.6667 12.1821 14.6667 8.50016C14.6667 4.81826 11.6819 1.8335 8.00001 1.8335C4.31811 1.8335 1.33334 4.81826 1.33334 8.50016C1.33334 12.1821 4.31811 15.1668 8.00001 15.1668ZM7.129 11.064L10.2758 9.20614C10.797 8.89844 10.797 8.10189 10.2758 7.79418L7.129 5.93629C6.62248 5.63724 6.00001 6.02648 6.00001 6.64227V10.3581C6.00001 10.9738 6.62248 11.3631 7.129 11.064Z" fill="#992E9D" fillOpacity="0.8"/>
                            </svg>
                            <span>{course.duration}</span>
                        </div>
                    </div>
                    <div className='card2-access-ment-cont'>
                        <div className='card2-access'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <g clipPath="url(#clip0_198_482)">
                                    <path d="M12 4.5C10.2067 4.5 8.82933 5.73667 8 6.74667C7.17067 5.73667 5.79333 4.5 4 4.5C2.93913 4.5 1.92172 4.92143 1.17157 5.67157C0.421427 6.42172 0 7.43913 0 8.5C0 9.56087 0.421427 10.5783 1.17157 11.3284C1.92172 12.0786 2.93913 12.5 4 12.5C5.79333 12.5 7.17067 11.2633 8 10.2533C8.82933 11.2633 10.2067 12.5 12 12.5C13.0609 12.5 14.0783 12.0786 14.8284 11.3284C15.5786 10.5783 16 9.56087 16 8.5C16 7.43913 15.5786 6.42172 14.8284 5.67157C14.0783 4.92143 13.0609 4.5 12 4.5ZM4 10.5C3.46957 10.5 2.96086 10.2893 2.58579 9.91421C2.21071 9.53914 2 9.03043 2 8.5C2 7.96957 2.21071 7.46086 2.58579 7.08579C2.96086 6.71071 3.46957 6.5 4 6.5C5.194 6.5 6.26667 7.68867 6.826 8.5C6.26667 9.31133 5.194 10.5 4 10.5ZM12 10.5C10.806 10.5 9.73333 9.31133 9.174 8.5C9.73333 7.68867 10.806 6.5 12 6.5C12.5304 6.5 13.0391 6.71071 13.4142 7.08579C13.7893 7.46086 14 7.96957 14 8.5C14 9.03043 13.7893 9.53914 13.4142 9.91421C13.0391 10.2893 12.5304 10.5 12 10.5Z" fill="#992E9D" fillOpacity="0.8"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_198_482">
                                        <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>Lifetime Access</span>
                        </div>
                        <div className='card2-ment'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path d="M1.33331 6.5914C1.33331 9.83335 4.01293 11.5609 5.97447 13.1073C6.66665 13.6529 7.33331 14.1667 7.99998 14.1667C8.66665 14.1667 9.33331 13.6529 10.0255 13.1073C11.987 11.5609 14.6666 9.83335 14.6666 6.5914C14.6666 3.34944 10.9999 1.05031 7.99998 4.16709C5.00009 1.05031 1.33331 3.34944 1.33331 6.5914Z" fill="#992E9D" fillOpacity="0.8"/>
                            </svg>
                            <span>Instant Membership</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card2-bottom' >
                <span>Know More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                    <path d="M14.5155 11.1606L8.43759 5.26673C8.05834 4.89897 7.33331 5.12189 7.33331 5.60627L7.33331 17.3941C7.33331 17.8784 8.05834 18.1014 8.43759 17.7336L14.5155 11.8397C14.717 11.6443 14.717 11.356 14.5155 11.1606Z" fill="#7F2781"/>
                </svg>
            </div>
        </div>
    );
}

export default Card2;
