import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const UserSalesTable = () => {
    const [expandedRow, setExpandedRow] = useState(1); // Mikasa row expanded by default

    const toggleRow = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    return (
        <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 mt-4 sm:mt-6 shadow-sm border border-gray-100">
            {/* Headers - Hidden on mobile, show simplified version */}
            <div className="hidden sm:grid grid-cols-12 gap-2 sm:gap-4 text-[10px] sm:text-xs font-semibold text-gray-400 mb-3 sm:mb-4 px-2">
                <div className="col-span-3">Sales</div>
                <div className="col-span-2">Revenue</div>
                <div className="col-span-2">Leads</div>
                <div className="col-span-1">KPI</div>
                <div className="col-span-4 text-right pr-4">W/L</div>
            </div>

            {/* Mobile Headers */}
            <div className="sm:hidden flex justify-between text-[10px] font-semibold text-gray-400 mb-3 px-1">
                <span>Sales</span>
                <span>Revenue</span>
                <span>W/L</span>
            </div>

            {/* Row 1 - Armin */}
            <div
                className={`grid grid-cols-12 gap-2 sm:gap-4 items-center mb-2 sm:mb-4 px-1 sm:px-2 py-2 sm:py-3 rounded-xl cursor-pointer
                          transition-all duration-200 ${expandedRow === 0 ? 'bg-gray-50 shadow-inner' : 'hover:bg-gray-50'}
                          active:scale-[0.99]`}
                onClick={() => toggleRow(0)}
            >
                <div className="col-span-6 sm:col-span-3 flex items-center">
                    <img src="https://i.pravatar.cc/150?u=armin" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full mr-2 sm:mr-3" alt="" />
                    <span className="font-bold text-gray-900 text-xs sm:text-sm truncate">Armin A.</span>
                </div>
                <div className="col-span-3 sm:col-span-2 font-bold text-gray-900 text-xs sm:text-sm">$209,633</div>
                <div className="hidden sm:flex col-span-2 items-center space-x-2">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black text-white text-[10px] sm:text-xs font-bold flex items-center justify-center">41</span>
                    <span className="text-xs sm:text-sm font-medium text-gray-500">118</span>
                </div>
                <div className="hidden sm:block col-span-1 font-bold text-gray-900 text-sm">0.84</div>
                <div className="col-span-3 sm:col-span-4 flex items-center justify-end space-x-2 sm:space-x-3">
                    <span className="text-xs sm:text-sm font-medium text-gray-900">31%</span>
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black text-white text-[10px] sm:text-xs font-bold flex items-center justify-center">12</span>
                    <span className="hidden sm:inline text-sm font-medium text-gray-500">29</span>
                    <button
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all duration-200 
                                  ${expandedRow === 0 ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'} 
                                  active:scale-90`}
                        onClick={(e) => { e.stopPropagation(); toggleRow(0); }}
                    >
                        <ChevronUp size={14} className={`transition-transform duration-300 ${expandedRow === 0 ? '' : 'rotate-180'}`} />
                    </button>
                </div>
            </div>

            {/* Expanded Content for Row 1 */}
            <div className={`overflow-hidden transition-all duration-300 ${expandedRow === 0 ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4 mx-1 sm:mx-2">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm">
                        <div><span className="text-gray-500">Leads:</span> <span className="font-bold">118</span></div>
                        <div><span className="text-gray-500">KPI:</span> <span className="font-bold">0.84</span></div>
                        <div><span className="text-gray-500">Won:</span> <span className="font-bold text-green-600">12</span></div>
                        <div><span className="text-gray-500">Lost:</span> <span className="font-bold text-red-500">29</span></div>
                    </div>
                </div>
            </div>

            {/* Row 2 - Mikasa */}
            <div
                className={`grid grid-cols-12 gap-2 sm:gap-4 items-center px-1 sm:px-2 py-2 sm:py-3 rounded-xl cursor-pointer
                          transition-all duration-200 ${expandedRow === 1 ? 'bg-gray-50 shadow-inner' : 'hover:bg-gray-50'}
                          active:scale-[0.99]`}
                onClick={() => toggleRow(1)}
            >
                <div className="col-span-6 sm:col-span-3 flex items-center">
                    <img src="https://i.pravatar.cc/150?u=mikasa" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full mr-2 sm:mr-3" alt="" />
                    <span className="font-bold text-gray-900 text-xs sm:text-sm truncate">Mikasa A.</span>
                </div>
                <div className="col-span-3 sm:col-span-2 font-bold text-gray-900 text-xs sm:text-sm">$156,841</div>
                <div className="hidden sm:flex col-span-2 items-center space-x-2">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black text-white text-[10px] sm:text-xs font-bold flex items-center justify-center">54</span>
                    <span className="text-xs sm:text-sm font-medium text-gray-500">103</span>
                </div>
                <div className="hidden sm:block col-span-1 font-bold text-gray-900 text-sm">0.89</div>
                <div className="col-span-3 sm:col-span-4 flex items-center justify-end space-x-2 sm:space-x-3">
                    <span className="text-xs sm:text-sm font-medium text-gray-900">39%</span>
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black text-white text-[10px] sm:text-xs font-bold flex items-center justify-center">21</span>
                    <span className="hidden sm:inline text-sm font-medium text-gray-500">33</span>
                    <button
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all duration-200 
                                  ${expandedRow === 1 ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'} 
                                  active:scale-90`}
                        onClick={(e) => { e.stopPropagation(); toggleRow(1); }}
                    >
                        <ChevronUp size={14} className={`transition-transform duration-300 ${expandedRow === 1 ? '' : 'rotate-180'}`} />
                    </button>
                </div>
            </div>

            {/* Expanded Content for Row 2 */}
            <div className={`overflow-hidden transition-all duration-300 ${expandedRow === 1 ? 'max-h-40 opacity-100 mb-2' : 'max-h-0 opacity-0'}`}>
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4 mx-1 sm:mx-2 mt-2">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm">
                        <div><span className="text-gray-500">Leads:</span> <span className="font-bold">103</span></div>
                        <div><span className="text-gray-500">KPI:</span> <span className="font-bold">0.89</span></div>
                        <div><span className="text-gray-500">Won:</span> <span className="font-bold text-green-600">21</span></div>
                        <div><span className="text-gray-500">Lost:</span> <span className="font-bold text-red-500">33</span></div>
                    </div>
                </div>
            </div>

            {/* Badges Row */}
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
                <Badge label="Top sales" icon="💪" />
                <Badge label="Sales streak" icon="🔥" />
                <Badge label="Top review" icon="👍" />
            </div>
        </div>
    )
}

const Badge = ({ label, icon }) => (
    <div className="flex items-center space-x-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-white border border-gray-100 rounded-full shadow-sm text-[10px] sm:text-xs font-bold text-gray-700
                  hover:shadow-md hover:scale-105 hover:border-gray-200 active:scale-95 transition-all duration-200 cursor-pointer">
        <span>{label}</span>
        <span>{icon}</span>
    </div>
)

export default UserSalesTable;
