import React from 'react'
import '../loginpage/loginPage.css'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='login-page'>

    <div className="image-box">
        <img src="https://i.pinimg.com/564x/34/c3/33/34c3332cb8eb6c448bb4544cd7df4bcd.jpg" alt="" />
    </div>

    <form action="">
        <h1>Create account</h1>
        <p>Welcome! Please enter your information below and get started.</p>

        <span>
        <input type="email" name="email" id="email" placeholder='Your email' required/></span>

        <span>
        <input type="password" name="password" id="password" placeholder='Password'  required/> 
        </span>


        <small className='terms'>
            <input type="checkbox" id='terms'/><label htmlFor="terms">Accept Terms and Conditions</label>
        </small>

        <button>Create account</button>
        <small className='signup'>Already have an account?
           <NavLink to={"/onboard"}> <a href="#">  Log in here! </a></NavLink>
          </small>
    </form>

</div>
  )
}

export default SignUp