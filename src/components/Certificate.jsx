import React from 'react'
import './Certificate.css'
import certificate from '../assets/new-certiciate-designcertificate.png'
import Faq from './Faq'
import courses from './Courses'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { set } from 'date-fns'
const Certificate = ({certificates,certIds}) => {

//   const courseNames = certificates.map(slug => {
//     return courses[slug];
// });
 console.log("certificates",certificates);
    console.log("certIds",certIds);
  
   

  function viewCerificate(id) {
    window.open(`https://upskill.tutedude.com/certificate/${id}`);
  }
 
  const faqs = [
    {
      head: "What happens if I don't complete all the assignments?",
      text: "If you don't finish all assignments, you won't qualify for a certificate. Make sure to complete and resubmit any that need revisions."
    },
    {
      head: "How do I know my assignments have been verified?",
      text: "After you message us on Chatra asking for your certificate, we'll review your course and assignments. We'll then confirm on Chatra whether everything is verified."
    },
    {
      head: "Can I still get a certificate if I skip some course content?",
      text: "No, you must complete all course content, including lessons and Assignments, to be eligible for a certificate."
    },
    {
      head: "How long does it take to receive the certificate after verification?",
      text: "Once we confirm you've completed all steps, your certificate will be sent to you immediately via the Chatra chat."
    }
  ]
  return (
    <div className='certif-cont'>
      {certIds?.length>0 ? <div className='certif-left' id='certif-cards'>
      <h2>Your Certificates</h2>
        {certIds?.map((c, index) => <div key={index} className='certif-card'>
        <h3>{courses[certificates[index]]}</h3>
        <p>Certificate Id:{certIds[index]}</p>
        <button className='certif-card-btn' onClick={()=>viewCerificate(certIds[index])}>View/Download Certificate</button>
        </div>)}
      </div> : 
      <div className='certif-left' >
        <div className='certif-steps-head-cont'>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <g clipPath="url(#clip0_1629_7001)">
              <path d="M33.5001 13.3328C33.5041 11.1851 32.9893 9.06834 31.9994 7.16244C31.0096 5.25654 29.574 3.61796 27.8148 2.38609C26.0556 1.15422 24.0248 0.365536 21.8953 0.0871251C19.7658 -0.191286 17.6006 0.048819 15.5838 0.787013C13.567 1.52521 11.7584 2.73964 10.3119 4.327C8.86528 5.91436 7.82355 7.82766 7.27529 9.90412C6.72703 11.9806 6.68847 14.1588 7.16289 16.2533C7.6373 18.3479 8.61066 20.2969 10.0001 21.9344V35.2444C9.9981 36.14 10.2495 37.0178 10.7254 37.7764C11.2012 38.5351 11.882 39.1436 12.6891 39.5316C13.4962 39.9197 14.3966 40.0714 15.2863 39.9693C16.176 39.8671 17.0186 39.5153 17.7168 38.9544L20.0001 37.1211L22.2818 38.9544C22.9805 39.5137 23.823 39.8642 24.7123 39.9656C25.6015 40.0669 26.5013 39.915 27.308 39.5272C28.1146 39.1395 28.7953 38.5318 29.2716 37.774C29.7479 37.0163 30.0005 36.1394 30.0001 35.2444V22.3111C32.2505 19.8625 33.4996 16.6583 33.5001 13.3328ZM20.1668 4.99943C21.815 4.99943 23.4261 5.48817 24.7966 6.40385C26.167 7.31953 27.2351 8.62102 27.8658 10.1437C28.4965 11.6665 28.6616 13.342 28.34 14.9585C28.0185 16.575 27.2248 18.0599 26.0594 19.2253C24.8939 20.3908 23.4091 21.1844 21.7926 21.506C20.1761 21.8275 18.5005 21.6625 16.9778 21.0318C15.4551 20.401 14.1536 19.3329 13.2379 17.9625C12.3222 16.5921 11.8335 14.9809 11.8335 13.3328C11.8361 11.1234 12.7149 9.00536 14.2772 7.44313C15.8394 5.8809 17.9575 5.00207 20.1668 4.99943ZM22.1835 32.4778C21.5641 31.9769 20.7917 31.7036 19.9951 31.7036C19.1986 31.7036 18.4262 31.9769 17.8068 32.4778L15.0001 34.7244V25.6211C18.1887 26.9692 21.7785 27.0147 25.0001 25.7478V34.7244L22.1835 32.4778Z" fill="#374957" />
            </g>
            <defs>
              <clipPath id="clip0_1629_7001">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className='certif-steps-head'>Discover the steps to earn your TuteDude certificate.</div>
        </div>
        <div className='certif-left-line'></div>
        <div className='certif-left-enroll-cont'>
          <div className='certif-step'>
            <div className='certif-left-enroll-icon-cont'>
              1
            </div>
            <div className='certif-left-enroll-steps-cont'>
              <div className='certif-left-enroll-steps-head'>Enroll in a course.</div>
              <div className='certif-left-enroll-steps-text'>Choose a course that fits your interests and offers a certificate.</div>
            </div>
          </div>
          <div className='certif-step'>
            <div className='certif-left-enroll-icon-cont'>
              2
            </div>
            <div className='certif-left-enroll-steps-cont'>
              <div className='certif-left-enroll-steps-head'>Complete the Course.</div>
              <div className='certif-left-enroll-steps-text'>Watch all the lessons. You need to finish all parts of the course.</div>
            </div>
          </div>
          <div className='certif-step'>
            <div className='certif-left-enroll-icon-cont'>
              3
            </div>
            <div className='certif-left-enroll-steps-cont'>
              <div className='certif-left-enroll-steps-head'>Do the Assignments.</div>
              <div className='certif-left-enroll-steps-text'>Finish all assignments. If there's feedback, make changes and submit them again.</div>
            </div>
          </div>
          <div className='certif-step'>
            <div className='certif-left-enroll-icon-cont'>
              4
            </div>
            <div className='certif-left-enroll-steps-cont'>
              <div className='certif-left-enroll-steps-head'>Chat on Chatra.</div>
              <div className='certif-left-enroll-steps-text'>Done with everything? Send us a message on Chatra to ask for your certificate.</div>
            </div>
          </div>
          <div className='certif-step'>
            <div className='certif-left-enroll-icon-cont done'>
              5
            </div>
            <div className='certif-left-enroll-steps-cont'>
              <div className='certif-left-enroll-steps-head'>Grab Your Certificate!!</div>
              <div className='certif-left-enroll-steps-text'>We'll check your course and assignments. Once all is good, you'll get your certificate in the Chatra chat.</div>
            </div>
          </div>
        </div>
        {/* <div className='certif-btn'>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <g clipPath="url(#clip0_51_342)">
              <path d="M24.4997 11.2459C24.3547 8.90628 23.5283 6.66022 22.1223 4.7846C20.7162 2.90897 18.7921 1.48576 16.587 0.690412C14.382 -0.104941 11.9924 -0.237673 9.71281 0.308577C7.43323 0.854827 5.36332 2.05618 3.75822 3.76455C2.15312 5.47292 1.083 7.61364 0.679776 9.92281C0.276548 12.232 0.557835 14.6087 1.48896 16.7599C2.42009 18.9112 3.96036 20.7429 5.91991 22.0294C7.87946 23.3159 10.1726 24.0009 12.5167 23.9999H18.9997C20.4579 23.9981 21.8557 23.418 22.8868 22.3869C23.9178 21.3559 24.4979 19.958 24.4997 18.4999V11.3399V11.2459ZM21.4997 18.4999C21.4997 19.1629 21.2363 19.7988 20.7675 20.2677C20.2987 20.7365 19.6628 20.9999 18.9997 20.9999H12.5167C11.2462 20.9992 9.9901 20.7306 8.83032 20.2118C7.67054 19.693 6.63313 18.9356 5.78574 17.9889C4.93459 17.0429 4.29554 15.9259 3.91145 14.7128C3.52736 13.4996 3.4071 12.2184 3.55874 10.9549C3.798 8.96309 4.69315 7.10748 6.10317 5.68044C7.51319 4.2534 9.35793 3.33605 11.3467 3.07291C11.7359 3.02435 12.1276 2.99997 12.5197 2.99991C14.6159 2.99391 16.6474 3.72523 18.2587 5.06591C19.1981 5.84622 19.9696 6.80881 20.5266 7.89556C21.0837 8.98231 21.4147 10.1707 21.4997 11.3889V18.4999Z" fill="#FFF6EC" />
              <path d="M10.0001 11.0001H13.0001C13.3979 11.0001 13.7795 10.8421 14.0608 10.5608C14.3421 10.2795 14.5001 9.89795 14.5001 9.50012C14.5001 9.1023 14.3421 8.72077 14.0608 8.43946C13.7795 8.15816 13.3979 8.00012 13.0001 8.00012H10.0001C9.6023 8.00012 9.22077 8.15816 8.93946 8.43946C8.65816 8.72077 8.50012 9.1023 8.50012 9.50012C8.50012 9.89795 8.65816 10.2795 8.93946 10.5608C9.22077 10.8421 9.6023 11.0001 10.0001 11.0001Z" fill="white" />
              <path d="M17.0001 12.9999H10.0001C9.6023 12.9999 9.22077 13.1579 8.93946 13.4392C8.65816 13.7205 8.50012 14.1021 8.50012 14.4999C8.50012 14.8977 8.65816 15.2792 8.93946 15.5605C9.22077 15.8418 9.6023 15.9999 10.0001 15.9999H17.0001C17.3979 15.9999 17.7795 15.8418 18.0608 15.5605C18.3421 15.2792 18.5001 14.8977 18.5001 14.4999C18.5001 14.1021 18.3421 13.7205 18.0608 13.4392C17.7795 13.1579 17.3979 12.9999 17.0001 12.9999Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_51_342">
                <rect width="24" height="24" fill="white" transform="translate(0.5)" />
              </clipPath>
            </defs>
          </svg>
          <div className='certif-btn-text'>Grab Certificate</div>
        </div> */}
      </div>}
      <div className='certif-right'>
        <div className='certif-dummy-img-cont'>
          <img alt='certificate' src={certificate}></img>
        </div>
        <div className='certif-faq-cont'>
          <div className='certif-faq-head'>Frequently Asked Questions</div>
          <div className='certif-faq-ques-cont'>
            {faqs.map((f, index) => <Faq key={index} head={f.head} text={f.text} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificate