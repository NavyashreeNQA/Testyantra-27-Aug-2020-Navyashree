import React from 'react';

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

export default function DocDashboard() {
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
                title: 'Doctor Dashboard',
                itemId: '/dashboard',
                // you can use your own custom Icon component as well
                // icon is optional
                // elemBefore: () => <Icon name="inbox" />,
              },
              {
                title: 'Create your profile',
                itemId: '/app',
              },
              {
                title: 'Update your profile',
                itemId: '/management/projects',
              },
              {
                title: 'View All Appointments',
                itemId: '/app',
              },
                  {
                    title: 'Update Timesolt',
                    itemId: '/management/members',
                  },
            
                  {
                    title: 'View Patients',
                    itemId: '/management/members',
                  },
              {
                title: 'View Ratings',
                itemId: '/another',
              },
                 
            ]}
          />
      </div>
    );
}