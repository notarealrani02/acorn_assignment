import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';
import { Filter, ShoppingBag } from 'lucide-react';

const data = [
    { name: '1', value: 30, color: '#fca5a5' }, // light red
    { name: '2', value: 45, color: '#fca5a5' },
    { name: '3', value: 25, color: '#e11d48' }, // primary
    { name: '4', value: 50, color: '#f3f4f6' }, // gray
    { name: '5', value: 35, color: '#f3f4f6' },
];

const PlatformValueWidget = () => {
    return (
        <div className="grid grid-cols-2 gap-4 mt-6">
            {/* Left Box: Platform List */}
            <div className="bg-[#f3f4f4] rounded-3xl p-5">
                <div className="flex justify-between items-center mb-4">
                    <div className="p-2 bg-white rounded-full shadow-sm cursor-pointer">
                        <Filter size={16} className="text-gray-500" />
                    </div>
                    <span className="text-xs font-medium text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm">Filters</span>
                    {/* The icon in design is weird, distinct lines. Using generic filter for now */}
                </div>

                <div className="space-y-3">
                    <PlatformRow icon="🏀" label="Dribbble" value="$227,459" pct="43%" />
                    <PlatformRow icon="📷" label="Instagram" value="$142,823" pct="27%" />
                    <PlatformRow icon="Be" label="Behance" value="$89,935" pct="11%" type="blue" />
                    <PlatformRow icon="G" label="Google" value="$37,028" pct="7%" />
                </div>
            </div>

            {/* Right Box: Deals Chart */}
            <div className="bg-[#f3f4f4] rounded-3xl p-5 relative overflow-hidden">
                <div className="flex justify-between items-center mb-2 z-10 relative">
                    <div className="flex items-center space-x-1">
                        <BarIcon />
                    </div>
                    <span className="text-xs font-medium text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm">Filters</span>
                </div>

                {/* Chart Area */}
                <div className="h-40 mt-4 relative">
                    {/* Floating Icons mocking the design */}
                    <div className="absolute top-0 right-10 bg-white p-1 rounded-lg shadow-sm z-10">
                        <ShoppingBag size={12} className="text-gray-500" />
                    </div>

                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <Bar dataKey="value" radius={[10, 10, 10, 10]}>
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>

                    {/* Floating Logo Mockups on bars */}
                    <div className="absolute top-[30%] left-[20%] w-6 h-6 bg-white rounded-full shadow-sm flex items-center justify-center text-[10px] font-bold text-blue-500">
                        Be
                    </div>
                    <div className="absolute top-[50%] left-[45%] w-6 h-6 bg-white rounded-full shadow-sm flex items-center justify-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" className="w-3 h-3" alt="" />
                    </div>
                    <div className="absolute bottom-[20%] right-[15%] w-6 h-6 bg-white rounded-full shadow-sm flex items-center justify-center text-pink-500">
                        <ShoppingBag size={12} />
                    </div>
                </div>

                <div className="mt-2 relative z-10">
                    <h3 className="text-sm font-bold text-gray-700">Deals amount</h3>
                    <div className="text-xs text-gray-500 flex items-center cursor-pointer">
                        by referrer category
                        <span className="ml-1">▼</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

const PlatformRow = ({ icon, label, value, pct, type }) => (
    <div className="flex items-center justify-between p-2 rounded-xl hover:bg-white transition-colors cursor-pointer group">
        <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm bg-white shadow-sm ${type === 'blue' ? 'text-blue-600 font-bold' : ''}`}>
                {icon}
            </div>
            <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900">{label}</span>
        </div>
        <div className="text-right">
            <span className="text-sm font-bold text-gray-900 block">{value}</span>
            <span className="text-xs font-medium text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-md inline-block mt-0.5">{pct}</span>
        </div>
    </div>
)

const BarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
        <line x1="12" y1="20" x2="12" y2="10"></line>
        <line x1="18" y1="20" x2="18" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="16"></line>
    </svg>
)

export default PlatformValueWidget;
