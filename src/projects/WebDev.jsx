import { useState } from "react";

const WebDevelopment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col gap-5 items-start justify-center w-full md:flex-row">
      <div className="w-full md:w-1/2">
        <img src="../services/wd.png" alt="wd" />
      </div>
      <div className="flex flex-col gap-5 w-full md:w-1/2">
        <div className="flex flex-col gap-2 items-center justify-center md:items-start">
          <p className="font-bold text-3xl md:text-4xl">Web Development</p>
          <p className="italic text-justify md:text-left">
            Enhance your digital presence with a modern, fast, and responsive website designed to convert visitors into customers. We are here to create a platform that aligns with your brand identity and the evolving needs of your
            business. An attractive, functional website ready to compete in the digital world.
          </p>
        </div>
        <hr className="border-2 w-full" />

        {/* Informasi */}
        <div className="flex flex-col gap-2 rounded-md w-auto">
          <div className="flex flex-col">
            {/* Button Dropdown */}
            <button onClick={toggleDropdown} className="duration-300 flex gap-2 items-center justify-between hover:text-orange-700">
              <p>Detail Information</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
                <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z" />
              </svg>
            </button>

            {/* Dropdown */}
            {isOpen && (
              <div className="flex flex-col gap-1 mt-2">
                <ul className="text-sm">
                  <li className="flex items-center gap-2">
                    <p>Harga?</p>
                    <p>Rp.25.000.000 - Rp.50.000.000</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <p>Layanan Konsultasi?</p>
                    <a href="/" className="duration-300 hover:text-orange-700">
                      Admin
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WebDevelopment;
