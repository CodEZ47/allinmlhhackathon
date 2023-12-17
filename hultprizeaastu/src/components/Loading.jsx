import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import { useSpring, animated } from "react-spring";
import logo from "../assets/hultprizelogo.png";

const Loading = () => {
  const [isBlinking, setBlinking] = useState(true);

  const springProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: isBlinking ? 1 : 0 },
    config: { duration: 3000 },
    onRest: () => setBlinking((prev) => !prev), // Toggle blinking state
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <animated.div style={springProps}>
        <img src={logo} alt="" />
      </animated.div>
      <CircularProgress />
    </div>
  );
};

export default Loading;
