import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parse } from 'date-fns';

const ExperienceModal = ({ experience, add, resumeId, onClose, onUpdate }) => {
  const url = process.env.REACT_APP_BACK_URL;
  const [currentExperience, setCurrentExperience] = useState(experience || {
    company: '',
    role: '',
    jobType: '',
    skills: '',
    startDate: '',
    endDate: '',
    description: [''],
    certificateLink: '',
  });

  const [errors, setErrors] = useState({});

  const handleStartDateChange = (date) => {
    setCurrentExperience({ 
      ...currentExperience, 
      startDate: date ? format(date, 'MM/yyyy') : '' 
    });
  };

  const handleEndDateChange = (date) => {
    setCurrentExperience({ 
      ...currentExperience, 
      endDate: date ? format(date, 'MM/yyyy') : '' 
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentExperience({ ...currentExperience, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear the error message on input change
  };

  const handleAddDescriptionPoint = () => {
    setCurrentExperience({
      ...currentExperience,
      description: [...currentExperience.description, ''],
    });
  };

  const handleRemoveDescriptionPoint = (index) => {
    const newDescription = currentExperience.description.filter((_, i) => i !== index);
    setCurrentExperience({ ...currentExperience, description: newDescription });
  };

  const handleDescriptionChange = (index, e) => {
    const newDescription = currentExperience.description.map((desc, i) =>
      i === index ? e.target.value : desc
    );
    setCurrentExperience({ ...currentExperience, description: newDescription });
  };

  const validateFields = () => {
    const newErrors = {};
    if (!currentExperience.company) newErrors.company = 'Company is required';
    if (!currentExperience.role) newErrors.role = 'Role is required';
    if (!currentExperience.jobType) newErrors.jobType = 'Job Type is required';
    if (!currentExperience.skills) newErrors.skills = 'Skills are required';
    if (!currentExperience.startDate) newErrors.startDate = 'Start Date is required';
    if (!currentExperience.endDate) newErrors.endDate = 'End Date is required';
    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const experienceData = {
      ...currentExperience,
      description: currentExperience.description.filter(desc => desc.trim() !== '')
    };

    try {
      if (add) {
        await axios.post(`${url}/resume/experience/add-experience/${resumeId}`, experienceData);
        alert("Experience added successfully");
      } else {
        await axios.put(`${url}/resume/experience/edit-experience/${resumeId}/${experience._id}`, experienceData);
        alert("Experience updated successfully");
      }
      onClose();
      onUpdate();
    } catch (error) {
      console.error("There was an error updating the experience!", error);
      alert("Failed to update experience. Please try again.");
    }
  };

  return (
    <div className='component'>
      <div className='row1'>
        <div className='input-div' id='proj-title'>
          <label>Company</label>
          <input
            type='text'
            name='company'
            value={currentExperience.company}
            onChange={handleInputChange}
            placeholder='e.g., ABC Tech'
            className='input-box'
          />
          {errors.company && <div className='error'>{errors.company}</div>}
        </div>
        <div className='input-div' id='proj-techstack'>
          <label>Role</label>
          <input
            type='text'
            name='role'
            value={currentExperience.role}
            onChange={handleInputChange}
            placeholder='Role'
            className='input-box'
            id='date-picker'
          />
          {errors.role && <div className='error'>{errors.role}</div>}
        </div>
      </div>
      <div className='row1'>
        <div className='input-div' id='from'>
          <label>Job Type</label>
          <input
            type='text'
            name='jobType'
            value={currentExperience.jobType}
            onChange={handleInputChange}
            placeholder='e.g., Full Time, Internship, Part Time'
            className='input-box'
          />
          {errors.jobType && <div className='error'>{errors.jobType}</div>}
        </div>
        <div className='input-div' id='to'>
          <label>Skills</label>
          <input
            type='text'
            name='skills'
            value={currentExperience.skills}
            onChange={handleInputChange}
            placeholder='e.g., React, Node.js'
            className='input-box'
            id='date-picker'
          />
          {errors.skills && <div className='error'>{errors.skills}</div>}
        </div>
      </div>
      <div className='row1'>
        <div className='input-div' id='from'>
          <label>Start Date</label>
          <DatePicker
            selected={currentExperience.startDate ? parse(currentExperience.startDate, 'MM/yyyy', new Date()) : null}
            onChange={handleStartDateChange}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            placeholderText="MM/YYYY"
            className='input-box'
            id='exp-date-picker'
          />
          {errors.startDate && <div className='error'>{errors.startDate}</div>}
        </div>
        <div className='input-div' id='to'>
          <label>End Date</label>
          <DatePicker
            selected={currentExperience.endDate ? parse(currentExperience.endDate, 'MM/yyyy', new Date()) : null}
            onChange={handleEndDateChange }
            dateFormat="MM/yyyy"
            showMonthYearPicker
            placeholderText="MM/YYYY"
            className='input-box'
            id='date-picker'
          />
          {errors.endDate && <div className='error'>{errors.endDate}</div>}
        </div>
      </div>
      <div className='row1'>
        <div className='input-div' id='proj-desc'>
          <label>Description</label>
          {currentExperience.description.map((desc, index) => (
            <div key={index} className='itr'>
              <div className='points-container'>
                <input
                  type='text'
                  value={desc}
                  onChange={(e) => handleDescriptionChange(index, e)}
                  placeholder={`Point ${index + 1}`}
                  className='input-box'
                  id='point-input'
                />
                {index > 0 && (
                  <span className="remove-point-icon" onClick={() => handleRemoveDescriptionPoint(index)}>❌</span>
                )}
              </div>
            </div>
          ))}
          <button className='add-desc-btn' onClick={handleAddDescriptionPoint}>Add Description Point</button>
        </div>
      </div>
      <div className='row1'>
        <div className='input-div' id='proj-links'>
          <label>Certificate Link</label>
          <input
            type='text'
            name='certificateLink'
            value={currentExperience.certificateLink}
            onChange={handleInputChange}
            placeholder='Certificate Link'
            className='input-box'
          />
        </div>
      </div>
      <div className='modal-actions'>
        <button onClick={handleSubmit} className='continue-btn'>Submit</button>
      </div>
    </div>
  );
};

export default ExperienceModal;
