import React from 'react'
import './navBar.css'

const Navbar = () => {
  return (
        <nav>



        <div className="logo">
            <h1>Logo</h1>
        </div>


            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <button>Get started</button>


        </nav>
  )
}

export default Navbar