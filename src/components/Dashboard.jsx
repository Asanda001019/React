import React from 'react'
 
function Dashboard() {
  return (
     
      <div id="dashboard" className="wireframe-container">
            <div className="wireframe">
                <h2>2. Dashboard (Home Page)</h2>
                <div className="wireframe-content">
                    <div className="box">
                        <h3>Header Navigation</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>Welcome, [Advisor Name]</div>
                            <div>
                                <button className="btn-secondary">Notifications (3)</button>
                                <button className="btn-secondary">Profile</button>
                                <button className="btn-secondary">Logout</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="box">
                        <h3>Quick Actions</h3>
                        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                            <button className="btn-primary">New Daily Entry</button>
                            <button className="btn-primary">Schedule Appointment</button>
                            <button className="btn-primary">View Reports</button>
                        </div>
                    </div>
                    
                    <div className="box">
                        <h3>Today's KPIs</h3>
                        <div className="dashboard-grid">
                            <div className="kpi-card">
                                <h3>8</h3>
                                <p>Calls Made Today</p>
                            </div>
                            <div className="kpi-card">
                                <h3>3</h3>
                                <p>Appointments Scheduled</p>
                            </div>
                            <div className="kpi-card">
                                <h3>2</h3>
                                <p>Meetings Completed</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="box">
                        <h3>Recent Activity</h3>
                        <div className="table-container">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Activity</th>
                                        <th>Client</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Today</td>
                                        <td>Client Meeting</td>
                                        <td>John Smith</td>
                                        <td><span className="status-badge status-met">Met</span></td>
                                    </tr>
                                    <tr>
                                        <td>Yesterday</td>
                                        <td>Phone Call</td>
                                        <td>Sarah Johnson</td>
                                        <td><span className="status-badge status-rescheduled">Rescheduled</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
  )
}

export default Dashboard
