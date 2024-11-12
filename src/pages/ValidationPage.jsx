import React, { useRef, useState } from 'react';
import '../index.css';

const ValidationPage = () => {
  const inputRefs = useRef([]);
  const [inputErrors, setInputErrors] = useState(Array(5).fill(false)); // State to track input errors

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const updatedErrors = [...inputErrors];

    // Allow only a single digit (0-9)
    if (/^[0-9]$/.test(value)) {
      updatedErrors[index] = false; // Reset error if input is valid

      // Move to the next input if there is one
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else {
      updatedErrors[index] = true; // Set error if input is invalid
      e.target.value = ''; // Clear invalid input
    }

    setInputErrors(updatedErrors);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const showPopup = () => {
    if (overLay.style.display = "none"){
      overLay.style.display = "flex"
    }
  }


  const closePopup = () => {
    if (overLay.style.display = "block"){
      overLay.style.display = "none"
    }
  }

  return (
    <div className='validation'>
      <form action="">
        <header>
          <h1>Validation Code</h1>
          <p>Check your email inbox and enter the validation code here</p>
        </header>

        <div className="input-holder">
          {[...Array(5)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              className={inputErrors[index] ? 'error' : ''}
            />
          ))}
        </div>

        <button>Confirm</button>
        <small>Did not receive the code? <a href="#">Resend</a></small>

        {/* Show success popup */}

        <p onClick={()=> showPopup()}>show popup</p>
      </form>










      {/* pop-up message */}


        <div className="overlaybg" id='overLay'>
          <div className="message-box">
            <h1>logo</h1>
            <p>You have successfully created an account</p>
            <button onClick={() => closePopup()} >Continue</button>
          </div>
        </div>
      
    </div>
  );
};

export default ValidationPage;
