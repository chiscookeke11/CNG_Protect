import React, { useState } from 'react';
import './onBoard.css';

const Onboarding = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    { id: 1, content: "Welcome to the App!" },
    { id: 2, content: "Here's how to get started." },
    { id: 3, content: "Enjoy using the app!" }
  ];

  const handleNext = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  return (
    <div className="onboarding-container">
      <div
        className="onboarding-screens"
        style={{ transform: `translateX(-${currentScreen * 100}%)` }}
      >
        {screens.map((screen) => (
          <div key={screen.id} className="onboarding-screen">
            <h2>{screen.content}</h2>
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
    </div>
  );
};

export default Onboarding;
