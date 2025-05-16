import { useState } from 'react';
import { MenuIcon, SearchIcon, MoonIcon, BellIcon, SunIcon } from '../ui/CustomIcons';
import { useDarkMode } from '../../contexts/DarkModeContext';
const Navbar = ({ setMobileSidebarOpen }: { setMobileSidebarOpen: (open: boolean) => void }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="bg-white dark:bg-dark-800 shadow-sm border-b border-gray-200 dark:border-dark-700">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <button
            className="md:hidden mr-4 text-gray-600 dark:text-gray-300"
            onClick={() => setMobileSidebarOpen(true)}
          >
            <MenuIcon size={24} />
          </button>
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-dark-600 dark:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark"
          >
            {darkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark relative">
            <BellIcon size={20} />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <span className="ml-2 hidden md:inline">John Doe</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;