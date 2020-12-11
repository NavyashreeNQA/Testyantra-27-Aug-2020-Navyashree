





import React from 'react';


class DashboardNav extends React.Component {
    render() {
      return (
        <nav className="dashboard-nav">
          <ul>
            <li>
              <a href="./">Home</a>
            </li>
            <li>
              <a href="./">Users</a>
            </li>
            <li>
              <a href="./">Messages</a>
            </li>
            <li>
              <a href="./">Groups</a>
            </li>
            <li>
              <a href="./">Reports</a>
            </li>
            <li>
              <a href="./">Posts</a>
            </li>
          </ul>
          </nav>
      )
    }
  }
  export default DashboardNav;