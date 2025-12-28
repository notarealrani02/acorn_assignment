import React from 'react';
import {
    History,
    Star,
    LayoutDashboard,
    Target,
    ListOrdered,
    ChevronDown,
    Settings,
    Plus,
    X
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Mobile Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-20 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar Container */}
            <div className={`
                fixed inset-y-0 left-0 z-30 w-64 bg-[#f0f0f0] border-r border-gray-200 transform transition-transform duration-300 ease-in-out
                lg:relative lg:translate-x-0
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                {/* Brand & Workspace Dropdown */}
                <div className="h-16 flex items-center px-4 mb-2">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold mr-3">
                        C
                    </div>
                    <div className="flex items-center text-sm font-semibold text-gray-800 cursor-pointer">
                        Codename.com
                        <ChevronDown size={16} className="ml-1 text-gray-500" />
                    </div>
                    {/* Close button for mobile */}
                    <button onClick={onClose} className="ml-auto lg:hidden text-gray-500">
                        <X size={20} />
                    </button>
                </div>

                {/* Main Nav Items */}
                <div className="flex-1 overflow-y-auto px-3 space-y-1">
                    <NavItem icon={Star} label="Starred" />
                    <NavItem icon={History} label="Recent" />
                    <NavItem icon={ListOrdered} label="Sales list" />
                    <NavItem icon={Target} label="Goals" />
                    <NavItem icon={LayoutDashboard} label="Dashboard" active />

                    {/* Divider / Gap */}
                    <div className="pt-4 pb-2"></div>

                    {/* Folders Section */}
                    <div className="space-y-1">
                        <FolderItem label="Codename" />
                        <FolderItem label="Shared with me" expanded>
                            <SubItem label="Cargo2go" />
                            <SubItem label="Cloudz3r" badge="2" />
                            <SubItem label="Idioma" />
                            <SubItem label="Syllables" />
                            <SubItem label="x-0b" />
                        </FolderItem>
                    </div>

                    <div className="pt-4 pb-2"></div>

                    <div className="space-y-1">
                        <div className="px-3 flex items-center justify-between group cursor-pointer text-gray-600 hover:text-gray-900">
                            <span className="text-sm font-medium">Reports</span>
                            <Plus size={16} className="opacity-0 group-hover:opacity-100" />
                        </div>
                    </div>

                    <div className="mt-1">
                        <FolderItem label="Share with me" />
                        <FolderItem label="My reports" expanded>
                            <SubItem label="Emails received" />
                            <SubItem label="Deal duration" />
                            <SubItem label="New report" activeText />
                            <SubItem label="Analytics" badge="7" badgeColor="bg-primary text-white" />
                        </FolderItem>
                    </div>

                    <div className="mt-4 px-3 text-sm text-gray-500 flex items-center cursor-pointer hover:text-gray-900">
                        <Settings size={16} className="mr-2" />
                        Manage folders
                    </div>

                </div>

                {/* Bottom Actions */}
                <div className="p-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4 text-gray-500">
                        <button className="hover:text-gray-900"><div className="w-8 h-8 rounded-full border flex items-center justify-center">?</div></button>
                        <button className="hover:text-gray-900"><Settings size={20} /></button>
                    </div>
                </div>
            </div>
        </>
    );
};

const NavItem = ({ icon: Icon, label, active }) => {
    return (
        <div className={`flex items-center px-3 py-2 text-sm font-medium rounded-md cursor-pointer group transtion-colors
      ${active ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}
    `}>
            <Icon size={18} className={`mr-3 ${active ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-500'}`} />
            {label}
            {active && <Plus size={16} className="ml-auto text-gray-400" />}
        </div>
    );
};

const FolderItem = ({ label, expanded, children }) => {
    return (
        <div className="mb-1">
            <div className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-600 cursor-pointer hover:text-gray-900 group">
                <span className="w-4 flex justify-center mr-2 text-gray-400">
                    {/* Line indicator */}
                    <span className="h-px w-2 bg-gray-300"></span>
                </span>
                {label}
                {expanded ? <ChevronDown size={14} className="ml-auto text-gray-400" /> : <ChevronDown size={14} className="ml-auto text-gray-400 -rotate-90" />}
            </div>
            {expanded && (
                <div className="ml-0 border-l border-gray-200 ml-5 pl-1 space-y-0.5 mt-1 mb-2">
                    {children}
                </div>
            )}
        </div>
    )
}

const SubItem = ({ label, badge, badgeColor = "bg-primary text-white", activeText }) => {
    return (
        <div className={`flex items-center justify-between px-3 py-1.5 text-sm cursor-pointer rounded-md hover:bg-gray-100
             ${activeText ? 'text-primary font-medium' : 'text-gray-600'}
        `}>
            <span>{label}</span>
            {badge && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${badge === '2' ? 'bg-red-500 text-white' : badgeColor} `}>
                    {badge}
                </span>
            )}
        </div>
    )
}

export default Sidebar;
