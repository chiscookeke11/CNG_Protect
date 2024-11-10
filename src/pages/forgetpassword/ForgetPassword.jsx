import React, { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import './forgetPassword.css';
import { NavLink, useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validateInput = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?[0-9]{10,15}$/;
    return emailPattern.test(value) || phonePattern.test(value);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsValid(true); // Reset validation on change
    setErrorMessage('');
  };

  const handleSubmit = () => {
    if (validateInput(inputValue)) {
      // Code for sending the verification code
      console.log('Code sent to:', inputValue);
    } else {
      setIsValid(false);
      setErrorMessage('Please enter a valid email or phone number.');
    }
  };

  return (
    <div className="forget-password">
      <form action="">
        <FaChevronLeft className="backarrow" onClick={() => navigate(-1)} />
        <h1>Forgot password?</h1>
        <p>Don’t worry! It happens. Please enter the email associated with your account.</p>

        <span className="input-field">
          <label htmlFor="contact">Email or Phone number</label>
          <input
            type="text"
            id="contact"
            value={inputValue}
            onChange={handleInputChange}
            required
            placeholder="Email or Phone number"
            className={!isValid ? 'invalid' : ''}
          />
        </span>

        {!isValid && <p className="error-message">{errorMessage}</p>}

        <button type="button" onClick={handleSubmit}>Send code</button>
      </form>

      <div className="login-link">
        Remember password?
        <span>
          <NavLink to="/loginpage"  className="custom-link">Log in</NavLink>
        </span>
      </div>
    </div>
  );
};

export default ForgetPassword;
