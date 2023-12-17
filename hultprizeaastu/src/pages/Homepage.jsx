import React from "react";
import { Typography } from "@mui/material";
import { useSpring, animated } from "react-spring";
import Header from "../components/Header";

const HomePage = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <div>
      <Header />
      <animated.main style={fadeIn}>
        <Typography variant="h3">Home Page Content</Typography>
        {/* Add your main content here */}
      </animated.main>
    </div>
  );
};

export default HomePage;
