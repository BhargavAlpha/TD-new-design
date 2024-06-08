import React, { useState } from 'react';
import './Component.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parse } from 'date-fns';

function Projects({ handleContinue, projects, setProjects }) {
  const [errors, setErrors] = useState([]);

  const handleAddProject = () => {
    setProjects([...projects, { name: '', techStack: '', date: null, description: [''], link: '' }]);
    setErrors([...errors, {}]);
  };

  const handleRemoveProject = (index) => {
    const updatedProjects = [...projects];
    const updatedErrors = [...errors];
    updatedProjects.splice(index, 1);
    updatedErrors.splice(index, 1);
    setProjects(updatedProjects);
    setErrors(updatedErrors);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedProjects = [...projects];
    updatedProjects[index][name] = value;
    setProjects(updatedProjects);
  };

  const handleAddDescriptionPoint = (index) => {
    const updatedProjects = [...projects];
    updatedProjects[index].description.push('');
    setProjects(updatedProjects);
  };

  const handleRemoveDescriptionPoint = (index, subIndex) => {
    const updatedProjects = [...projects];
    updatedProjects[index].description.splice(subIndex, 1);
    setProjects(updatedProjects);
  };

  const handleDateChange = (index, date) => {
    const updatedProjects = [...projects];
    updatedProjects[index].date = date;
    setProjects(updatedProjects);
  };

  const handleSkip = () => {
    setProjects([{ name: '', techStack: '', date: null, description: [''], link: '' }]);
    handleContinue();
  };

  const handleFormSubmit = () => {
    const newErrors = projects.map(project => ({
      name: !project.name,
      techStack: !project.techStack,
      date: !project.date,
      description: project.description.some(desc => !desc)
    }));

    const isFormComplete = newErrors.every(error => 
      !error.name && !error.techStack && !error.date && !error.description && !error.link
    );

    setErrors(newErrors);

    if (isFormComplete) {
      handleContinue();
    }
  };

  return (
    <div className='component'>
      <h2>Project Details</h2>
      {projects.map((project, index) => (
        <div key={index} className='itr'>
          <div className='row1'>
            <div className='input-div' id='proj-title'>
              <label>Project Title</label>
              <input
                type='text'
                name='name'
                value={project.name}
                onChange={(e) => handleInputChange(index, e)}
                placeholder='e.g., Online Gaming App'
                className='input-box'
              />
              {errors[index]?.name && <span className="error">This field is required</span>}
            </div>
            <div className='input-div' id='proj-techstack'>
              <label>Tech Stack</label>
              <input
                type='text'
                name='techStack'
                value={project.techStack}
                onChange={(e) => handleInputChange(index, e)}
                placeholder='e.g., React, Node.js'
                className='input-box'
              />
              {errors[index]?.techStack && <span className="error">This field is required</span>}
            </div>
          </div>
          <div className='row1'>
            <div className='input-div' id='date'>
              <label>Date</label>
              <DatePicker
                selected={project.date ? parse(project.date, 'MM/yyyy', new Date()) : null}
                onChange={(date) => handleDateChange(index, date ? format(date, 'MM/yyyy') : '')}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                placeholderText="MM/YYYY"
                className='input-box'
                id='date-picker'
              />
              {errors[index]?.date && <span className="error">This field is required</span>}
            </div>
          </div>
          <div className='row1'>
            <div className='input-div' id='proj-desc'>
              <label>Project Description</label>
              {project.description.map((desc, subIndex) => (
                <div key={subIndex} className='itr'>
                  <div className='points-container'>
                    <input
                      type='text'
                      value={desc}
                      onChange={(e) => {
                        const updatedProjects = [...projects];
                        updatedProjects[index].description[subIndex] = e.target.value;
                        setProjects(updatedProjects);
                      }}
                      placeholder={`Point ${subIndex + 1}`}
                      className='input-box'
                      id='point-input'
                    />
                    {errors[index]?.description && !desc && <p className="error">This field is required</p>}
                    {subIndex > 0 && (
                      <span className="remove-point-icon" onClick={() => handleRemoveDescriptionPoint(index, subIndex)}>❌</span>
                    )}
                  </div>
                </div>
              ))}
              <button className='add-desc-btn' onClick={() => handleAddDescriptionPoint(index)}>Add Description Point</button>
            </div>
          </div>
          <div className='row1'>
            <div className='input-div' id='proj-links'>
              <label>Project Links</label>
              <input
                type='text'
                name='link'
                value={project.link}
                onChange={(e) => handleInputChange(index, e)}
                placeholder='https://github.com/example'
                className='input-box'
              />
              {errors[index]?.link && <span className="error">This field is required</span>}
            </div>
          </div>
          {index > 0 && (
            <button className='remove-proj-btn' onClick={() => handleRemoveProject(index)}>Remove Project</button>
          )}
        </div>
      ))}
      <div className='btn-container'>
        <button className='continue-btn' onClick={handleFormSubmit}>Continue</button>
        <button className='continue-btn' onClick={handleSkip}>Skip</button>
      </div>
      <button className='add-sec-btn' onClick={handleAddProject}>Add Project</button>
    </div>
  );
}

export default Projects;
