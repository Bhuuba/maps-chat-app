import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <h1>Hello there!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
          accusantium numquam sapiente, illum maiores dignissimos quibusdam rem
          modi eum nostrum autem ut eveniet iusto consectetur consequuntur
          itaque quaerat libero iure.
        </p>
        <button>
          <Link to="/register">Go to Register</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
