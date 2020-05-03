import React, { useState } from "react";
import styled from 'styled-components';

const Form = styled.form`
display: flex;
flex-direction: column;
width: 30%;
align-self: center;
`;

const Login = () => {
  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={creds.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={creds.password}
          onChange={handleChange}
        />
        <button>submit</button>
      </Form>
    </div>
  );
};

export default Login;
