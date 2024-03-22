import User from "./User";
import React, { useContext } from 'react';
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils.js/UserContext";


// Converted About component to a functional component
const About = () => {
  // Accessing context in a functional component
  const { loggedInUser } = useContext(UserContext);

  return (
    <div>
      <h1>About Class Component</h1>
      <div>
        LoggedIn User
        <h1 className="text-xl font-bold">{loggedInUser}</h1>
      </div>
      <h2>This is Namaste React Web Series</h2>
      {/* Assuming UserClass remains a class component; you might consider converting it as well */}
      <UserClass name={"First"} location={"Dehradun Class"} />
    </div>
  );
};

export default About;