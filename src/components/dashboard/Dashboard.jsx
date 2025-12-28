import React from 'react';
import DashboardHeader from './DashboardHeader';
import { TopStatsRow } from './TopStatsCards';
import UserSalesTable from './UserSalesTable';
import PlatformValueWidget from './PlatformValueWidget';
import WorkWithPlatformsWidget from './WorkWithPlatformsWidget';

const Dashboard = () => {
    return (
        <div className="pb-8">
            <DashboardHeader />
            <TopStatsRow />

            <UserSalesTable />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6">
                <div className="lg:col-span-2">
                    <PlatformValueWidget />
                </div>
                <div className="lg:col-span-3">
                    <WorkWithPlatformsWidget />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
