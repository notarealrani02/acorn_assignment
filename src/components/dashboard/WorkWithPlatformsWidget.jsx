import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronRight, ExternalLink } from 'lucide-react';

const lineData = [
    { name: 'W1', value: 3000 },
    { name: 'W2', value: 4500 },
    { name: 'W3', value: 3200 },
    { name: 'W4', value: 6000 },
    { name: 'W5', value: 5000 },
    { name: 'W6', value: 7500 },
    { name: 'W7', value: 6800 },
    { name: 'W8', value: 8000 },
    { name: 'W9', value: 7200 },
    { name: 'W10', value: 9000 },
    { name: 'W11', value: 8500 },
];

const WorkWithPlatformsWidget = () => {
    return (
        <div className="bg-white rounded-3xl p-6 mt-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-sm font-bold text-gray-700">Work with platforms</h2>
                <div className="flex space-x-2">
                    <button className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                        <span className="mr-1">◈</span> 3
                    </button>
                    <button className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        $156,841
                    </button>
                </div>
            </div>

            {/* Platform Cards Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                {/* Dribbble Card */}
                <div className="p-4 rounded-2xl border border-gray-100 bg-white relative overflow-hidden col-span-1">
                    <div className="flex items-center space-x-2 mb-8">
                        <div className="w-6 h-6 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center">🏀</div>
                        <span className="text-xs font-bold text-gray-700">Dribbble</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">45.3% <span className="text-gray-300">$71,048</span></div>
                </div>

                {/* Other small cards */}
                <div className="grid grid-cols-2 gap-4 col-span-1">
                    <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col justify-between">
                        <div className="flex items-center space-x-2 mb-2">
                            <span className="text-[10px] font-bold">📷 Instagram</span>
                        </div>
                        <div>
                            <span className="text-xs font-bold block">28.1%</span>
                            <span className="text-[10px] text-gray-400">$44,072</span>
                        </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] border border-gray-100 flex flex-col justify-between relative">
                        <div className="flex items-center space-x-2 mb-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" className="w-3 h-3" alt="" />
                            <span className="text-[10px] font-bold">Google</span>
                        </div>
                        <div>
                            <div className="text-[10px] text-gray-400 mb-auto line-through decoration-gray-300">14.1% $22,114</div>
                            <div className="flex items-center mt-1">
                                <div className="w-2 h-2 rounded-full bg-black mr-1"></div>
                                <span className="text-xs font-bold">5.4%</span>
                                <span className="text-[10px] text-gray-400 ml-1">$8,489</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 p-2 rounded-xl border border-gray-100 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <span className="p-1 bg-gray-100 rounded">🗂</span>
                            <span className="text-xs font-bold text-gray-600">Other</span>
                        </div>
                        <div className="text-right">
                            <span className="text-xs font-bold">7.1%</span>
                            <span className="text-[10px] text-gray-400 ml-1">$11,135</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chart Section */}
            <div className="relative">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xs font-bold text-gray-700">Sales dynamic</h3>
                    <ExternalLink size={12} className="text-gray-400 cursor-pointer" />
                </div>

                <div className="h-40 bg-[#fff5f5] rounded-3xl p-4 relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={lineData}>
                            <defs>
                                <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#e11d48" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#e11d48" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Tooltip />
                            <Area type="monotone" dataKey="value" stroke="#e11d48" strokeWidth={2} fillOpacity={1} fill="url(#colorVal)" />
                        </AreaChart>
                    </ResponsiveContainer>

                    {/* Mocking X Axis Labels manually for custom styling matching design */}
                    <div className="flex justify-between px-2 text-[10px] text-gray-400 mt-2">
                        <span>W 1</span>
                        <span>W 3</span>
                        <span>W 5</span>
                        <span>W 7</span>
                        <span>W 9</span>
                        <span>W 11</span>
                    </div>

                    {/* Floating avatars on the chart line mockups */}
                    <div className="absolute top-[60%] left-[30%] w-6 h-6 border-2 border-white rounded-full overflow-hidden shadow-sm">
                        <img src="https://i.pravatar.cc/150?u=a" alt="" />
                    </div>
                    <div className="absolute top-[40%] left-[60%] w-6 h-6 border-2 border-white rounded-full overflow-hidden shadow-sm">
                        <img src="https://i.pravatar.cc/150?u=b" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkWithPlatformsWidget;
