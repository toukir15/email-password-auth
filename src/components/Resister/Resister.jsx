import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const Resister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    // 1. prevent page refresh
    event.preventDefault();
    setSuccess("");
    setError("");
    // 2. collect form data
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    //3.create user in fb
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        event.target.reset();
        setSuccess("user has been create successfully");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div>
      <h2>Resister</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleEmail}
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          required
        />
        <br />
        <input
          onChange={handlePassword}
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p className="text-danger">{error}</p>
      <p className="text-success">{success}</p>
    </div>
  );
};

export default Resister;
