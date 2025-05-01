import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const login = async () => {
    let responseData;
    await fetch('https://clothing-store-6uv5.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => responseData = data)

    if(responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  }

  const signup = async () => {
    let responseData;
    await fetch('https://clothing-store-6uv5.onrender.com/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => responseData = data)

    if(responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignuo-fields">
          {state === "Sign Up" && 
            <input 
              type="text" 
              placeholder='Your Name' 
              name='username'
              value={formData.username}
              onChange={changeHandler}
            />
          }
          <input 
            type="email" 
            placeholder='Email Address' 
            name='email'
            value={formData.email}
            onChange={changeHandler}
          />
          <input 
            type="password" 
            placeholder='Password' 
            name='password'
            value={formData.password}
            onChange={changeHandler}
          />
        </div>
        <button onClick={() => state === "Login" ? login() : signup()}>Continue</button>
        <p className="loginsignup-login">
          {state === "Sign Up" 
            ? "Already have an account? " 
            : "Create an account? "}
          <span onClick={() => setState(state === "Login" ? "Sign Up" : "Login")}>
            {state === "Sign Up" ? "Login here" : "Sign up"}
          </span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup