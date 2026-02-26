import React, { useState } from "react";
import "../styles/Form.scss";
import { Link } from "react-router";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:3000/api/auth/register",
        {
          username,
          email,
          password,
        },
        { withCredentials: true },
      )
      .then((res) => {
        console.log(res);
      });
  }
  
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              onInput={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              id="username"
              name="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onInput={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onInput={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              id="password"
              name="password"
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="toggleAuthForm">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
