import React, { useState, useEffect } from "react";
import "./Component.css";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parse } from "date-fns";

function EducationModal({ education, add, resumeId, onClose, onUpdate }) {
  const url = process.env.REACT_APP_BACK_URL;

  const [edu, setEdu] = useState({
    college: "",
    city: "",
    degree: "",
    cgpa: "",
    startDate: "",
    endDate: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (education) {
      setEdu({
        ...education,
        startDate: education.startDate ? parse(education.startDate, 'MM/yyyy', new Date()) : null,
        endDate: education.endDate ? parse(education.endDate, 'MM/yyyy', new Date()) : null,
      });
    }
  }, [education]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEdu({ ...edu, [name]: value });
  };

  const handleStartDateChange = (date) => {
    setEdu({ ...edu, startDate: date });
  };

  const handleEndDateChange = (date) => {
    setEdu({ ...edu, endDate: date });
  };

  const validateFields = () => {
    const newErrors = {};
    if (!edu.college) newErrors.college = "Institution Name is required.";
    if (!edu.city) newErrors.city = "City is required.";
    if (!edu.degree) newErrors.degree = "Course is required.";
    if (!edu.cgpa) newErrors.cgpa = "Grade/Percentage is required.";
    if (!edu.startDate) newErrors.startDate = "Start Date is required.";
    if (!edu.endDate) newErrors.endDate = "End Date is required.";
    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const formattedEdu = {
        ...edu,
        startDate: edu.startDate ? format(edu.startDate, 'MM/yyyy') : "",
        endDate: edu.endDate ? format(edu.endDate, 'MM/yyyy') : "",
      };
      if (add) {
        await axios.post(`${url}/resume/education/add-education/${resumeId}`, formattedEdu);
        alert("Education added successfully");
      } else {
        await axios.put(`${url}/resume/education/edit-education/${resumeId}/${education._id}`, formattedEdu);
        alert("Education updated successfully");
      }
      onClose();
      onUpdate();
    } catch (error) {
      console.error("There was an error updating the education!", error);
      alert("Failed to update education. Please try again.");
    }
  };

  return (
    <div className="component">
      <div className="row1">
        <div className="input-div" id="institution">
          <label>Institution Name</label>
          <input
            type="text"
            name="college"
            value={edu.college}
            onChange={handleInputChange}
            placeholder="e.g., Meenakshi College of Engineering"
            className="input-box"
          />
          {errors.college && <div className="error">{errors.college}</div>}
        </div>
        <div className="input-div" id="city">
          <label>City, State</label>
          <input
            type="text"
            name="city"
            value={edu.city}
            onChange={handleInputChange}
            placeholder="City"
            className="input-box"
            id="date-picker"
          />
          {errors.city && <div className="error">{errors.city}</div>}
        </div>
      </div>
      <div className="row1">
        <div className="input-div" id="course">
          <label>Course</label>
          <input
            type="text"
            name="degree"
            value={edu.degree}
            onChange={handleInputChange}
            placeholder="e.g., 12th"
            className="input-box"
          />
          {errors.degree && <div className="error">{errors.degree}</div>}
        </div>
        <div className="input-div" id="grade">
          <label>Grade / Percentage</label>
          <input
            type="text"
            name="cgpa"
            value={edu.cgpa}
            onChange={handleInputChange}
            placeholder="e.g., 9/10"
            className="input-box"
            id="date-picker"
          />
          {errors.cgpa && <div className="error">{errors.cgpa}</div>}
        </div>
      </div>
      <div className="row1">
        <div className="input-div" id="from">
          <label>From</label>
          <DatePicker
            selected={edu.startDate}
            onChange={handleStartDateChange}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            placeholderText="MM/YYYY"
            className="input-box"
            id="date-picker"
          />
          {errors.startDate && <div className="error">{errors.startDate}</div>}
        </div>
        <div className="input-div" id="to">
          <label>To</label>
          <DatePicker
            selected={edu.endDate}
            onChange={handleEndDateChange}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            placeholderText="MM/YYYY"
            className="input-box"
            id="date-picker"
          />
          {errors.endDate && <div className="error">{errors.endDate}</div>}
        </div>
      </div>
      <button className="continue-btn" onClick={handleSubmit}>
        {add ? "Add Education" : "Save Changes"}
      </button>
    </div>
  );
}

export default EducationModal;
