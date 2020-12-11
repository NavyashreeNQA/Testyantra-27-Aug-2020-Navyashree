import React from 'react';

class DashboardHeader extends React.Component {
    render() {
      return (
        <header className="dashboard-header">
          <a href="./" className="logo">The <span>Dashboard</span></a><a href="./" className="log-form">Logout</a>
          </header>
      )
    }
  }

  export default DashboardHeader;