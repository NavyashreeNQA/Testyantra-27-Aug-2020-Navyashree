import React from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardNav from './DashboardNav';
import DashboardView from './DashboardView';

class DashboardApp extends React.Component{

    render() {
        return (
          <div>
            <DashboardHeader />
            <DashboardNav />
            <DashboardView />
            </div>
        )
      }
}

export default DashboardApp;