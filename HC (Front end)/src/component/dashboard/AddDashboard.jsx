import React from 'react';

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

export default function AddDashboard() {
    
    return (
      <div className="col-md-4  col-xl-2   mx-left  badge-light">
        <Navigation 
            // you can use your own router's api to get pathname
            activeItemId="/management"
            onSelect={({itemId}) => {
              // maybe push to the route
            }}
            items={[
              {
                title: 'Admin Dashboard',
                itemId: '/dashboard',
                // you can use your own custom Icon component as well
                // icon is optional
                // elemBefore: () => <Icon name="inbox" />,
              },
              {
                title: 'View Doctors',
                itemId: '/app',
              },
              {
                title: 'View Patients',
                itemId: '/management/projects',
              },
              {
                title: 'View All Appointments',
                itemId: '/app',
              },
                  {
                    title: 'Update Appointemtns',
                    itemId: '/management/members',
                  },
            
                  {
                    title: 'Remove Appointment',
                    itemId: '/management/members',
                  },
              {
                title: 'View All Ratings',
                itemId: '/another',
              },
                 
            ]}
          />
      </div>
    );
}