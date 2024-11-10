import React from 'react'
import { NavLink } from 'react-router-dom'
import '../loginpage/loginPage.css'

const SignUp = () => {
  return (
    <div className='login-page'>
      <div className="image-box">
        <img src="https://i.pinimg.com/564x/34/c3/33/34c3332cb8eb6c448bb4544cd7df4bcd.jpg" alt="Sign Up" />
      </div>

      <form>
        <h1>Create account</h1>
        <p>Welcome! Please enter your information below and get started.</p>

        <span>
          <input type="email" name="email" id="email" placeholder='Your email' required />
        </span>

        <span>
          <input type="password" name="password" id="password" placeholder='Password' required /> 
        </span>

        <div className='terms'>
          <input type="checkbox" id='terms' />
          <label htmlFor="terms">Accept Terms and Conditions</label>
        </div>

       <NavLink to={"/validation"} > <p>validate</p></NavLink>

        <button type="submit">Create account</button>
        <small className='signup'>
          Already have an account?
          <NavLink to="/loginpage"> Log in here! </NavLink>
        </small>
      </form>
    </div>
  )
}

export default SignUp