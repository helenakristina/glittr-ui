import React from "react";
import { useHistory } from "react-router-dom"

const SignUp = () => {
  const history = useHistory();

  return (
    <div>
      <h2>Get a parent/guardian to help you sign up!</h2>
      <div>
        <button onClick={() => history.push("/child")}>I'm a kid</button>
        <button onClick={() => history.push("/parent")}>I'm a parent</button>
      </div>
    </div>
  )
}

export default SignUp;
