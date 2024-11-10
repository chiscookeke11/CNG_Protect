import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import ShowOnDesktop from './pages/ShowOnDesktop'
import LoginPage from './pages/loginpage/LoginPage'
import SignUp from './pages/Signuppage/SignUp';
import ForgetPassword from './pages/forgetpassword/ForgetPassword';
import Onboarding from './pages/onboardingscreen/OnboardingScreen';
import ValidationPage from './pages/ValidationPage';

const App = () => {
  if (window.innerWidth >= 1024) {
    return <ShowOnDesktop />;
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/" element={<Onboarding />} />
          <Route path="/validation" element={<ValidationPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
};

export default App
