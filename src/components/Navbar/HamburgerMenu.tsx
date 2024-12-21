import React, { useState } from 'react';

interface HamburgerMenuProps {
  children: React.ReactNode;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      {/* Hamburger Button */}
      <button
        className="p-2 rounded bg-gray-200 hover:bg-gray-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute right-0 top-12 w-48 bg-white shadow-md rounded-md p-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
