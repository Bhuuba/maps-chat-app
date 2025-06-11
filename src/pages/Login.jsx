import React from 'react';

const Login = () => (
  <section className="login">
    <h1 className="page-title">Log In</h1>
    <form className="form">
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button className="btn" type="submit">Login</button>
    </form>
  </section>
);

export default Login;
