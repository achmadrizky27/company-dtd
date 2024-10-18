import { useState, useEffect } from "react";

function OpeningApp() {
  const [showPopup, setShowPopup] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const hideTimer = setTimeout(() => {
        setShowPopup(false);
      }, 500);
      return () => clearTimeout(hideTimer);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPopup && (
        <div className={`bg-blue-950 fixed flex inset-0 items-center justify-center z-50 px-3 md:px-7 ${fadeOut ? "animate-fade-out" : ""}`}>
          <div className="flex flex-col gap-4 items-center justify-center text-center text-white">
            <img src="../profile/logo-non-bg.png" alt="logo-non-bg" className="w-32 md:w-52 animate-bounce" />
            <p className="text-2xl font-bold">
              Welcome to <span className="text-blue-300">PT. Grafire Tech Development</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default OpeningApp;
