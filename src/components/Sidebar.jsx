import { useState } from 'react';
import { HomeIcon, SearchIcon, UserIcon, MenuIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden flex items-center p-4">
        <button onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon className="h-6 w-6 text-white" />
        </button>
      </div>
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: isOpen ? 0 : -250 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className='bg-gray-800 text-gray-300 w-64 h-screen fixed lg:relative lg:translate-x-0 lg:flex lg:flex-col'
      >
        <div className="p-4 text-2xl font-bold text-white">Stock Dashboard</div>
        <nav className="flex-1">
          <ul>
            <li className="hover:bg-gray-700">
              <a href="home" className="flex items-center p-4">
                <HomeIcon className="h-6 w-6 mr-2" />
                Home
              </a>
            </li>
            <li className="hover:bg-gray-700">
              <a href="search" className="flex items-center p-4">
                <SearchIcon className="h-6 w-6 mr-2" />
                Search
              </a>
            </li>
            <li className="hover:bg-gray-700">
              <a href="profile" className="flex items-center p-4">
                <UserIcon className="h-6 w-6 mr-2" />
                Profile
              </a>
            </li>
          </ul>
        </nav>
      </motion.div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Sidebar;
