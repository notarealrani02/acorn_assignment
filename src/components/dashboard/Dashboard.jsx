import React from 'react';
import DashboardHeader from './DashboardHeader';
import { TopStatsRow } from './TopStatsCards';
import UserSalesTable from './UserSalesTable';
import PlatformValueWidget from './PlatformValueWidget';
import WorkWithPlatformsWidget from './WorkWithPlatformsWidget';

const Dashboard = () => {
    return (
        <div className="pb-4 sm:pb-8">
            <DashboardHeader />
            <TopStatsRow />

            <UserSalesTable />

            {/* Bottom Widgets - Uniform grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                <PlatformValueWidget />
                <WorkWithPlatformsWidget />
            </div>
        </div>
    );
};

export default Dashboard;
