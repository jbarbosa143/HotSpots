import React from "react";
import Layout from "../Body/Layout";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <Layout>
      <div className="header">
        <h1>Hot Spots Log-In</h1>
      </div>
      <div className="login">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </div>
      <div className="footer">
        <h4>
          Dont have an account?{" "}
          <span>
            <Link to="/register">Register Here</Link>
          </span>
        </h4>
      </div>
    </Layout>
  );
}

export default SignIn;
