import React from "react";
import { useSpring, animated } from "@react-spring/web";

const UIUXDesignTTSComponent = () => {
  // Animation -> Translate Y
  const translateY = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 1000 },
  });

  return (
    <div className="container font-poppins">
      <div className="flex flex-wrap gap-16 items-center justify-center max-w-7xl mx-3 lg:mx-7">
        <animated.div style={translateY} className="flex flex-col gap-4 items-center w-10">
          <img src="/public/toolstechstack/materialui.png" alt="materialui" className="duration-300 rounded-md shadow-md shadow-blue-500 hover:translate-y-3" />
          <p className="text-xs">MaterialUI</p>
        </animated.div>
        <animated.div style={translateY} className="flex flex-col gap-4 items-center w-10">
          <img src="/public/toolstechstack/figma.png" alt="figma" className="duration-300 rounded-md shadow-md shadow-blue-500 hover:translate-y-3" />
          <p className="text-xs">Figma</p>
        </animated.div>
      </div>
    </div>
  );
};

export default UIUXDesignTTSComponent;
