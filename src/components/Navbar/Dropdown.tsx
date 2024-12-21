import React, { useState } from 'react';

interface DropdownProps {
  items: string[];
  onSelect: (item: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: string) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Button to toggle dropdown */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleToggle}
      >
        Options
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50">
          {items.map((item, index) => (
            <button
              key={index}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100"
              onClick={() => handleSelect(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
