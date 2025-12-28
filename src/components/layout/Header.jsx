import React, { useState } from 'react';
import { Search, Menu, Plus, Share2, Download, Upload } from 'lucide-react';

const Header = ({ onMenuClick }) => {
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    return (
        <header className="h-14 sm:h-16 flex items-center justify-between px-3 sm:px-4 md:px-6 bg-[#e8e8e6]">
            <div className="flex-1 max-w-xs sm:max-w-md lg:max-w-lg">
                <div className={`relative group transition-all duration-300 ${isSearchFocused ? 'scale-[1.02]' : ''}`}>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search size={16} className={`transition-colors duration-200 ${isSearchFocused ? 'text-primary' : 'text-gray-400'}`} />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-2.5 border-none rounded-full leading-5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-200"
                        placeholder='Try searching "insights"'
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                    />
                </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 ml-2 sm:ml-4">
                <div className="flex items-center bg-white rounded-full p-1 shadow-sm hover:shadow-md transition-all duration-200 space-x-1">
                    <button className="p-1.5 sm:p-2 rounded-full text-gray-500 lg:hidden hover:bg-gray-100 active:bg-gray-200 active:scale-90 transition-all duration-200" onClick={onMenuClick}>
                        <Menu size={16} />
                    </button>
                    <button className="p-1.5 sm:p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 active:scale-90 transition-all duration-200">
                        <Share2 size={16} />
                    </button>
                    <button className="p-1.5 sm:p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 active:scale-90 transition-all duration-200">
                        <Download size={16} />
                    </button>
                    <button className="p-1.5 sm:p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 active:scale-90 transition-all duration-200">
                        <Upload size={16} />
                    </button>
                    <button className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 active:scale-90 transition-all duration-200">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-r from-orange-400 to-purple-500"></div>
                    </button>
                </div>
                <button className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-primary text-white rounded-full shadow hover:bg-red-600 hover:shadow-lg hover:scale-105 active:bg-red-700 active:scale-95 transition-all duration-200">
                    <Plus size={20} />
                </button>
            </div>
        </header>
    );
};

export default Header;
