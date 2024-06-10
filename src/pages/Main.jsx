import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Main.css';
import LeftBar from '../components/Leftbar';
import Navbar from '../components/Navbar';
import Mobnavbar from '../components/Mobnavbar';
import Refer from '../components/Refer';
import Dashboard from '../components/Dashboard';
import Certificate from '../components/Certificate';
import Login from '../components/Login';
import loader from '../assets/loader.gif';

function Main() {
  // const url = process.env.REACT_APP_BACK_URL;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showLogin, setShowLogin] = useState(false);
  const [name, setName] = useState("Profile Name");
  const [data, setData] = useState();
  const [email, setEmail] = useState(Cookies.get("user_email") || "");
  const [certificates, setCertificates] = useState([]);
  const [certIds, setCertIds] = useState([]);
  const [coursesData, setCoursesData] = useState([]);
  // const [isResumeData, setIsResumeData] = useState(false);
  // const [resumeData, setResumeData] = useState({});
  const [page, setPage] = useState("dashboard");
  const [search, setSearch] = useState("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pagee = searchParams.get("page");
  

  
//   async function fetchResumeData(email) {
//     try {
//         console.log("Fetching resume data");
//         console.log(email);
//         const response = await axios.post(`${url}/resume/get-data`, { email: email });
//         if (response.data && Object.keys(response.data).length !== 0) {
//             setResumeData(response.data);
//             setIsResumeData(true);
//         } else {
//             setIsResumeData(false);
//             console.log("Not found");
//         }
//     } catch (error) {
//         console.error("Error fetching resume data:", error);
//         setIsResumeData(false);
//         console.log("Not found");
//     }
// }
useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
   
  
  useEffect(() => {
    
    const email = Cookies.get("user_email") || null;
    setEmail(email);
    if (!email) {
      setShowLogin(true);
      return;
    }
    // console.log("fetch resume getting called")
    // fetchResumeData(email);


    // Chatra("updateIntegrationData", {
    //   email: email,
    //   name: name,
    // });
    fetch("https://api.tutedude.com/dashboard?student_id=" + email, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setName(data.dashboard.studentName);
        setData(data.dashboard);
      });
  }, []);
  useEffect(() => {
    if (pagee === "refer") {
      setPage("refer");
    }
    
    fetch(`https://api.tutedude.com/lms/hackathon/certificate?email=${email}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data.certificates[0]);
      setCertificates(data.certificates[0]?.courses?.split(', '));
      setCertIds(data.certificates[0]?.certificates?.split(', ') );
    })
    
  }, [pagee,email]);
  if (showLogin)
    return (
      <Login
        setData={setData}
        setName={setName}
        // setEmail={email}
        // setChakraInit={setChakraInit}
        setShowLogin={setShowLogin}
        showLogin={showLogin}
        // initChakra={initChakra}
      />
    );

  if (!data)
    return (
      <div className="App">
        <div className="loader-cont">
          <img alt="loading" src={loader}></img>
        </div>
      </div>
    );

  function handleSearch(e) {
    setSearch(e.target.value);
  }
  return (
    <div className='main-container'>
      <div className='main-left-container'>
        <LeftBar
          setPage={setPage}
          page={page}
          data={data}
          name={name}
         />
      </div>
      <div className='main-right-container'>
      
      {windowWidth < 1000 && <Mobnavbar 
        name={name}
          setPage={setPage}
            page={page}
            data={data}
      />}
      {windowWidth > 1000 && <Navbar
            name={name}
       />}
        
          {page === "dashboard" && (
            <Dashboard
              data={data}
              setPage={setPage}
              email={email}
              enrolledCourses={data.enrolledCourses}
              courses={data.courses}
              certificates={certificates}
              certIds={certIds}
            />
          )}
          {page === "refer" && (
            <Refer
              data={data}
              setPage={setPage}
            />
          )}
          
          {page === "certificate" && <Certificate certificates={certificates} certIds={certIds}  coursesData={coursesData} />}
        
      </div>
    </div>
  );
}

export default Main;
