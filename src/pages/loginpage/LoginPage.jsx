import React, { useState } from 'react'
import './loginPage.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    
    setEmailError('')
    setPasswordError('')


    if (email !== 'correct@email.com') {
      setEmailError('Email not found')
    }
    if (email === 'correct@email.com' && password !== 'correctpassword') {
      setPasswordError('Password incorrect')
    }
    if (email !== 'correct@gmail.com' && password !== 'correctpassword'){
      setPasswordError('Password incorrect');
      setEmailError('Email not found')

    }
   
    if (email === 'correct@email.com' && password === 'correctpassword') {
      alert('Login successful!')
     
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='login-page'>
      <div className="image-box">
        <img src="https://i.pinimg.com/564x/34/c3/33/34c3332cb8eb6c448bb4544cd7df4bcd.jpg" alt="Login" />
      </div>

      <form onSubmit={handleSubmit}>
        <h1>Login account</h1>
        <p>Welcome back! Please enter your information below to continue</p>

        <div className="input-group">
          <span className={emailError ? 'error' : ''}>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder='Your email' 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={emailError ? "true" : "false"}
              aria-describedby={emailError ? "email-error" : undefined}
            />
          </span>
          {emailError && <p id="email-error" className="error-message">{emailError}</p>}
        </div>

        <div className="input-group">
          <span className={passwordError ? 'error' : ''}>
            <input 
              type={showPassword ? "text" : "password"} 
              name="password" 
              id="password" 
              placeholder='Password'  
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={passwordError ? "true" : "false"}
              aria-describedby={passwordError ? "password-error" : undefined}
            />
            <button 
              type="button" 
              onClick={togglePasswordVisibility} 
              className="password-toggle"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash className='icon' /> : <FaEye className='icon' />}
            </button>
          </span>
          {passwordError && <p id="password-error" className="error-message">{passwordError}</p>}
        </div>

        <small className='forgot-password'>
          <NavLink to="/forgetpassword">Forgot Password?</NavLink>
        </small>

        <button type="submit">Login</button>
        <small className='signup'>
          Don't have an account? 
          <NavLink to="/signup"> Sign up here!</NavLink>
        </small>
      </form>
    </div>
  )
}