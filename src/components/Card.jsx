import "./Card.css";
import history from "../assets/history3.svg";
import pause from "../assets/play-arrow3.svg";
import calender from "../assets/calendar-today3.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import loader from "../assets/loaderr.gif";

const Card = ({ slug, email, date, certId }) => {
  const inputDate = new Date(date);
  const day = inputDate.getUTCDate().toString().padStart(2, "0");
  const month = (inputDate.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = inputDate.getUTCFullYear();
  const outputDateString = `${day}-${month}-${year}`;
  // console.log("certId",certId);
  const certificate = certId ? true : false;

  const imgs = {
    mernstack:
      "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/mern.png",
    webdevelopment:
      "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/webdev.png",
    appdevelopment:
      "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/Appdev.png",
    ethicalhacking:
      "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/ethical+hacking.png",
    java: "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/java.png",
    python:
      "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/python.png",
    cpp: "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/cpp.png",
    datastructure:
      "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/dsa.png",
    competitiveprogramming:
      "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/cp.png",
    aftereffects:
      "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/AE.png",
    photoshop:
      "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/photoshop.png",
    premierepro:
      "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/premierpro.png",
    digitalmarketing:
      "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/digital+marketing.png",
    fundamentalanalysis:
      "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/fma.png",
    technicalanalysis:
      "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/TechAna.png",
    illustrator:
      "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/ai.png",
    financialmodelling:
      "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/fmv.png",
    datascience:
      "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/datascience.png",
    uiux: "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/uiux.png",
    reactnative:
      "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/reactNative.png",
    riskmanagement:
      "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/TechAna.png",
    dbms: "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/dbms.png",
    devops:
      "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/devops.png",
    reactjs:
      "https://tutedude-assignment-question-files.s3.ap-south-1.amazonaws.com/courseImgs/react.png",
  };

  const [total, setTotal] = useState(0);
  const [comp, setComp] = useState(0);
  const [last, setLast] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const url = `https://api.tutedude.com/lms/api/course/${slug}`;
      const response = await axios.get(url);

      if (response.data.data.sections.length > 0) {
        setTotal(
          response.data.data.sections[response.data.data.sections.length - 1]
            .section_lectures[
            response.data.data.sections[response.data.data.sections.length - 1]
              .section_lectures.length - 1
          ].lecture_no
        );
      }
      const id = response.data.data._id;
      const resp = response.data.data;
      setName(resp.course_name);
      const urlP = `https://api.tutedude.com/lms/progress?email=${email}&course_id=${id}`;
      const progressResponse = await axios.get(urlP);
      const prog = progressResponse.data.data;
      setIsLoading(false);

      if (prog !== null) {
        setComp(prog.courses[0].completed_videos.length);
      } else {
        setComp(0);
      }

      if (prog && resp.sections.length > 0) {
        let idx = resp.sections[
          prog.courses[0].last_completed_lecture.section_no - 1
        ].section_lectures.findIndex(
          (lec) =>
            lec.lecture_no === prog.courses[0].last_completed_lecture.lecture_no
        );
        setLast(
          resp.sections[prog.courses[0].last_completed_lecture.section_no - 1]
            .section_lectures[idx].lecture_name
        );
      }
    } catch (error) {
      console.error(slug, "Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [slug]);

  if (isLoading)
    return (
      <div className="card-container">
        <img src={loader} alt="loading" className="load-card-img" />
      </div>
    );

  return (
    <div className="card-container">
      <img className="card-img" src={imgs[slug]} alt="course-img" />
      <div className="card-content1">
        <h1> {name} </h1>
        <div className="card-icon-text1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              d="M1.33332 8.50016C1.33332 12.1821 4.31809 15.1668 7.99999 15.1668C11.6819 15.1668 14.6667 12.1821 14.6667 8.50016C14.6667 4.81826 11.6819 1.8335 7.99999 1.8335"
              stroke="#83848D"
              stroke-width="1.25"
              stroke-linecap="round"
            />
            <path
              d="M8 6.5V9.16667H10.6667"
              stroke="#83848D"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle
              cx="8.00001"
              cy="8.50016"
              r="6.66667"
              stroke="#83848D"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-dasharray="0.5 3.5"
            />
          </svg>
          <span>{last !== "" ? `Last Read: ${last}` : "Start The course"}</span>
        </div>
        <div className="card-icon-text2">
          <div className="card-prog-bar">
            <div
              style={{
                width: `${
                  comp === 0 || total === 0
                    ? 0
                    : Math.floor((comp / total) * 100)
                }%`,
                backgroundColor: "#6bb870",
                height: "8px",
                borderRadius: "50px",
              }}
            ></div>
          </div>
          <div className="card-percent">
            {comp === 0 || total === 0 ? 0 : Math.floor((comp / total) * 100)}%
          </div>
        </div>
        <div>
          {comp / total != 1 ? (
            <div className="card-cour-prog-text">Course Progress</div>
          ) : (
            <div className="card-icon-text3">
              <span>Course Completed</span>
              <div
                style={{
                  height: "20px",
                  width: "20px",
                  border: "1px solid #6BB870",
                  borderRadius: "100px",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="9"
                  viewBox="0 0 10 9"
                  fill="none"
                >
                  <path
                    d="M3.22883 8.10948C2.94497 8.10959 2.67274 7.99677 2.47219 7.79588L0.184609 5.50915C-0.0615362 5.26293 -0.0615362 4.8638 0.184609 4.61758C0.430832 4.37143 0.829961 4.37143 1.07618 4.61758L3.22883 6.77022L8.92382 1.07523C9.17004 0.829089 9.56917 0.829089 9.81539 1.07523C10.0615 1.32146 10.0615 1.72059 9.81539 1.96681L3.98547 7.79588C3.78492 7.99677 3.51269 8.10959 3.22883 8.10948Z"
                    fill="#6BB870"
                  />
                </svg>{" "}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="card-content2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
        >
          <path
            d="M12.8333 8.66683V7.50016C12.8333 7.01073 12.8333 6.57573 12.8258 6.18766H1.17418C1.16666 6.57573 1.16666 7.01073 1.16666 7.50016V8.66683C1.16666 10.8667 1.16666 11.9667 1.85007 12.6501C2.53349 13.3335 3.63344 13.3335 5.83332 13.3335H8.16666C10.3665 13.3335 11.4665 13.3335 12.1499 12.6501C12.8333 11.9667 12.8333 10.8667 12.8333 8.66683Z"
            fill="#4C4D52"
          />
          <path
            d="M4.52082 1.9585C4.52082 1.71687 4.32495 1.521 4.08332 1.521C3.8417 1.521 3.64582 1.71687 3.64582 1.9585V2.87973C2.80621 2.94696 2.25502 3.11196 1.85007 3.51691C1.44512 3.92186 1.28012 4.47305 1.21289 5.31266H12.7871C12.7199 4.47305 12.5549 3.92186 12.1499 3.51691C11.745 3.11196 11.1938 2.94696 10.3542 2.87973V1.9585C10.3542 1.71687 10.1583 1.521 9.91666 1.521C9.67503 1.521 9.47916 1.71687 9.47916 1.9585V2.84102C9.09108 2.8335 8.65609 2.8335 8.16666 2.8335H5.83332C5.34389 2.8335 4.90889 2.8335 4.52082 2.84102V1.9585Z"
            fill="#4C4D52"
          />
        </svg>
        <span>Enrolled On {outputDateString}</span>
      </div>
      <div className="card-content3-outer">
        {certificate ? (
          <div className="card-content3-inner">
            <button
              className="card-resume-btn"
              onClick={() =>
                window.location.href = `https://upskill.tutedude.com/course/lecture-${slug}`
              }
            >
              <span>Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.75 18.3332C15.3524 18.3332 19.0833 14.6022 19.0833 9.99984C19.0833 5.39746 15.3524 1.6665 10.75 1.6665C6.14762 1.6665 2.41666 5.39746 2.41666 9.99984C2.41666 14.6022 6.14762 18.3332 10.75 18.3332ZM9.66123 13.2047L13.5947 10.8823C14.2462 10.4977 14.2462 9.50199 13.5947 9.11736L9.66123 6.795C9.02808 6.42118 8.24999 6.90773 8.24999 7.67747V12.3222C8.24999 13.0919 9.02808 13.5785 9.66123 13.2047Z"
                  fill="white"
                />
              </svg>
            </button>
            <button
              className="card-cert-btn"
              onClick={() => {
                
                window.open(
                  `https://upskill.tutedude.com/certificate/${certId}`
                );
              }}
            >
              <span>Certificate</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
              >
                <path
                  d="M9.12536 10.325L9.12538 10.325L10.9991 8.45132C11.3467 8.1156 11.3563 7.56167 11.0206 7.21408C10.6848 6.86648 10.1309 6.85686 9.7833 7.19258C9.776 7.19961 9.76884 7.2068 9.76181 7.21408L8.88712 8.08844L8.88838 8.83563L8.13838 8.8369L7.60815 8.30647L8.1366 7.77822L8.12496 0.875C8.12496 0.391754 7.7332 0 7.24996 0C6.76671 0 6.37496 0.391754 6.37496 0.875L7.12496 0.873844L7.12496 0.874639C7.12515 0.805773 7.18105 0.75 7.24996 0.75C7.31899 0.75 7.37496 0.805968 7.37496 0.875L7.37496 0.876265L7.38839 8.83816L7.39092 10.3399M9.12536 10.325L8.59503 9.79469M9.12536 10.325L8.59503 9.7947L8.59503 9.79469M9.12536 10.325C8.10021 11.3501 6.43815 11.3501 5.41303 10.325M8.59503 9.79469L8.59505 9.79467L10.4687 7.92099L10.4779 7.91178L10.478 7.91187C10.5277 7.8639 10.5291 7.78477 10.4811 7.73512C10.4331 7.68545 10.354 7.68408 10.3043 7.73204L10.3034 7.73293C10.3033 7.73307 10.3026 7.73379 10.3012 7.7352L10.2921 7.74458L10.292 7.7445L8.66862 9.36733L7.75561 10.28M8.59503 9.79469C8.35377 10.036 8.06311 10.1977 7.75561 10.28M7.75561 10.28C7.63596 10.312 7.51375 10.332 7.39092 10.3399M7.75561 10.28L7.39143 10.644L7.39092 10.3399M7.39092 10.3399C7.30722 10.3453 7.22323 10.3452 7.13954 10.3394M7.13954 10.3394L7.13721 8.82292L7.12496 0.875L4.25559 7.75296C4.25473 7.75212 4.25385 7.7513 4.25297 7.7505M7.13954 10.3394C7.01923 10.3311 6.89957 10.3113 6.78235 10.2799M7.13954 10.3394L7.14 10.6375L6.78235 10.2799M6.78235 10.2799L5.85688 9.35441L4.25297 7.7505M6.78235 10.2799C6.47505 10.1976 6.18458 10.0359 5.94345 9.79476L5.41303 10.325M4.25297 7.7505C4.20319 7.70507 4.12599 7.70724 4.07886 7.75602L4.25297 7.7505ZM5.41303 10.325L5.94337 9.79468M5.41303 10.325L5.94337 9.79468M5.94337 9.79468L4.07641 7.92712C4.03208 7.87857 4.03289 7.80363 4.07884 7.75603L5.94337 9.79468Z"
                  stroke="#7F2781"
                  stroke-width="1.5"
                />
                <path
                  d="M13.25 12.0134V12.0116V9.3335C13.25 9.26446 13.306 9.2085 13.375 9.2085C13.444 9.2085 13.5 9.26445 13.5 9.33348V9.33352L13.5 12.0107C13.5 12.0109 13.5 12.0112 13.5 12.0114C13.4988 12.6952 12.9447 13.2492 12.2609 13.2502C12.2608 13.2502 12.2606 13.2502 12.2605 13.2502H2.23945C2.23933 13.2502 2.23921 13.2502 2.23909 13.2502C1.55521 13.2492 1.00102 12.695 1 12.0111V9.3335C1 9.26446 1.05597 9.2085 1.125 9.2085C1.19403 9.2085 1.25 9.26446 1.25 9.3335L1.25 12.0116L1.25 12.0133C1.25125 12.5579 1.69246 12.9988 2.2367 13.0001H2.23857L12.2614 13.0001L12.2631 13.0001C12.8078 12.9989 13.2486 12.5577 13.25 12.0134Z"
                  fill="#7F2781"
                  stroke="#7F2781"
                  stroke-width="1.5"
                />
              </svg>
            </button>
          </div>
        ) : (
          <button
            className="card-resume-btn card-resume-btn-full"
            onClick={() =>
              (window.location.href = `https://upskill.tutedude.com/course/lecture-${slug}`)
            }
          >
            <span>Resume</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.75 18.3332C15.3524 18.3332 19.0833 14.6022 19.0833 9.99984C19.0833 5.39746 15.3524 1.6665 10.75 1.6665C6.14762 1.6665 2.41666 5.39746 2.41666 9.99984C2.41666 14.6022 6.14762 18.3332 10.75 18.3332ZM9.66123 13.2047L13.5947 10.8823C14.2462 10.4977 14.2462 9.50199 13.5947 9.11736L9.66123 6.795C9.02808 6.42118 8.24999 6.90773 8.24999 7.67747V12.3222C8.24999 13.0919 9.02808 13.5785 9.66123 13.2047Z"
                fill="white"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
