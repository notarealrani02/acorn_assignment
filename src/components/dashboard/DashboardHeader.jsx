import React from 'react';
import { Plus, Clock, Share2, Download, Upload } from 'lucide-react';

const DashboardHeader = () => {
    return (
        <div className="flex flex-col space-y-4 mb-6">
            {/* Top Row: User Avatars and Actions */}
            <div className="flex items-center justify-between">
                <div className="flex items-center -space-x-2">
                    <button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center z-10 hover:bg-gray-50">
                        <Plus size={16} className="text-gray-600" />
                    </button>

                    {/* Mock Users */}
                    <Avatar name="Armin A." src="https://i.pravatar.cc/150?u=armin" zIndex="z-20" />
                    <Avatar name="Eren Y." src="https://i.pravatar.cc/150?u=eren" zIndex="z-30" />
                    <Avatar name="Mikasa A." src="https://i.pravatar.cc/150?u=mikasa" zIndex="z-40" />

                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-xs font-bold ring-2 ring-white z-50 ml-2">
                        C
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <ActionButton icon={Share2} />
                    <ActionButton icon={Download} />
                    <ActionButton icon={Upload} />
                </div>
            </div>

            {/* Title and Timeframe */}
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">New report</h1>

                <div className="flex items-center space-x-3 bg-white px-3 py-1.5 rounded-full shadow-sm">
                    <div className="flex items-center cursor-pointer">
                        <div className="relative w-8 h-4 bg-gray-800 rounded-full mr-2 transition-colors">
                            <div className="absolute left-1 top-0.5 w-3 h-3 bg-white rounded-full transition-transform"></div>
                        </div>
                        <span className="text-sm font-medium text-gray-700">Timeframe</span>
                    </div>
                    <div className="h-4 w-px bg-gray-300"></div>
                    <div className="flex items-center text-sm font-medium text-gray-600 cursor-pointer hover:text-gray-900">
                        Sep 1 – Nov 30, 2023
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Avatar = ({ name, src, zIndex }) => (
    <div className={`relative flex items-center pl-1 pr-3 py-1 bg-white rounded-full border border-gray-100 shadow-sm ${zIndex} ml-2 first:ml-0`}>
        <img src={src} alt={name} className="w-6 h-6 rounded-full mr-2" />
        <span className="text-xs font-medium text-gray-700 whitespace-nowrap">{name}</span>
    </div>
);

const ActionButton = ({ icon: Icon }) => (
    <button className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-300">
        <Icon size={14} />
    </button>
)

export default DashboardHeader;
