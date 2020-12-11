import React from 'react';


class DashboardView extends React.Component {
    render() {
      return (
        <div className="dashboard-container">
          <main>
            <h2 className="view-header">Home</h2>
            <div className="row">
              <div className="col-1-2">
                <div className="box-light">
                Left
                </div>
              </div>
              <div className="col-1-2">
                <div className="box-light">
                Right
                </div>
              </div>
            </div>
            <div class="row">
              <div className="col-1-1">
                <div className="box-light">
                Full
                </div>
              </div>
            </div>
          </main>
          </div>
      )
    }
  }
  export default DashboardView;
  
  