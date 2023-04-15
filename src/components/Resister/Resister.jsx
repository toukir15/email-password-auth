import React from "react";

const Resister = () => {
  return (
    <div>
      <h2>Resisterr</h2>
      <form>
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
