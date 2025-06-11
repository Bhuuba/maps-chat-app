import React from 'react';

const Register = () => (
  <section className="register">
    <h1 className="page-title">Create Account</h1>
    <form className="form">
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button className="btn" type="submit">Submit</button>
    </form>
  </section>
);

export default Register;
