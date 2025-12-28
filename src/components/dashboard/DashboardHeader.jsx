import React, { useState, useRef, useEffect } from 'react';
import { Plus, Calendar, ChevronDown } from 'lucide-react';

const DashboardHeader = () => {
    const [isTimeframeOn, setIsTimeframeOn] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [startDate, setStartDate] = useState('2023-09-01');
    const [endDate, setEndDate] = useState('2023-11-30');
    const datePickerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (datePickerRef.current && !datePickerRef.current.contains(e.target)) {
                setShowDatePicker(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const formatDate = (d) => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    return (
        <div className="flex flex-col space-y-3 sm:space-y-4 mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center -space-x-2 overflow-x-auto pb-1 sm:pb-0 relative z-10">
                    <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 hover:shadow-md active:scale-90 transition-all duration-200 flex-shrink-0">
                        <Plus size={14} className="sm:w-4 sm:h-4 text-gray-600" />
                    </button>
                    <Avatar name="Armin A." src="https://i.pravatar.cc/150?u=armin" />
                    <Avatar name="Eren Y." src="https://i.pravatar.cc/150?u=eren" />
                    <Avatar name="Mikasa A." src="https://i.pravatar.cc/150?u=mikasa" />
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black flex items-center justify-center text-white text-xs font-bold ring-2 ring-white ml-2 hover:ring-gray-200 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex-shrink-0">C</div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-2 sm:px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 self-start sm:self-auto relative" ref={datePickerRef}>
                    <div className="flex items-center cursor-pointer" onClick={() => setIsTimeframeOn(!isTimeframeOn)}>
                        <div className={`relative w-7 sm:w-8 h-4 rounded-full mr-2 transition-colors duration-300 ${isTimeframeOn ? 'bg-primary' : 'bg-gray-800'}`}>
                            <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all duration-300 shadow-sm ${isTimeframeOn ? 'left-[calc(100%-14px)]' : 'left-1'}`}></div>
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-gray-700">Timeframe</span>
                    </div>
                    <div className="h-4 w-px bg-gray-300"></div>
                    <div className="flex items-center text-xs sm:text-sm font-medium text-gray-600 cursor-pointer hover:text-gray-900 transition-colors duration-200" onClick={() => setShowDatePicker(!showDatePicker)}>
                        <Calendar size={14} className="mr-1.5 text-gray-400" />
                        <span>{formatDate(startDate)} – {formatDate(endDate)}</span>
                        <ChevronDown size={14} className={`ml-1 transition-transform duration-200 ${showDatePicker ? 'rotate-180' : ''}`} />
                    </div>
                    {showDatePicker && (
                        <div className="absolute top-full right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50 min-w-[280px]">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-1.5">Start Date</label>
                                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-1.5">End Date</label>
                                    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                                </div>
                                <div className="flex space-x-2 pt-2">
                                    <button onClick={() => setShowDatePicker(false)} className="flex-1 px-3 py-2 text-xs font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">Cancel</button>
                                    <button onClick={() => setShowDatePicker(false)} className="flex-1 px-3 py-2 text-xs font-medium text-white bg-primary rounded-lg hover:bg-red-600 transition-colors">Apply</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">New report</h1>
            </div>
        </div>
    );
};

const Avatar = ({ name, src }) => (
    <div className="relative flex items-center pl-1 pr-2 sm:pr-3 py-1 bg-white rounded-full border border-gray-100 shadow-sm ml-2 first:ml-0 hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex-shrink-0">
        <img src={src} alt={name} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full mr-1 sm:mr-2" />
        <span className="text-[10px] sm:text-xs font-medium text-gray-700 whitespace-nowrap">{name}</span>
    </div>
);

export default DashboardHeader;
