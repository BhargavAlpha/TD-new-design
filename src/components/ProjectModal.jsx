import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parse } from 'date-fns';

function ProjectModal({ project, add, resumeId, onClose, onUpdate }) {
  const url = process.env.REACT_APP_BACK_URL;
  const [formData, setFormData] = useState({
    name: project?.name || '',
    techStack: project?.techStack || '',
    date: project?.date ? parse(project.date, 'MM/yyyy', new Date()) : null,
    description: project?.description || [''],
    link: project?.link || '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear the error message on input change
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
    setErrors({ ...errors, date: '' }); // Clear the error message on date change
  };

  const handleAddDescriptionPoint = () => {
    setFormData({ ...formData, description: [...formData.description, ''] });
  };

  const handleRemoveDescriptionPoint = (index) => {
    const updatedDescription = formData.description.filter((_, i) => i !== index);
    setFormData({ ...formData, description: updatedDescription });
  };

  const handleDescriptionChange = (index, e) => {
    const updatedDescription = formData.description.map((desc, i) =>
      i === index ? e.target.value : desc
    );
    setFormData({ ...formData, description: updatedDescription });
  };

  const handleSubmit = async () => {
    try {
      if (formData.name.trim() === '' || formData.techStack.trim() === '' || !formData.date) {
        setErrors({
          name: formData.name.trim() === '' ? 'Project title is required' : '',
          techStack: formData.techStack.trim() === '' ? 'Tech stack is required' : '',
          date: !formData.date ? 'Date is required' : '',
        });
        return;
      }

      const formattedData = {
        ...formData,
        date: format(formData.date, 'MM/yyyy'),
        description: formData.description.filter(desc => desc.trim() !== '')
      };

      if (add) {
        await axios.post(`${url}/resume/project/add-project/${resumeId}`, formattedData);
        alert("Project added successfully");
      } else {
        await axios.put(`${url}/resume/project/edit-project/${resumeId}/${project._id}`, formattedData);
        alert("Project updated successfully");
      }
      onClose();
      onUpdate();
    } catch (error) {
      console.error("There was an error updating the project!", error);
      alert("Failed to update project. Please try again.");
    }
  };

  return (
    <div className='component'>
      <h2>Project Details</h2>
      <div className='row1'>
        <div className='input-div' id='proj-title'>
          <label>Project Title</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            placeholder='e.g., Online Gaming App'
            className='input-box'
          />
          {errors.name && <div className='error'>{errors.name}</div>}
        </div>
        <div className='input-div' id='proj-techstack'>
          <label>Tech Stack</label>
          <input
            type='text'
            name='techStack'
            value={formData.techStack}
            onChange={handleInputChange}
            placeholder='e.g., React, Node.js'
            className='input-box'
            id='date-picker'
          />
          {errors.techStack && <div className='error'>{errors.techStack}</div>}
        </div>
      </div>
      <div className='row1'>
        <div className='input-div' id='date'>
          <label>Date</label>
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            placeholderText="MM/YYYY"
            className='input-box'
            id='date-picker'
          />
          {errors.date && <div className='error'>{errors.date}</div>}
        </div>
      </div>
      <div className='row1'>
        <div className='input-div' id='proj-desc'>
          <label>Project Description</label>
          {formData.description.map((desc, index) => (
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
          <label>Project Links</label>
          <input
            type='text'
            name='link'
            value={formData.link}
            onChange={handleInputChange}
            placeholder='https://github.com/example'
            className='input-box'
          />
        </div>
      </div>
      <button className="continue-btn" onClick={handleSubmit}>
        {add ? "Add Project" : "Edit Project"}
      </button>
    </div>
  );
}

export default ProjectModal;
