import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  // Dummy data (replace with Supabase later)
  const advisor = { fullName: 'Asanda Madondo', notificationsCount: 3 };
  const kpis = { calls: 8, appointments: 3, meetings: 2 };
  const activities = [
    { date: 'Today', type: 'Client Meeting', client: 'John Smith', status: 'Met' },
    { date: 'Yesterday', type: 'Phone Call', client: 'Sarah Johnson', status: 'Rescheduled' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token'); // optional if you use tokens
    navigate('/login');
  };

  const goToPage = (path) => navigate(path);

  return (
    <div id="dashboard" className="wireframe-container">
      <div className="wireframe">
        <h2>Dashboard</h2>
        <div className="wireframe-content">

          <div className="box">
            <h3>Header Navigation</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>Welcome, {advisor.fullName}</div>
              <div>
                <button className="btn-secondary">Notifications ({advisor.notificationsCount})</button>
                <button className="btn-secondary">Profile</button>
                <button className="btn-secondary" onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </div>

          <div className="box">
            <h3>Quick Actions</h3>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => goToPage('/dailyEntry')}>New Daily Entry</button>
              <button className="btn-primary" onClick={() => goToPage('/appointments')}>Schedule Appointment</button>
              <button className="btn-primary" onClick={() => goToPage('/reports')}>View Reports</button>
            </div>
          </div>

          <div className="box">
            <h3>Today's KPIs</h3>
            <div className="dashboard-grid">
              <div className="kpi-card">
                <h3>{kpis.calls}</h3>
                <p>Calls Made Today</p>
              </div>
              <div className="kpi-card">
                <h3>{kpis.appointments}</h3>
                <p>Appointments Scheduled</p>
              </div>
              <div className="kpi-card">
                <h3>{kpis.meetings}</h3>
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
                  {activities.map((activity, idx) => (
                    <tr key={idx}>
                      <td>{activity.date}</td>
                      <td>{activity.type}</td>
                      <td>{activity.client}</td>
                      <td>
                        <span className={`status-badge status-${activity.status.toLowerCase()}`}>
                          {activity.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
