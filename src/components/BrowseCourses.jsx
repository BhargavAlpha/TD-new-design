import React, { useState, useRef, useEffect } from "react";
import Card2 from "./Card2.jsx";
import ScrollContainer from "react-indiana-drag-scroll";
import "./BrowseCourses.css";

function BrowseCourses({ courses }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const scrollRef = useRef(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
 

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

  const categories = {
    technical: {
      python: {
        name: "Python",
        lectures: "274 lectures",
        duration: "39H duration",
        ratings: "4.9",
      },
      java: {
        name: "Java",
        duration: "30H duration",
        lectures: "84 lectures",
        ratings: "4.95",
      },
      mernstack: {
        name: "MERN Stack",
        duration: "55H duration",
        lectures: "190 lectures",
        ratings: "4.8",
      },
      webdevelopment: {
        name: "Web Development With PHP/MySQL",
        lectures: "155 lectures",
        duration: "49H duration",
        ratings: "4.8",
      },
      appdevelopment: {
        name: "App Development",
        lectures: "89 lectures",
        duration: "35H duration",
        ratings: "4.9",
      },
      ethicalhacking: {
        name: "Ethical Hacking",
        lectures: "42 lectures",
        duration: "17H duration",
        ratings: "4.6",
      },
      datastructure: {
        name: "Data Structures & Algorithms",
        lectures: "225 lectures",
        duration: "36H duration",
        ratings: "4.8",
      },
      cpp: {
        name: "C++",
        lectures: "53 lectures",
        duration: "20H duration",
        ratings: "4.7",
      },
      reactnative: {
        name: "React Native",
        lectures: "74 lectures",
        duration: "13H duration",
        ratings: "4.8",
      },
      datascience: {
        name: "Data Science",
        lectures: "63 lectures",
        duration: "19H duration",
        ratings: "4.85",
      },
      competitiveprogramming: {
        name: "Competetive Programming",
        duration: "39H duration",
        lectures: "126 lectures",
        ratings: "4.9",
      },
      dbms: {
        name: "DBMS",
        lectures: "204 lectures",
        duration: "39H duration",
        ratings: "4.7",
      },
      devops: {
        name: "DevOps",
        lectures: "72 lectures",
        duration: "33H duration",
        ratings: "4.8",
      },
      reactjs: {
        name: "React JS",
        lectures: "124 lectures",
        duration: "16H duration",
        ratings: "4.8",
      },
    },
    business: {
      financialmodelling: {
        name: "Financial Modelling & Valuation",
        duration: "9H duration",
        lectures: "61 lectures",
        ratings: "4.9",
      },
      technicalanalysis: {
        name: "Technical Analysis",
        duration: "17H duration",
        lectures: "73 lectures",
        ratings: "4.8",
      },
      digitalmarketing: {
        name: "Digital Marketing",
        duration: "39H duration",
        lectures: "192 lectures",
        ratings: "4.9",
      },
      fundamentalanalysis: {
        name: "Stock Market",
        lectures: "35 lectures",
        duration: "10H duration",
        ratings: "4.7",
      },
      riskmanagement: {
        name: "Risk Management",
        lectures: "41 lectures",
        duration: "21H duration",
        ratings: "4.9",
      },
    },
    visual_arts: {
      uiux: {
        name: "UI/UX",
        lectures: "179 lectures",
        duration: "32H duration",
        ratings: "4.9",
      },
      illustrator: {
        name: "Adobe Illustrator",
        lectures: "87 lectures",
        duration: "17H duration",
        ratings: "4.8",
      },
      premierepro: {
        name: "Premiere Pro",
        lectures: "87 lectures",
        duration: "12H duration",
        ratings: "4.9",
      },
      aftereffects: {
        name: "After Effects",
        duration: "16H duration",
        lectures: "57 lectures",
        ratings: "4.8",
      },
      photoshop: {
        name: "Photoshop",
        duration: "19H duration",
        lectures: "86 lectures",
        ratings: "4.9",
      },
    },
  };

  const filteredCourses =
    selectedCategory === "all"
      ? Object.values(categories).flatMap((category) => Object.values(category))
      : Object.values(categories[selectedCategory]);

  return (
    <div className="dash-new-courses">
      <div className="dash-scroll-header-cont">
        <span>Browse New Courses</span>
        <ScrollContainer className="dash-scroll-container">
          <div className="dash-scroll-header">
            <div
              className={`dash-scroll-header-item ${
                selectedCategory === "all" ? "selected" : ""
              }`}
              onClick={() => handleCategoryChange("all")}
            >
              All (
              {
                Object.values(categories).flatMap((category) =>
                  Object.keys(category)
                ).length
              }
              )
            </div>
            <div
              className={`dash-scroll-header-item ${
                selectedCategory === "visual_arts" ? "selected" : ""
              }`}
              onClick={() => handleCategoryChange("visual_arts")}
            >
              Design ({Object.keys(categories.visual_arts).length})
            </div>
            <div
              className={`dash-scroll-header-item ${
                selectedCategory === "business" ? "selected" : ""
              }`}
              onClick={() => handleCategoryChange("business")}
            >
              Business ({Object.keys(categories.business).length})
            </div>
            <div
              className={`dash-scroll-header-item ${
                selectedCategory === "technical" ? "selected" : ""
              }`}
              onClick={() => handleCategoryChange("technical")}
            >
              IT and Software ({Object.keys(categories.technical).length})
            </div>
          </div>
        </ScrollContainer>
      </div>
      <div className="cards-scroller2" ref={scrollRef}>
        {filteredCourses.map((course, index) => (
          <Card2 key={index} course={course} />
        ))}
      </div>
      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
    </div>
  );
}

export default BrowseCourses;
