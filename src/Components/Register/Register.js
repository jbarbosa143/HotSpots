import React from "react";
import Layout from "../Body/Layout";

function Register() {
  return (
    <Layout>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <input type="text" placeholder="State" />
        <input type="text" placeholder="City" />
        <input type="number" placeholder="Zip Code" />
        <button type="submit">Create Account</button>
      </form>
    </Layout>
  );
}

export default Register;
