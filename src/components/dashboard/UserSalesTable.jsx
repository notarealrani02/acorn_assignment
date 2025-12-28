import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const UserSalesTable = () => {
    return (
        <div className="bg-white rounded-3xl p-6 mt-6 shadow-sm border border-gray-100">
            {/* Headers */}
            <div className="grid grid-cols-12 gap-4 text-xs font-semibold text-gray-400 mb-4 px-2">
                <div className="col-span-3">Sales</div>
                <div className="col-span-2">Revenue</div>
                <div className="col-span-2">Leads</div>
                <div className="col-span-1">KPI</div>
                <div className="col-span-4 text-right pr-4">W/L</div>
            </div>

            {/* Row 1 - Armin */}
            <div className="grid grid-cols-12 gap-4 items-center mb-4 px-2 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="col-span-3 flex items-center">
                    <img src="https://i.pravatar.cc/150?u=armin" className="w-8 h-8 rounded-full mr-3" alt="" />
                    <span className="font-bold text-gray-900">Armin A.</span>
                </div>
                <div className="col-span-2 font-bold text-gray-900">$209,633</div>
                <div className="col-span-2 flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center">41</span>
                    <span className="text-sm font-medium text-gray-500">118</span>
                </div>
                <div className="col-span-1 font-bold text-gray-900">0.84</div>
                <div className="col-span-4 flex items-center justify-end space-x-3">
                    <span className="text-sm font-medium text-gray-900">31%</span>
                    <span className="w-6 h-6 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center">12</span>
                    <span className="text-sm font-medium text-gray-500">29</span>
                </div>
            </div>

            {/* Row 2 - Mikasa */}
            <div className="grid grid-cols-12 gap-4 items-center px-2 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="col-span-3 flex items-center">
                    <img src="https://i.pravatar.cc/150?u=mikasa" className="w-8 h-8 rounded-full mr-3" alt="" />
                    <span className="font-bold text-gray-900">Mikasa A.</span>
                </div>
                <div className="col-span-2 font-bold text-gray-900">$156,841</div>
                <div className="col-span-2 flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center">54</span>
                    <span className="text-sm font-medium text-gray-500">103</span>
                </div>
                <div className="col-span-1 font-bold text-gray-900">0.89</div>
                <div className="col-span-4 flex items-center justify-end space-x-3 relative">
                    <span className="text-sm font-medium text-gray-900">39%</span>
                    <span className="w-6 h-6 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center">21</span>
                    <span className="text-sm font-medium text-gray-500">33</span>

                    {/* Expand Arrow Button */}
                    <button className="absolute right-[-20px] w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-md hover:bg-red-700">
                        <ChevronUp size={16} />
                    </button>
                </div>
            </div>

            {/* Badges Row */}
            <div className="mt-6 flex space-x-3">
                <Badge label="Top sales" icon="💪" />
                <Badge label="Sales streak" icon="🔥" />
                <Badge label="Top review" icon="👍" />
            </div>
        </div>
    )
}

const Badge = ({ label, icon }) => (
    <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-gray-100 rounded-full shadow-sm text-xs font-bold text-gray-700">
        <span>{label}</span>
        <span>{icon}</span>
    </div>
)

export default UserSalesTable;
