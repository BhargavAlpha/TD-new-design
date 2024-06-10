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
          {comp !== total ? (
            <div className="card-cour-prog-text">
              {comp === 0 ? "Yet To Start" : "Course in Progress"}
            </div>
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
      {date && (
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
      )}
      <div className="card-content3-outer">
        {certificate ? (
          <div className="card-content3-inner">
            <button
              className="card-resume-btn"
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
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.90054 11.8C7.0721 12.9716 8.9716 12.9716 10.1432 11.8L10.1432 11.8L12.2846 9.65866C12.6818 9.27497 12.6928 8.64191 12.3091 8.24466C11.9254 7.84741 11.2924 7.83641 10.8951 8.22009C10.8868 8.22812 10.8786 8.23634 10.8706 8.24466L9.01523 10.0993L8.99988 1C8.99988 0.447719 8.55216 0 7.99988 0C7.4476 0 6.99988 0.447719 6.99988 1L7.01388 10.0847L5.17323 8.244C4.77598 7.86031 4.14291 7.87131 3.75923 8.26856C3.38495 8.65609 3.38495 9.27047 3.75923 9.658L5.90054 11.8Z"
                  fill="#992E9D"
                />
                <path
                  d="M15 9.66675C14.4477 9.66675 14 10.1145 14 10.6667V13.7274C13.9996 13.8778 13.8778 13.9997 13.7273 14.0001H2.27266C2.12222 13.9997 2.00034 13.8778 2 13.7274V10.6667C2 10.1145 1.55228 9.66675 1 9.66675C0.447719 9.66675 0 10.1145 0 10.6667V13.7274C0.00146875 14.982 1.01812 15.9986 2.27266 16.0001H13.7273C14.9819 15.9986 15.9985 14.982 16 13.7274V10.6668C16 10.1145 15.5523 9.66675 15 9.66675Z"
                  fill="#992E9D"
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
