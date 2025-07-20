import React from 'react';

function ManagerDashboard() {
  return (
    <div>
      <div id="manager-dashboard" className="wireframe-container">
        <div className="wireframe">
          <h2>8. Manager Dashboard</h2>
          <div className="wireframe-content">

            <div className="box">
              <h3>Manager Navigation</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>Welcome, Manager [Name] | Team: Johannesburg North</div>
                <div>
                  <button className="btn-secondary">Team Settings</button>
                  <button className="btn-secondary">Export All Data</button>
                  <button className="btn-secondary">Profile</button>
                  <button className="btn-secondary">Logout</button>
                </div>
              </div>
            </div>

            <div className="box">
              <h3>Team Quick Actions</h3>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <button className="btn-primary">View Team Performance</button>
                <button className="btn-primary">Generate Weekly Report</button>
                <button className="btn-primary">Send Team Reminder</button>
                <button className="btn-primary">Add New Advisor</button>
              </div>
            </div>

            <div className="box">
              <h3>Team Performance Overview (This Week)</h3>
              <div className="dashboard-grid">
                <div className="kpi-card" style={{ background: 'linear-gradient(135deg, #27ae60, #2ecc71)' }}>
                  <h3>12</h3>
                  <p>Active Advisors</p>
                </div>
                <div className="kpi-card" style={{ background: 'linear-gradient(135deg, #3498db, #2980b9)' }}>
                  <h3>324</h3>
                  <p>Total Calls Made</p>
                </div>
                <div className="kpi-card" style={{ background: 'linear-gradient(135deg, #f39c12, #e67e22)' }}>
                  <h3>87</h3>
                  <p>Appointments Scheduled</p>
                </div>
                <div className="kpi-card" style={{ background: 'linear-gradient(135deg, #9b59b6, #8e44ad)' }}>
                  <h3>73%</h3>
                  <p>Weekly Target Achievement</p>
                </div>
              </div>
            </div>

            <div className="box">
              <h3>Top Performers This Week</h3>
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Advisor Name</th>
                      <th>Calls Made</th>
                      <th>Appointments</th>
                      <th>Success Rate</th>
                      <th>Target Achievement</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>🥇 1</td>
                      <td>Sarah Johnson</td>
                      <td>45</td>
                      <td>12</td>
                      <td>89%</td>
                      <td><span className="status-badge status-met">120%</span></td>
                      <td><button className="btn-secondary">View Details</button></td>
                    </tr>
                    <tr>
                      <td>🥈 2</td>
                      <td>Michael Chen</td>
                      <td>38</td>
                      <td>10</td>
                      <td>82%</td>
                      <td><span className="status-badge status-met">105%</span></td>
                      <td><button className="btn-secondary">View Details</button></td>
                    </tr>
                    <tr>
                      <td>🥉 3</td>
                      <td>David Smith</td>
                      <td>35</td>
                      <td>8</td>
                      <td>75%</td>
                      <td><span className="status-badge status-rescheduled">95%</span></td>
                      <td><button className="btn-secondary">View Details</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="box">
              <h3>Advisors Needing Attention</h3>
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Advisor Name</th>
                      <th>Issue</th>
                      <th>Last Activity</th>
                      <th>Target Achievement</th>
                      <th>Action Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>James Wilson</td>
                      <td>Low activity</td>
                      <td>2 days ago</td>
                      <td><span className="status-badge status-missed">45%</span></td>
                      <td><button className="btn-secondary">Contact</button></td>
                    </tr>
                    <tr>
                      <td>Lisa Brown</td>
                      <td>Missed entries</td>
                      <td>Yesterday</td>
                      <td><span className="status-badge status-rescheduled">65%</span></td>
                      <td><button className="btn-secondary">Send Reminder</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="box">
              <h3>Team Activity Timeline</h3>
              <div style={{
                height: '200px',
                background: '#f8f9fa',
                border: '2px dashed #bdc3c7',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                color: '#7f8c8d'
              }}>
                📈 Real-time Team Activity Feed<br />
                (Recent entries, appointments, achievements)
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagerDashboard;
