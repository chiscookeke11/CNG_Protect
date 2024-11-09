import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './onBoard.css';

const Onboarding = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const navigate = useNavigate();

  const screens = [
    {
      id: 1,
      image: "https://i.pinimg.com/564x/34/c3/33/34c3332cb8eb6c448bb4544cd7df4bcd.jpg",
      head: "Lorem Lorem",
      content: "Create personalized profiles for each of your beloved pets on PawBuddy. Share their name, breed, and age while connecting with a vibrant community."
    },
    {
      id: 2,
      image: "https://i.pinimg.com/564x/34/c3/33/34c3332cb8eb6c448bb4544cd7df4bcd.jpg",
      head: "Lorem Lorem",
      content: "Create personalized profiles for each of your beloved pets on PawBuddy. Share their name, breed, and age while connecting with a vibrant community."
    },
    {
      id: 3,
      image: "https://i.pinimg.com/564x/34/c3/33/34c3332cb8eb6c448bb4544cd7df4bcd.jpg",
      head: "Lorem Lorem",
      content: "Create personalized profiles for each of your beloved pets on PawBuddy. Share their name, breed, and age while connecting with a vibrant community."
    }
  ];

  const handleNext = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    } else {
      navigate('/');
    }
  };

  const handleSkip = () => {
    setCurrentScreen(screens.length - 1);
  };

  return (
    <div className="onboarding-container">
   

      <div
        className="onboarding-screens"
        style={{ transform: `translateX(-${currentScreen * 100}%)` }}
      >
        {screens.map((screen) => (
          <div key={screen.id} className="onboarding-screen">
            <img src={screen.image} alt="" />
            <h2>{screen.head}</h2>
            <p>{screen.content}</p>
          </div>
        ))}
      </div>

      {/* Screen Markers */}
      <div className="markers">
        {screens.map((_, index) => (
          <span
            key={index}
            className={`marker ${index === currentScreen ? 'active' : ''}`}
          ></span>
        ))}
      </div>

      <button onClick={handleNext}>
        {currentScreen < screens.length - 1 ? "Next" : "Get Started"}
      </button>


         {/* Skip Link */}
         <a onClick={handleSkip} className="skip-link">
        Skip
      </a>
    </div>
  );
};

export default Onboarding;
