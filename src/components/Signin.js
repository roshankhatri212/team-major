import React from 'react'
import login from "./login.jpg"
import login2 from "./login2.jpg"

const Signin = () => {
  
  return (
    <>
  

    {/* This is main signINform container */}
    <div className="signInform-container">
      {/* This is for signInform  */}
      <div className="signInform">
       
        <div className="signIntext">
          <div className="welcomeText">Welcome back</div>
          <div className="pleaseText">Please enter your details</div>
          
        </div>
        <form >
          <div className="email">
            <label for="email">Email:</label><br></br>
            <input type="email" name="email" id="email" className='textarea'  placeholder='Enter your email' autoComplete='off'></input>
          </div>
          <div className="password">
            <label for="password">Password:</label><br></br>
            <input type="password" name="password" id="password" className='textarea' 
            placeholder='Enter your password' autoComplete='off'></input>
          </div>
          <div className="rememberAndforget">
           
              <input type='checkbox' name="checkbox"></input>
              <span id="rememberMe">Remember for 30 days</span>
              <span id="forgetpass">Forget password</span>
            
          </div>
        </form>
        <div className="signIN-btn">
          <button type="submit">Sign In</button>
        </div>


        <div className="noAccount">
          <span>Don't have an account?<span id='signUp'>Sign Up</span> </span>
        </div>
        
         
        
        
      </div>

{/* This is for signin image. */}
      <div className="signInform-img">
<img src={login2} alt=''></img>
      </div>

    </div>
    </>
  )
}

export default Signin
