import React, { useState } from "react";
import "../styles/Form.scss";
import { Link } from "react-router";
import axios from "axios"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post("http://localhost:3000/api/auth/login",{
      username,
      password
    }, { withCredentials : true })
    .then((res) => {
      console.log(res)
    })
  }
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              onInput={(e) => {
                setUsername(e.target.value);
              }}
              type="name"
              id="username"
              name="username"
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
            />
          </div>

          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="toggleAuthForm">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
