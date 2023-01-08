import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
        <div className="container">

        
        <div className="navbar">
            <nav>
                <div className="logo">
                <Link to='/'>BLOOD-FINDER</Link>
                </div>
                <div className="listitem">
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/donate">Donate</Link></li>
                <li><Link to="/donars">Donars</Link></li>
                <li><Link to="/signin">Signin</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                </ul>
                </div>
               
                

            </nav>
        </div>
       

    
        </div>

        </>
    
  )
}

export default Home
