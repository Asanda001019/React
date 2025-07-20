import React from 'react';

function TeamReports() {
  return (
    <div>
      <div id="team-reports" className="wireframe-container">
        <div className="wireframe">
          <h2>9. Team Reports & Analytics</h2>
          <div className="wireframe-content">
            <div className="box">
              <h3>Report Configuration</h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '15px',
                }}
              >
                <div className="form-group">
                  <label htmlFor="time-period">Time Period</label>
                  <select id="time-period">
                    <option>This Week</option>
                    <option>Last Week</option>
                    <option>This Month</option>
                    <option>Last Month</option>
                    <option>Quarter</option>
                    <option>Custom Range</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="report-type">Report Type</label>
                  <select id="report-type">
                    <option>Team Performance Summary</option>
                    <option>Individual Comparisons</option>
                    <option>Activity Trends</option>
                    <option>Target vs Achievement</option>
                    <option>Client Interaction Report</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="team-members">Team Members</label>
                  <select id="team-members" multiple defaultValue={['All Team Members']}>
                    <option>All Team Members</option>
                    <option>Sarah Johnson</option>
                    <option>Michael Chen</option>
                    <option>David Smith</option>
                    <option>James Wilson</option>
                    <option>Lisa Brown</option>
                  </select>
                </div>
              </div>
              <div style={{ marginTop: '15px' }}>
                <button className="btn-primary">Generate Report</button>
                <button className="btn-secondary">Save Configuration</button>
                <button className="btn-secondary">Schedule Automatic Report</button>
              </div>
            </div>

            <div className="box">
              <h3>Team Performance Metrics</h3>
              <div className="dashboard-grid">
                <div
                  className="kpi-card"
                  style={{ background: 'linear-gradient(135deg, #1abc9c, #16a085)' }}
                >
                  <h3>27.5</h3>
                  <p>Average Calls per Advisor</p>
                </div>
                <div
                  className="kpi-card"
                  style={{ background: 'linear-gradient(135deg, #e74c3c, #c0392b)' }}
                >
                  <h3>7.2</h3>
                  <p>Average Appointments per Advisor</p>
                </div>
                <div
                  className="kpi-card"
                  style={{ background: 'linear-gradient(135deg, #f39c12, #d35400)' }}
                >
                  <h3>78%</h3>
                  <p>Team Success Rate</p>
                </div>
                <div
                  className="kpi-card"
                  style={{ background: 'linear-gradient(135deg, #9b59b6, #8e44ad)' }}
                >
                  <h3>83%</h3>
                  <p>Target Achievement Rate</p>
                </div>
              </div>
            </div>

            <div className="box">
              <h3>Individual Performance Comparison</h3>
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Advisor Name</th>
                      <th>Calls Made</th>
                      <th>Appointments</th>
                      <th>Met</th>
                      <th>Rescheduled</th>
                      <th>Cancelled</th>
                      <th>Success Rate</th>
                      <th>Target Achievement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: 'Sarah Johnson',
                        calls: 45,
                        appointments: 12,
                        met: 10,
                        rescheduled: 1,
                        cancelled: 1,
                        success: '89%',
                        target: { value: '120%', status: 'status-met' },
                      },
                      {
                        name: 'Michael Chen',
                        calls: 38,
                        appointments: 10,
                        met: 8,
                        rescheduled: 1,
                        cancelled: 1,
                        success: '82%',
                        target: { value: '105%', status: 'status-met' },
                      },
                      {
                        name: 'David Smith',
                        calls: 35,
                        appointments: 8,
                        met: 6,
                        rescheduled: 1,
                        cancelled: 1,
                        success: '75%',
                        target: { value: '95%', status: 'status-rescheduled' },
                      },
                      {
                        name: 'James Wilson',
                        calls: 18,
                        appointments: 4,
                        met: 2,
                        rescheduled: 1,
                        cancelled: 1,
                        success: '50%',
                        target: { value: '45%', status: 'status-missed' },
                      },
                      {
                        name: 'Lisa Brown',
                        calls: 26,
                        appointments: 6,
                        met: 4,
                        rescheduled: 1,
                        cancelled: 1,
                        success: '67%',
                        target: { value: '65%', status: 'status-rescheduled' },
                      },
                    ].map((advisor, idx) => (
                      <tr key={idx}>
                        <td>{advisor.name}</td>
                        <td>{advisor.calls}</td>
                        <td>{advisor.appointments}</td>
                        <td>{advisor.met}</td>
                        <td>{advisor.rescheduled}</td>
                        <td>{advisor.cancelled}</td>
                        <td>{advisor.success}</td>
                        <td>
                          <span className={`status-badge ${advisor.target.status}`}>
                            {advisor.target.value}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="box">
              <h3>Performance Trends Chart</h3>
              <div
                style={{
                  height: '350px',
                  background: '#f8f9fa',
                  border: '2px dashed #bdc3c7',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  color: '#7f8c8d',
                  textAlign: 'center',
                  flexDirection: 'column',
                  padding: '10px',
                }}
              >
                📊 Interactive Performance Trends<br />
                (Weekly/Monthly comparison charts for each advisor)<br />
                • Calls made over time<br />
                • Appointment success rates<br />
                • Target achievement trends
              </div>
            </div>

            <div className="box">
              <h3>Export & Distribution Options</h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '15px',
                }}
              >
                <button className="btn-secondary">📄 Export as PDF</button>
                <button className="btn-secondary">📊 Export as Excel</button>
                <button className="btn-secondary">📧 Email to Stakeholders</button>
                <button className="btn-secondary">📅 Schedule Regular Reports</button>
                <button className="btn-secondary">💾 Save Report Template</button>
                <button className="btn-secondary">🖨️ Print Report</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamReports;
