import React from "react";
import { useHistory } from "react-router-dom"
import './signup.css'

const SignUp = () => {
  const history = useHistory();

  return (
    <div className='onb-container'>
      <h1 className='onb-heading'>Get a parent/guardian to help you sign up!</h1>
      <div className='btn-container'>
        <button className='onb-btn' onClick={() => history.push("/child")}>I'm a kid</button>
        <button className='onb-btn' onClick={() => history.push("/parent")}>I'm a parent</button>
      </div>
    </div>
  )
}

export default SignUp;
