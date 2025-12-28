import React from 'react';
import { Search, Menu, Plus } from 'lucide-react';

const Header = ({ onMenuClick }) => {
    return (
        <header className="h-16 flex items-center justify-between px-6 bg-[#e8e8e6]">
            {/* Search Bar - styled to match screenshot */}
            <div className="flex-1 max-w-lg">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search size={18} className="text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2.5 border-none rounded-full leading-5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white sm:text-sm shadow-sm"
                        placeholder="Try searching &quot;insights&quot;"
                    />
                </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3 ml-4">
                {/* Toggle / Menu Button Group */}
                <div className="flex items-center bg-white rounded-full p-1 shadow-sm">
                    <button
                        className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600 lg:hidden"
                        onClick={onMenuClick}
                    >
                        <Menu size={20} />
                    </button>
                    <button className="p-1.5 rounded-full hover:bg-gray-100 ml-1">
                        {/* Placeholder for the gradient icon in the design */}
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-400 to-purple-500"></div>
                    </button>
                </div>

                {/* Add Button */}
                <button className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full shadow hover:bg-red-700 transition">
                    <Plus size={24} />
                </button>
            </div>
        </header>
    );
};

export default Header;
