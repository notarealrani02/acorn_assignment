import React, { useState } from 'react';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';
import { Filter, ShoppingBag, ChevronDown } from 'lucide-react';

const data = [
    { name: '1', value: 30, color: '#fca5a5' },
    { name: '2', value: 45, color: '#fca5a5' },
    { name: '3', value: 25, color: '#e11d48' },
    { name: '4', value: 50, color: '#f3f4f6' },
    { name: '5', value: 35, color: '#f3f4f6' },
];

const PlatformValueWidget = () => {
    const [selectedPlatform, setSelectedPlatform] = useState('Dribbble');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const platforms = [
        { icon: "🏀", label: "Dribbble", value: "$227,459", pct: "43%" },
        { icon: "📷", label: "Instagram", value: "$142,823", pct: "27%" },
        { icon: "Be", label: "Behance", value: "$89,935", pct: "11%", type: "blue" },
        { icon: "G", label: "Google", value: "$37,028", pct: "7%" },
    ];

    return (
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100 h-full">
            {/* Header with dropdown */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center text-xs">🏀</div>
                    <span className="text-sm font-medium text-gray-700">Platform value</span>
                    <span className="text-sm text-gray-400">Dribbble</span>
                    <ChevronDown size={14} className="text-gray-400" />
                </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center space-x-2 mb-6">
                <button className="px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-full hover:bg-gray-800 transition-colors">
                    Revenue
                </button>
                <button className="px-3 py-1.5 text-gray-500 text-xs font-medium rounded-full hover:bg-gray-100 transition-colors">
                    Leads
                </button>
                <button className="px-3 py-1.5 text-gray-500 text-xs font-medium rounded-full hover:bg-gray-100 transition-colors">
                    W/L
                </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {/* Left: Platform List */}
                <div className="bg-[#f7f7f7] rounded-2xl p-4">
                    <div className="flex justify-between items-center mb-3">
                        <button
                            className={`p-1.5 rounded-lg shadow-sm cursor-pointer transition-all duration-200
                                      ${isFilterOpen ? 'bg-primary text-white' : 'bg-white hover:bg-gray-50'} 
                                      hover:shadow-md active:scale-90`}
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                        >
                            <Filter size={12} className={isFilterOpen ? 'text-white' : 'text-gray-500'} />
                        </button>
                        <span className="text-[10px] font-medium text-gray-500 bg-white px-2 py-1 rounded-full shadow-sm">
                            Filters ☰
                        </span>
                    </div>

                    <div className="space-y-2">
                        {platforms.map((platform) => (
                            <PlatformRow
                                key={platform.label}
                                {...platform}
                                isSelected={selectedPlatform === platform.label}
                                onClick={() => setSelectedPlatform(platform.label)}
                            />
                        ))}
                    </div>
                </div>

                {/* Right: Chart */}
                <div className="bg-[#f7f7f7] rounded-2xl p-4 relative">
                    <div className="flex justify-between items-center mb-2">
                        <BarIcon />
                        <span className="text-[10px] font-medium text-gray-500 bg-white px-2 py-1 rounded-full shadow-sm">
                            Filters ☰
                        </span>
                    </div>

                    <div className="h-32 mt-2 relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <Bar dataKey="value" radius={[8, 8, 8, 8]}>
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>

                        {/* Floating badges */}
                        <div className="absolute top-[25%] left-[18%] w-5 h-5 bg-white rounded-full shadow-sm flex items-center justify-center text-[8px] font-bold text-blue-500">
                            Be
                        </div>
                        <div className="absolute top-[40%] left-[45%] w-5 h-5 bg-white rounded-full shadow-sm flex items-center justify-center">
                            <span className="text-[8px]">G</span>
                        </div>
                        <div className="absolute bottom-[25%] right-[20%] w-5 h-5 bg-white rounded-full shadow-sm flex items-center justify-center text-pink-500">
                            <ShoppingBag size={8} />
                        </div>
                    </div>

                    <div className="mt-2">
                        <h3 className="text-xs font-bold text-gray-700">Deals amount</h3>
                        <div className="text-[10px] text-gray-500 flex items-center">
                            by referrer category <ChevronDown size={10} className="ml-1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const PlatformRow = ({ icon, label, value, pct, type, isSelected, onClick }) => (
    <div
        className={`flex items-center justify-between p-2 rounded-xl cursor-pointer transition-all duration-200
                  ${isSelected ? 'bg-white shadow-sm' : 'hover:bg-white/60'}
                  active:scale-[0.98]`}
        onClick={onClick}
    >
        <div className="flex items-center space-x-2">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs bg-white shadow-sm
                           ${type === 'blue' ? 'text-blue-600 font-bold' : ''}`}>
                {icon}
            </div>
            <span className="text-xs font-medium text-gray-600">{label}</span>
        </div>
        <div className="text-right">
            <span className="text-xs font-bold text-gray-900">{value}</span>
            <span className="text-[10px] text-gray-400 ml-1">{pct}</span>
        </div>
    </div>
)

const BarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
        <line x1="12" y1="20" x2="12" y2="10"></line>
        <line x1="18" y1="20" x2="18" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="16"></line>
    </svg>
)

export default PlatformValueWidget;
