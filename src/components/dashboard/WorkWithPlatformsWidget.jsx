import React, { useState } from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import { ExternalLink, ChevronDown } from 'lucide-react';

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
    const [selectedPlatform, setSelectedPlatform] = useState('dribbble');
    const [activeMetric, setActiveMetric] = useState(0);

    return (
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100 h-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-medium text-gray-700">Work with platforms</h2>
                <div className="flex space-x-2">
                    <button
                        className={`text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center
                                  transition-all duration-200 hover:scale-105 active:scale-95
                                  ${activeMetric === 0 ? 'bg-primary' : 'bg-primary/60'}`}
                        onClick={() => setActiveMetric(0)}
                    >
                        <span className="mr-1">◈</span> 3
                    </button>
                    <button
                        className={`text-white text-[10px] font-bold px-2.5 py-1 rounded-full
                                  transition-all duration-200 hover:scale-105 active:scale-95
                                  ${activeMetric === 1 ? 'bg-primary' : 'bg-primary/60'}`}
                        onClick={() => setActiveMetric(1)}
                    >
                        $156,841
                    </button>
                </div>
            </div>

            {/* Platform Cards Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
                {/* Dribbble Card - Large */}
                <div
                    className={`p-4 rounded-xl border bg-white cursor-pointer transition-all duration-200 hover:shadow-md active:scale-[0.98]
                              ${selectedPlatform === 'dribbble' ? 'border-primary shadow-sm' : 'border-gray-100'}`}
                    onClick={() => setSelectedPlatform('dribbble')}
                >
                    <div className="flex items-center space-x-2 mb-6">
                        <div className="w-5 h-5 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center text-xs">🏀</div>
                        <span className="text-[10px] font-bold text-gray-700">Dribbble</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900">
                        45.3% <span className="text-gray-300 text-sm">$71,048</span>
                    </div>
                </div>

                {/* Other cards grid */}
                <div className="grid grid-cols-2 gap-2">
                    <div
                        className={`p-2.5 rounded-xl bg-gray-50 border cursor-pointer transition-all duration-200 hover:shadow-sm active:scale-[0.98]
                                  ${selectedPlatform === 'instagram' ? 'border-primary' : 'border-gray-100'}`}
                        onClick={() => setSelectedPlatform('instagram')}
                    >
                        <div className="flex items-center space-x-1 mb-2">
                            <span className="text-[9px] font-bold">📷 Instagram</span>
                        </div>
                        <div>
                            <span className="text-[11px] font-bold block">28.1%</span>
                            <span className="text-[9px] text-gray-400">$44,072</span>
                        </div>
                    </div>

                    <div
                        className={`p-2.5 rounded-xl border cursor-pointer transition-all duration-200 hover:shadow-sm active:scale-[0.98]
                                  ${selectedPlatform === 'google' ? 'border-primary' : 'border-gray-100'}`}
                        onClick={() => setSelectedPlatform('google')}
                    >
                        <div className="flex items-center space-x-1 mb-2">
                            <span className="text-[9px] font-bold">🔍 Google</span>
                        </div>
                        <div>
                            <div className="text-[9px] text-gray-400 line-through">14.1% $22,114</div>
                            <div className="flex items-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-black mr-1"></div>
                                <span className="text-[11px] font-bold">5.4%</span>
                                <span className="text-[9px] text-gray-400 ml-1">$8,489</span>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`col-span-2 p-2 rounded-lg border flex items-center justify-between cursor-pointer transition-all duration-200 hover:shadow-sm active:scale-[0.98]
                                  ${selectedPlatform === 'other' ? 'border-primary' : 'border-gray-100'}`}
                        onClick={() => setSelectedPlatform('other')}
                    >
                        <div className="flex items-center space-x-2">
                            <span className="text-xs">🗂</span>
                            <span className="text-[10px] font-bold text-gray-600">Other</span>
                        </div>
                        <div className="text-right">
                            <span className="text-[10px] font-bold">7.1%</span>
                            <span className="text-[9px] text-gray-400 ml-1">$11,135</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chart Section */}
            <div>
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-[10px] font-bold text-gray-700">Sales dynamic</h3>
                    <button className="p-1 rounded-full hover:bg-gray-100 active:scale-90 transition-all duration-200">
                        <ExternalLink size={10} className="text-gray-400" />
                    </button>
                </div>

                <div className="h-24 bg-[#fff5f5] rounded-xl p-3 relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={lineData}>
                            <defs>
                                <linearGradient id="colorVal2" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#e11d48" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#e11d48" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#fff',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    fontSize: '10px',
                                    padding: '4px 8px'
                                }}
                            />
                            <Area type="monotone" dataKey="value" stroke="#e11d48" strokeWidth={2} fillOpacity={1} fill="url(#colorVal2)" />
                        </AreaChart>
                    </ResponsiveContainer>

                    {/* X Axis Labels */}
                    <div className="flex justify-between px-1 text-[8px] text-gray-400 mt-1">
                        <span>W1</span>
                        <span>W5</span>
                        <span>W9</span>
                        <span>W11</span>
                    </div>

                    {/* Floating avatars */}
                    <div className="absolute top-[50%] left-[25%] w-4 h-4 border-2 border-white rounded-full overflow-hidden shadow-sm hover:scale-125 transition-transform cursor-pointer">
                        <img src="https://i.pravatar.cc/150?u=a" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute top-[35%] left-[55%] w-4 h-4 border-2 border-white rounded-full overflow-hidden shadow-sm hover:scale-125 transition-transform cursor-pointer">
                        <img src="https://i.pravatar.cc/150?u=b" alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkWithPlatformsWidget;
