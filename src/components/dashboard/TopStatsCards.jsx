import React, { useState } from 'react';
import { ChevronUp, ChevronRight, Star } from 'lucide-react';

export const TopStatsRow = () => {
    const [activeCard, setActiveCard] = useState('Value');

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="lg:col-span-2">
                <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-1">Revenue</h2>
                <div className="flex flex-wrap items-baseline gap-1 sm:gap-2">
                    <span className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">$528,976</span>
                    <span className="text-xl sm:text-2xl font-bold text-gray-400">.82</span>
                    <span className="flex items-center px-2 py-0.5 rounded-md bg-primary text-white text-xs font-bold hover:bg-red-600 active:scale-95 transition-all duration-200 cursor-pointer">
                        <ChevronUp size={12} className="mr-0.5" /> 7.9%
                    </span>
                    <span className="flex items-center px-2 py-0.5 rounded-md bg-primary text-white text-xs font-bold hover:bg-red-600 active:scale-95 transition-all duration-200 cursor-pointer">$27,335.09</span>
                </div>
                <div className="mt-2 text-xs sm:text-sm text-gray-500 font-medium">vs prev. <span className="text-gray-700">$501,641.73</span> Jun 1 - Aug 31, 2023</div>
            </div>
            <div className="lg:col-span-2 flex gap-3 sm:gap-4 overflow-x-auto pb-2 -mx-6 px-6 sm:-mx-4 sm:px-4 lg:mx-0 lg:px-0">
                <div className="flex-1 min-w-[140px] sm:min-w-[180px] bg-white p-3 sm:p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer">
                    <div>
                        <div className="text-[10px] sm:text-xs text-gray-500 font-medium mb-1">Top sales</div>
                        <div className="text-xl sm:text-2xl font-bold text-gray-900">72</div>
                    </div>
                    <div className="flex items-center justify-between mt-3 sm:mt-4">
                        <div className="flex items-center text-xs sm:text-sm font-medium text-gray-700">
                            <img src="https://i.pravatar.cc/150?u=mikasa" className="w-4 h-4 sm:w-5 sm:h-5 rounded-full mr-2" alt="" />Mikasa
                        </div>
                        <ChevronRight size={14} className="text-gray-400" />
                    </div>
                </div>
                <div className="flex-1 min-w-[140px] sm:min-w-[180px] bg-black p-3 sm:p-4 rounded-2xl shadow-sm flex flex-col justify-between text-white relative overflow-hidden hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer group">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-5 rounded-full -mr-10 -mt-10 blur-xl group-hover:opacity-10 transition-opacity duration-300"></div>
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="text-[10px] sm:text-xs text-gray-400 font-medium mb-1">Best deal</div>
                            <div className="text-xl sm:text-2xl font-bold">$42,300</div>
                        </div>
                        <Star size={14} className="text-gray-500 hover:text-yellow-400 cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-between mt-3 sm:mt-4">
                        <div className="text-xs sm:text-sm font-medium text-gray-300">Rolf Inc.</div>
                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center"><ChevronRight size={12} className="text-black" /></div>
                    </div>
                </div>
                <StatCard label="Deals" value="256" sub="5" type="down" active={activeCard === 'Deals'} onClick={() => setActiveCard('Deals')} />
                <StatCard label="Value" value="528k" sub="7.9%" type="up" active={activeCard === 'Value'} onClick={() => setActiveCard('Value')} />
                <StatCard label="Win rate" value="44%" sub="1.2%" type="up" active={activeCard === 'Win rate'} onClick={() => setActiveCard('Win rate')} />
            </div>
        </div>
    )
}

const StatCard = ({ label, value, sub, type, active, onClick }) => (
    <div className={`min-w-[70px] sm:min-w-[90px] p-2 sm:p-3 rounded-2xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 ${active ? 'bg-white border-primary shadow-[0_0_0_1px_rgba(225,29,72,1)]' : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-md'}`} onClick={onClick}>
        <div className={`text-[10px] sm:text-xs font-medium mb-1 ${active ? 'text-primary' : 'text-gray-500'}`}>{label}</div>
        <div className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold mb-1 ${active ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}>{value}</div>
        <div className="flex items-center text-[9px] sm:text-[10px] font-medium text-gray-500">
            {type === 'up' ? <ChevronUp size={10} className="mr-0.5" /> : <ChevronUp size={10} className="mr-0.5 rotate-180" />}{sub}
        </div>
    </div>
)
