import React from "react";

const Resister = () => {
  const [email, setEmail] = "";

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // const handlePasswordBlur = event => {

  // }
  return (
    <div>
      <h2>Resister</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="email" placeholder="Your Email" />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Resister;
