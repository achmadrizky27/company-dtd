import React from "react";
import { useSpring, animated } from "@react-spring/web";

const FEWebDevTTSComponent = () => {
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
          <img src="/public/toolstechstack/html.png" alt="html" className="duration-300 rounded-md shadow-md shadow-blue-500 hover:translate-y-3" />
          <p className="text-xs">HTML</p>
        </animated.div>
        <animated.div style={translateY} className="flex flex-col gap-4 items-center w-10">
          <img src="/public/toolstechstack/css.png" alt="css" className="duration-300 rounded-md shadow-md shadow-blue-500 hover:translate-y-3" />
          <p className="text-xs">CSS</p>
        </animated.div>
        <animated.div style={translateY} className="flex flex-col gap-4 items-center w-10">
          <img src="/public/toolstechstack/bootstrap.png" alt="bootstrap" className="duration-300 rounded-md shadow-md shadow-blue-500 hover:translate-y-3" />
          <p className="text-xs">Bootstrap</p>
        </animated.div>
        <animated.div style={translateY} className="flex flex-col gap-4 items-center w-10">
          <img src="../toolstechstack/tailwindcss.png" alt="tailwindcss" className="duration-300 rounded-md shadow-md shadow-blue-500 hover:translate-y-3" />
          <p className="text-xs">TailwindCss</p>
        </animated.div>
        <animated.div style={translateY} className="flex flex-col gap-4 items-center w-10">
          <img src="/public/toolstechstack/javascript.png" alt="javascript" className="duration-300 rounded-md shadow-md shadow-blue-500 hover:translate-y-3" />
          <p className="text-xs">JavaScript</p>
        </animated.div>
        <animated.div style={translateY} className="flex flex-col gap-4 items-center w-10">
          <img src="/public/toolstechstack/php.png" alt="php" className="duration-300 rounded-md shadow-md shadow-blue-500 hover:translate-y-3" />
          <p className="text-xs">PHP</p>
        </animated.div>
        <animated.div style={translateY} className="flex flex-col gap-4 items-center w-10">
          <img src="/public/toolstechstack/reactjs.png" alt="reactjs" className="duration-300 rounded-md shadow-md shadow-blue-500 hover:translate-y-3" />
          <p className="text-xs">ReactJS</p>
        </animated.div>
        <animated.div style={translateY} className="flex flex-col gap-4 items-center w-10">
          <img src="/public/toolstechstack/laravel.png" alt="laravel" className="duration-300 rounded-md shadow-md shadow-blue-500 hover:translate-y-3" />
          <p className="text-xs">Laravel</p>
        </animated.div>
        <animated.div style={translateY} className="flex flex-col gap-4 items-center w-10">
          <img src="/public/toolstechstack/vscode.png" alt="vscode" className="duration-300 rounded-md shadow-md shadow-blue-500 hover:translate-y-3" />
          <p className="text-xs">VSCode</p>
        </animated.div>
      </div>
    </div>
  );
};

export default FEWebDevTTSComponent;
