import React, {useState}from 'react'
import './signup.css'

const SignupForm = () => {
    const [firstName, setFirstName] = useState(null);
    console.log(firstName)
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }
    const handleSubmit  = () => {
        console.log(firstName,lastName,email,password,confirmPassword);
    }

  return (
    <div>
      <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" >First Name </label>
                  <input className="form__input" onChange = {(e) => handleInputChange(e)}
        value={firstName} type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" onChange = {(e) => handleInputChange(e)}
        value={lastName} name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" onChange = {(e) => handleInputChange(e)}
        value={email} id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" onChange = {(e) => handleInputChange(e)}
        value={password} type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" onChange = {(e) => handleInputChange(e)}
        value={confirmPassword} type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn">Register</button>
          </div>
      </div>      
    </div>
  )
}

export default SignupForm
