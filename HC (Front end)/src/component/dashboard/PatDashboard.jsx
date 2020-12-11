import React from 'react';

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

export default function Dashboard() {
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
                title: 'Patient Dashboard',
                itemId: '/dashboard',
                // you can use your own custom Icon component as well
                // icon is optional
                // elemBefore: () => <Icon name="inbox" />,
              },
              {
                title: 'Create Profile',
                itemId: '/app',
              },
              {
                title: 'View All Doctor',
                itemId: '/management/projects',
              },
              {
                title: 'Book Appointment',
                itemId: '/app',
              },
                  {
                    title: 'Update Appointment',
                    itemId: '/management/members',
                  },
            
                  {
                    title: 'Search Doctor',
                    itemId: '/management/members',
                  },
              {
                title: 'Give feedback',
                itemId: '/another',
              },
                 
            ]}
          />
      </div>
    );
}