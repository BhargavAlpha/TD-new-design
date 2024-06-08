import React, { useState, useEffect } from 'react';
import './Component.css';

function Personal({ handleContinue, personal, setPersonal}) {
  // Define state variables for personal information
  const [name, setName] = useState(personal.name || '');
  const [phone, setPhone] = useState(personal.phone || '');
  const [email, setEmail] = useState(personal.email || '');
  const [city, setCity] = useState(personal.city || '');
  const [state, setState] = useState(personal.state || '');
  const [position, setPosition] = useState(personal.position || '');
  const [company, setCompany] = useState(personal.company || '');

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (name  && phone && email && city && state && position && company) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [name, phone, email, city, state , position, company]);

  // Handle continue button click
  const handleContinueClick = () => {
    setPersonal({ ...personal, phone, email, city, state, position,company});
    handleContinue();
  };

  return (
    <div className='component'>
      <h2>Personal information</h2>
      <div className='row1'>
        <div className='input-div' >
          <label>Full Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='e.g., John'
            className='input-box'
            disabled={true}
          />
        </div>
      </div>
      
      <div className='row1'>
        <div className='input-div' >
          <label>Phone</label>
          <input
            type='text'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder='e.g., 123-456-7890'
            className='input-box'
          />
        </div>
      </div>
      <div className='row1'>
        <div className='input-div'>
          <label>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='e.g., john@example.com'
            className='input-box'
            disabled={true}
          />
        </div>
      </div>
      <div className='row1'>
        <div className='input-div' >
          <label>City</label>
          <input
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder='e.g., New York'
            className='input-box'
          />
        </div>
      </div>
      <div className='row1'>
        <div className='input-div' >
          <label>State</label>
          <input
            type='text'
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder='e.g., NY'
            className='input-box'
          />
        </div>
      </div>
      <div className='row1'>
        <div className='input-div'>
          <label>Position</label>
          <input
            type='text'
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder='e.g., Student/Developer'
            className='input-box'
          />
        </div>
      </div>
      <div className='row1'>
        <div className='input-div'>
          <label>Company</label>
          <input
            type='text'
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder='e.g., Company Name/College'
            className='input-box'
          />
        </div>
        
      </div>
      <button 
        className='continue-btn' 
        onClick={handleContinueClick} 
        disabled={!isFormValid}
      >
        Continue
      </button>
    </div>
  );
}

export default Personal;
