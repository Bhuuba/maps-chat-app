import React from "react";

const Register = () => {
  return (
    <div>
      <form action="submit">
        <ul>
          <li>send me it</li>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button type="submit">submit</button>
        </ul>
      </form>
    </div>
  );
};

export default Register;
