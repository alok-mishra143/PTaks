import { cookies } from "next/headers";
import React from "react";

const About = async () => {
  const cookie = await cookies();
  const theme = cookie.get("theme");
  console.log("theme", theme);

  return (
    <div>
      <h1>Time is : {new Date().toLocaleTimeString()}</h1>
    </div>
  );
};

export default About;
