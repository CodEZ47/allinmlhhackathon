import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";

const Error404 = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.molasses,
  });

  const slideIn = useSpring({
    marginLeft: 0,
    from: { marginLeft: -500 },
    config: config.wobbly,
  });

  const rotate = useSpring({
    transform: "rotate(360deg)",
    from: { transform: "rotate(0deg)" },
    config: config.stiff,
  });

  const scale = useSpring({
    transform: "scale(1)",
    from: { transform: "scale(0)" },
    config: config.gentle,
  });

  const shake = useSpring({
    transform: "translateX(0px)",
    from: { transform: "translateX(-10px)" },
    config: { tension: 280, friction: 30 },
  });

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <animated.h1 style={{ ...fadeIn, ...rotate, ...shake }}>
        404 - Not Found
      </animated.h1>
      <animated.p style={slideIn}>
        The page you are looking for might be unavailable or does not exist.
      </animated.p>
      <animated.p style={scale}>
        Try going back to <Link to="/">Home</Link>.
      </animated.p>
    </div>
  );
};

export default Error404;
