import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parse } from 'date-fns';

function Education({ handleContinue, education, setEducation }) {
  const [errors, setErrors] = useState([]);

  const handleAddEducation = () => {
    setEducation([
      ...education,
      { college: '', city: '', degree: '', cgpa: '', startDate: '', endDate: '' }
    ]);
    setErrors([...errors, {}]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedEducations = [...education];
    updatedEducations[index][name] = value;
    setEducation(updatedEducations);
  };

  const handleRemoveEducation = (index) => {
    const updatedEducations = [...education];
    const updatedErrors = [...errors];
    updatedEducations.splice(index, 1);
    updatedErrors.splice(index, 1);
    setEducation(updatedEducations);
    setErrors(updatedErrors);
  };

  const handleStartDateChange = (index, date) => {
    const updatedEducations = [...education];
    updatedEducations[index].startDate = date ? format(date, 'MM/yyyy') : '';
    setEducation(updatedEducations);
  };

  const handleEndDateChange = (index, date) => {
    const updatedEducations = [...education];
    updatedEducations[index].endDate = date ? format(date, 'MM/yyyy') : '';
    setEducation(updatedEducations);
  };

  const handleSkip = () => {
    setEducation([{ college: '', city: '', degree: '', cgpa: '', startDate: '', endDate: '' }]);
    handleContinue();
  };

  const handleFormSubmit = () => {
    const newErrors = education.map(edu => ({
      college: !edu.college,
      city: !edu.city,
      degree: !edu.degree,
      cgpa: !edu.cgpa,
      startDate: !edu.startDate,
      endDate: !edu.endDate,
    }));

    const isFormComplete = newErrors.every(error => 
      !error.college && !error.city && !error.degree && !error.cgpa && !error.startDate && !error.endDate
    );

    setErrors(newErrors);

    if (isFormComplete) {
      handleContinue();
    }
  };

  return (
    <div className="component">
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="itr">
          <div className="row1">
            <div className="input-div" id="institution">
              <label>Institution Name</label>
              <input
                type="text"
                name="college"
                value={edu.college}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="e.g., Meenakshi college of Engineering"
                className="input-box"
              />
              {errors[index]?.college && <span className="error">This field is required</span>}
            </div>
            <div className="input-div" id="city">
              <label>City, State</label>
              <input
                type="text"
                name="city"
                value={edu.city}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="city"
                className="input-box"
              />
              {errors[index]?.city && <span className="error">This field is required</span>}
            </div>
          </div>
          <div className="row1">
            <div className="input-div" id="course">
              <label>Course</label>
              <input
                type="text"
                name="degree"
                value={edu.degree}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="e.g., 12th"
                className="input-box"
              />
              {errors[index]?.degree && <span className="error">This field is required</span>}
            </div>
            <div className="input-div" id="grade">
              <label>Grade/CGPA</label>
              <input
                type="text"
                name="cgpa"
                value={edu.cgpa}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="e.g., 9/10"
                className="input-box"
              />
              {errors[index]?.cgpa && <span className="error">This field is required</span>}
            </div>
          </div>
          <div className="row1">
            <div className="input-div" id="from">
              <label>From</label>
              <DatePicker
                selected={edu.startDate ? parse(edu.startDate, 'MM/yyyy', new Date()) : null}
                onChange={(date) => handleStartDateChange(index, date)}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                placeholderText="MM/YYYY"
                className="input-box"
                id="date-picker"
              />
              {errors[index]?.startDate && <span className="error">This field is required</span>}
            </div>
            <div className="input-div" id="to">
              <label>To</label>
              <DatePicker
                selected={edu.endDate ? parse(edu.endDate, 'MM/yyyy', new Date()) : null}
                onChange={(date) => handleEndDateChange(index, date)}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                placeholderText="MM/YYYY"
                className="input-box"
                id="date-picker"
              />
              {errors[index]?.endDate && <span className="error">This field is required</span>}
            </div>
          </div>
          {index > 0 && <button className="remove-edu-btn" onClick={() => handleRemoveEducation(index)}>Remove</button>}
        </div>
      ))}
      <div className="btn-container">
        <button className="continue-btn" onClick={handleFormSubmit}>Continue</button>
        <button className="continue-btn" onClick={handleSkip}>Skip</button>
      </div>
      <button className="add-sec-btn" onClick={handleAddEducation}>Add Education</button>
    </div>
  );
}

export default Education;
