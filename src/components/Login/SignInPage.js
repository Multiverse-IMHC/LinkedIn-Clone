import React from 'react';
import './SignInPage.css';
// import { Link } from 'react-router-dom';
// import GoogleIcon from '@mui/icons-material/Google';


function SignInPage() {

  return (
        <div class="center">
            <div className="container">
                <div className="nav">

                    <img width="155px" height="47px" src="https://linkedin-clone-1604.web.app/images/login-logo.svg" alt="" />
                    <div className='nav-links'>
                        <button className="signin" type="button">Sign in</button>

                        <button className="JoinNow" type="button"> Join Now  </button>
                    </div>
                </div>
                <div className="section">
                    <div className="hero">
                        <h1>Welcome to your professional community</h1>
                        <img height="900px" src="https://linkedin-clone-1604.web.app/images/login-hero.svg" alt="Welcome to your professional community" /> </div>
           
                <div className='input'>  
                 <div className='input-signin'>

                 <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />

                 <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />

                <p>By login in, you agree to the <a href="#">User Agreement</a>, <a href="#">Privacy Policy</a>, and <a href="#">Cookie Policy</a>.</p>

                 <button className='login-button' type="submit">Log in</button>
                 </div>

                 <div className='separator'>
                 <div class="line"></div>
                    <h4>or</h4>
                <div class="line"></div>
                 </div>

                    <button class="google-btn">
                    <img className='btn-google'src="https://img.icons8.com/color/512/google-logo.png"/>
                    Join with Google
                    </button>
      </div>

        </div>
    </div>
    </div>
        
        
  );
}

export default SignInPage;
