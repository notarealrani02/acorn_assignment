import React from 'react';
import { ChevronUp, ChevronRight, Star } from 'lucide-react';

export const TopStatsRow = () => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {/* Main Revenue Block */}
            <div className="xl:col-span-2">
                <h2 className="text-lg font-semibold text-gray-700 mb-1">Revenue</h2>
                <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">$528,976</span>
                    <span className="text-2xl font-bold text-gray-400">.82</span>

                    <span className="flex items-center px-2 py-0.5 rounded-md bg-primary text-white text-xs font-bold ml-2">
                        <ChevronUp size={12} className="mr-0.5" /> 7.9%
                    </span>
                    <span className="flex items-center px-2 py-0.5 rounded-md bg-primary text-white text-xs font-bold">
                        $27,335.09
                    </span>
                </div>
                <div className="mt-2 text-sm text-gray-500 font-medium">
                    vs prev. <span className="text-gray-700">$501,641.73</span> <span className="mx-1">Jun 1 - Aug 31, 2023</span>
                    <span className="inline-block cursor-pointer"><ChevronUp size={12} className="rotate-180 inline" /></span>
                </div>
            </div>

            {/* Right Side Cards Container */}
            <div className="xl:col-span-2 flex space-x-4 overflow-x-auto pb-2">

                {/* Top Sales Card (White) */}
                <div className="flex-1 min-w-[200px] bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                    <div>
                        <div className="text-xs text-gray-500 font-medium mb-1">Top sales</div>
                        <div className="text-2xl font-bold text-gray-900">72</div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center text-sm font-medium text-gray-700">
                            <img src="https://i.pravatar.cc/150?u=mikasa" className="w-5 h-5 rounded-full mr-2" alt="" />
                            Mikasa
                        </div>
                        <ChevronRight size={16} className="text-gray-400" />
                    </div>
                </div>

                {/* Best Deal Card (Black) */}
                <div className="flex-1 min-w-[200px] bg-black p-4 rounded-2xl shadow-sm border border-black flex flex-col justify-between text-white relative overflow-hidden">
                    {/* Gradient gloss effect */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-5 rounded-full -mr-10 -mt-10 blur-xl"></div>

                    <div className="flex justify-between items-start">
                        <div>
                            <div className="text-xs text-gray-400 font-medium mb-1">Best deal</div>
                            <div className="text-2xl font-bold">$42,300</div>
                        </div>
                        <Star size={14} className="text-gray-500" />
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center text-sm font-medium text-gray-300">
                            Rolf Inc.
                        </div>
                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                            <ChevronRight size={14} className="text-black" />
                        </div>
                    </div>
                </div>

                {/* Small Stat Cards */}
                <SmallStatCard label="Deals" value="256" subValue="5" type="down" />
                <SmallStatCard label="Value" value="528k" subValue="7.9%" type="up" active />
                <SmallStatCard label="Win rate" value="44%" subValue="1.2%" type="up" />

            </div>
        </div>
    )
}

const SmallStatCard = ({ label, value, subValue, type, active }) => {
    return (
        <div className={`min-w-[100px] p-3 rounded-2xl border flex flex-col items-center justify-center text-center
            ${active ? 'bg-white border-primary shadow-[0_0_0_1px_rgba(225,29,72,1)]' : 'bg-white border-gray-100'}
        `}>
            <div className={`text-xs font-medium mb-1 ${active ? 'text-primary' : 'text-gray-500'}`}>{label}</div>
            <div className={`px-2 py-0.5 rounded-full text-xs font-bold mb-1 ${active ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}>
                {value}
            </div>
            <div className="flex items-center text-[10px] font-medium text-gray-500">
                {type === 'up' ? <ChevronUp size={10} className="mr-0.5" /> : <ChevronUp size={10} className="mr-0.5 rotate-180" />}
                {subValue}
            </div>
        </div>
    )
}

export const StatsDetailRow = () => {
    return (
        <div className="flex items-center justify-between bg-white rounded-full py-2 px-1 pl-4 pr-1 mt-6 shadow-sm border border-gray-100 overflow-x-auto">
            <div className="flex items-center space-x-6 min-w-max mr-4">
                <DetailItem icon="https://i.pravatar.cc/150?u=armin" label="$209,633" sub="39.63%" />
                <DetailItem icon="https://i.pravatar.cc/150?u=eren" label="$156,841" sub="29.65%" />
                <DetailItem icon="https://i.pravatar.cc/150?u=mikasa" label="$117,115" sub="22.14%" />
                <DetailItem iconType="black-c" label="$45,386" sub="8.58%" />
            </div>

            <button className="bg-black text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-gray-800 transition">
                Details
            </button>
        </div>
    )
}

const DetailItem = ({ icon, iconType, label, sub }) => (
    <div className="flex items-center space-x-2">
        {icon ? (
            <img src={icon} alt="" className="w-6 h-6 rounded-full" />
        ) : (
            <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white text-[10px] font-bold">C</div>
        )}
        <span className="text-sm font-bold text-gray-900">{label}</span>
        <span className="text-xs font-medium text-gray-400">{sub}</span>
    </div>
)
