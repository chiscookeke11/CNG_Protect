import React from 'react'
import './loginPage.css'
import { FaEye } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='login-page'>

        <div className="image-box">
            <img src="https://i.pinimg.com/564x/34/c3/33/34c3332cb8eb6c448bb4544cd7df4bcd.jpg" alt="" />
        </div>

        <form action="">
            <h1>Login account</h1>
            <p>Welcome back ! Please enter your information below to continue</p>

            <span>
            <input type="email" name="email" id="email" placeholder='Your email' required/></span>

            <span>
            <input type="password" name="password" id="password" placeholder='Password'  required/> <FaEye className='icon'/>
            </span>

            
            <small className='forgot-password'>
              <NavLink to={"/forgetpassword"}>
              Forgot Password?</NavLink></small>

            <button>Login</button>
            <small className='signup'>Don’t have an account? 
               <NavLink to={"/signup"}> <a href="#"> Sign up here!</a></NavLink>
              </small>
        </form>

    </div>
  )
}

export default LoginPage