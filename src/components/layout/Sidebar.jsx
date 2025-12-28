import React, { useState } from 'react';
import { Clock, Star, LayoutGrid, Target, FileText, ChevronDown, Settings, Plus, X, HelpCircle } from 'lucide-react';

const Sidebar = ({ isOpen, onClose, isCollapsed, onToggleCollapse }) => {
    const [expandedFolders, setExpandedFolders] = useState({ 'Shared with me': true, 'Share with me': true, 'My reports': true });
    const [activeItem, setActiveItem] = useState('Dashboard');
    const [activeSubItem, setActiveSubItem] = useState('New report');

    const toggleFolder = (name) => setExpandedFolders(prev => ({ ...prev, [name]: !prev[name] }));

    const navItems = [
        { id: 'Starred', icon: Star },
        { id: 'Recent', icon: Clock },
        { id: 'Sales list', icon: FileText },
        { id: 'Goals', icon: Target },
        { id: 'Dashboard', icon: LayoutGrid, highlighted: true },
    ];

    return (
        <>
            {isOpen && <div className="fixed inset-0 bg-black/50 z-20 lg:hidden backdrop-blur-sm transition-opacity duration-300" onClick={onClose} />}
            <div className={`fixed inset-y-3 left-3 z-30 bg-[#f5f5f5] rounded-3xl transform transition-all duration-300 ease-in-out flex overflow-hidden shadow-sm lg:relative lg:inset-auto lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-[calc(100%+24px)]'}`}>
                <div className="w-14 bg-[#f0f0f0] flex flex-col items-center py-4 border-r border-gray-200/50">
                    <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm mb-6 transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer">C</div>
                    <div className="flex-1 flex flex-col items-center space-y-1">
                        {navItems.map((item) => (
                            <IconBtn key={item.id} Icon={item.icon} active={activeItem === item.id} highlighted={item.highlighted && activeItem === item.id} onClick={() => setActiveItem(item.id)} title={item.id} />
                        ))}
                    </div>
                    <div className="flex flex-col items-center space-y-2 mt-auto">
                        <button className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:bg-gray-200 hover:text-gray-600 active:scale-90 transition-all duration-200"><HelpCircle size={18} /></button>
                        <button className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:bg-gray-200 hover:text-gray-600 active:scale-90 transition-all duration-200"><Settings size={18} /></button>
                    </div>
                </div>
                <div className="w-48 flex flex-col bg-[#f5f5f5]">
                    <div className="h-14 flex items-center px-3 border-b border-gray-200/30">
                        <div className="flex items-center text-sm font-semibold text-gray-800 cursor-pointer hover:text-gray-600 transition-colors duration-200 flex-1">
                            Codename.com <ChevronDown size={14} className="ml-1 text-gray-400" />
                        </div>
                        <button onClick={onClose} className="lg:hidden text-gray-500 p-1 rounded-full hover:bg-gray-200 hover:text-gray-900 active:scale-90 transition-all duration-200"><X size={16} /></button>
                    </div>
                    <div className="flex-1 overflow-y-auto py-3 px-2">
                        <div className="px-2 mb-3">
                            <div className="flex items-center justify-between">
                                <span className="text-base font-semibold text-gray-800">{activeItem}</span>
                                {activeItem === 'Dashboard' && <Plus size={16} className="text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />}
                            </div>
                        </div>
                        <div className="space-y-1">
                            <FolderItem label="Codename" expanded={expandedFolders['Codename']} onToggle={() => toggleFolder('Codename')} />
                            <FolderItem label="Shared with me" expanded={expandedFolders['Shared with me']} onToggle={() => toggleFolder('Shared with me')}>
                                <SubItem label="Cargo2go" active={activeSubItem === 'Cargo2go'} onClick={() => setActiveSubItem('Cargo2go')} />
                                <SubItem label="Cloudz3r" badge="2" badgeColor="bg-red-500 text-white" active={activeSubItem === 'Cloudz3r'} onClick={() => setActiveSubItem('Cloudz3r')} />
                                <SubItem label="Idioma" active={activeSubItem === 'Idioma'} onClick={() => setActiveSubItem('Idioma')} />
                                <SubItem label="Syllables" active={activeSubItem === 'Syllables'} onClick={() => setActiveSubItem('Syllables')} />
                                <SubItem label="x-0b" active={activeSubItem === 'x-0b'} onClick={() => setActiveSubItem('x-0b')} />
                            </FolderItem>
                        </div>
                        <div className="mt-4 px-2 flex items-center justify-between group cursor-pointer">
                            <span className="text-sm font-medium text-gray-500">Reports</span>
                            <Plus size={14} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </div>
                        <div className="mt-1 space-y-1">
                            <FolderItem label="Share with me" expanded={expandedFolders['Share with me']} onToggle={() => toggleFolder('Share with me')}>
                                <SubItem label="Deals by user" active={activeSubItem === 'Deals by user'} onClick={() => setActiveSubItem('Deals by user')} />
                                <SubItem label="Deal duration" active={activeSubItem === 'Deal duration'} onClick={() => setActiveSubItem('Deal duration')} />
                            </FolderItem>
                            <FolderItem label="My reports" expanded={expandedFolders['My reports']} onToggle={() => toggleFolder('My reports')}>
                                <SubItem label="Emails received" active={activeSubItem === 'Emails received'} onClick={() => setActiveSubItem('Emails received')} />
                                <SubItem label="Deal duration" active={activeSubItem === 'Deal duration 2'} onClick={() => setActiveSubItem('Deal duration 2')} />
                                <SubItem label="New report" activeText active={activeSubItem === 'New report'} onClick={() => setActiveSubItem('New report')} />
                                <SubItem label="Analytics" badge="7" badgeColor="bg-primary text-white" active={activeSubItem === 'Analytics'} onClick={() => setActiveSubItem('Analytics')} />
                            </FolderItem>
                        </div>
                        <div className="mt-4 px-2 py-2 text-sm text-gray-500 flex items-center cursor-pointer hover:text-gray-700 transition-colors duration-200 group rounded-lg hover:bg-gray-200/50">
                            <Settings size={14} className="mr-2 group-hover:rotate-45 transition-transform duration-300" /> Manage folders
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const IconBtn = ({ Icon, active, highlighted, onClick, title }) => (
    <button className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 active:scale-90 ${highlighted ? 'bg-primary/15 text-primary' : active ? 'bg-white text-gray-700 shadow-sm' : 'text-gray-400 hover:bg-gray-200 hover:text-gray-600'}`} onClick={onClick} title={title}>
        <Icon size={18} />
    </button>
);

const FolderItem = ({ label, expanded, onToggle, children }) => (
    <div className="mb-1">
        <div className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 cursor-pointer hover:text-gray-900 hover:bg-gray-200/50 rounded-lg group transition-all duration-200 active:scale-[0.98]" onClick={onToggle}>
            <ChevronDown size={14} className={`mr-2 text-gray-400 transition-transform duration-200 flex-shrink-0 ${expanded ? '' : '-rotate-90'}`} />
            <span className="truncate">{label}</span>
        </div>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="ml-3 border-l border-gray-200 pl-2 space-y-0.5 mt-0.5 mb-1">{children}</div>
        </div>
    </div>
);

const SubItem = ({ label, badge, badgeColor = "bg-primary text-white", activeText, active, onClick }) => (
    <div className={`flex items-center justify-between px-2 py-1.5 text-[13px] cursor-pointer rounded-md transition-all duration-200 ${active ? 'bg-gray-200/70' : 'hover:bg-gray-200/50'} ${activeText ? 'text-primary font-medium' : 'text-gray-600 hover:text-gray-900'} active:scale-[0.98]`} onClick={onClick}>
        <span className="truncate">{label}</span>
        {badge && <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium flex-shrink-0 ml-1 ${badgeColor}`}>{badge}</span>}
    </div>
);

export default Sidebar;
