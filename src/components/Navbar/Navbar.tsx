import React, { useState } from 'react';
import Timer from './Timer.tsx';
import EndClassModal from './EndClassModal.tsx';
import HamburgerMenu from './HamburgerMenu.tsx';
import Dropdown from './Dropdown.tsx';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.module.css';

const Navbar: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDropdownSelect = (item: string) => {
    console.log('Selected:', item);
  };

  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100 shadow-md">
      {/* Logo and Title */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img
            src="https://scontent.fbho3-2.fna.fbcdn.net/v/t39.30808-6/313195593_529655762504095_8872185148026083141_n.png?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WROKbwOs0sIQ7kNvgGa0e1V&_nc_zt=23&_nc_ht=scontent.fbho3-2.fna&_nc_gid=ADxdiV4WcMCO0lKfoLKivfX&oh=00_AYAgSAVbNdwLvvlB7P14Ci49DxgPnhLbYDQUGouY-EEbkA&oe=676BF07A"
            alt="Logo"
            className="w-10 h-10"
          />
        </Link>
        <span className="mx-4 border-l border-r pr-4 pl-4 text-gray-700 font-bold">
          Trial Lesson [Grade 1-3]
        </span>

        <div className="hidden md:flex mx-4 text-gray-700 font-semibold">
          <Link
            to="/"
            className={`text-gray-700 flex items-center py-2 px-4 rounded-lg hover:text-gray-900 ${isActive('/') ? 'bg-gray-300' : ''}`}
          >
            Home
          </Link>
        </div>

        <div className="hidden md:flex mx-4 text-gray-700 font-semibold">
          <Link 
            to="/posts" 
            className={`text-gray-700 flex items-center py-2 px-4 rounded-lg hover:text-black ${isActive('/posts') ? 'bg-gray-300' : ''}`}
          >
            Posts
          </Link>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center space-x-4">
        <Timer />
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => setShowModal(true)}
        >
          End Class
        </button>
      </div>

      {/* Mobile View */}
      <HamburgerMenu>
        <div className="my-2">
          <Timer />
        </div>
        
        <Dropdown
          items={['Profile', 'Settings', 'Logout']}
          onSelect={handleDropdownSelect}
        />
        <div className="my-4">
          <Link to="/posts" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Posts
          </Link>
        </div>
        <div className="my-4">
          <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Home
          </Link>
        </div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4"
          onClick={() => setShowModal(true)}
        >
          End Class
        </button>
      </HamburgerMenu>

      {showModal && <EndClassModal onClose={() => setShowModal(false)} />}
    </nav>
  );
};

export default Navbar;
