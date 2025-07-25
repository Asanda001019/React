import React from 'react';
import { 
  Clock, 
  Bell,
  User,
  TrendingUp,
  CheckCircle,
  Plus,
  Calendar,
  FileText,
  Phone,
  Users,
  Filter
} from 'lucide-react';
import Sidebar from './Sidebar';
import './Dashboard.css';

function Dashboard() {
  // Mock navigation functions - replace with your actual useNavigate hook
  const navigate = (path, pageId) => {
    console.log(`Navigate to: ${path}, Page ID: ${pageId}`);
    // Here you would use your actual navigation logic
    // For example: history.push(path) or navigate(path)
  };

  // Original data (keeping your structure)
  const advisor = { fullName: 'Asanda Madondo', notificationsCount: 3 };
  const kpis = { calls: 8, appointments: 3, meetings: 2 };
  const activities = [
    { date: 'Today', type: 'Client Meeting', client: 'John Smith', status: 'Met' },
    { date: 'Yesterday', type: 'Phone Call', client: 'Sarah Johnson', status: 'Rescheduled' },
  ];

  const goToPage = (path) => navigate(path);

  return (
    <div className="dashboard-container">
      {/* Shared Sidebar */}
      <Sidebar currentPage="dashboard" onNavigate={navigate} />

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div>
            <h1 className="welcome-title">Welcome back, {advisor.fullName.split(' ')[0]}!</h1>
            <p className="welcome-subtitle">Here's what's happening with your activities today.</p>
          </div>
          <div className="header-actions">
            <button className="notification-button">
              <Bell className="notification-icon" />
              {advisor.notificationsCount > 0 && (
                <span className="notification-badge">
                  {advisor.notificationsCount}
                </span>
              )}
            </button>
            <button className="user-button">
              <User className="user-icon" />
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="section">
          <h2 className="section-title">Quick Actions</h2>
          <div className="quick-actions-grid">
            <button 
              onClick={() => navigate('/dailyEntry', 'dailyEntry')}
              className="quick-action-card"
            >
              <div className="quick-action-icon blue">
                <Plus className="quick-action-icon-svg" />
              </div>
              <h3 className="quick-action-title">New Daily Entry</h3>
              <p className="quick-action-description">Track your daily activities and progress</p>
            </button>

            <button 
              onClick={() => navigate('/appointments', 'appointments')}
              className="quick-action-card green"
            >
              <div className="quick-action-icon green">
                <Calendar className="quick-action-icon-svg" />
              </div>
              <h3 className="quick-action-title">Schedule Appointment</h3>
              <p className="quick-action-description">Book meetings with your clients</p>
            </button>

            <button 
              onClick={() => navigate('/reports', 'reports')}
              className="quick-action-card purple"
            >
              <div className="quick-action-icon purple">
                <FileText className="quick-action-icon-svg" />
              </div>
              <h3 className="quick-action-title">View Reports</h3>
              <p className="quick-action-description">Analyze your performance metrics</p>
            </button>
          </div>
        </div>

        {/* Today's KPIs */}
        <div className="section">
          <h2 className="section-title">Today's Performance</h2>
          <div className="kpi-grid">
            <div className="kpi-card">
              <div className="kpi-header">
                <div className="kpi-icon blue">
                  <Phone className="kpi-icon-svg" />
                </div>
                <span className="kpi-emoji">📞</span>
              </div>
              <h3 className="kpi-value">{kpis.calls}</h3>
              <p className="kpi-label">Calls Made Today</p>
              <div className="kpi-trend">
                <TrendingUp className="trend-icon" />
                <span>+12% from yesterday</span>
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-header">
                <div className="kpi-icon green">
                  <Calendar className="kpi-icon-svg" />
                </div>
                <span className="kpi-emoji">📅</span>
              </div>
              <h3 className="kpi-value">{kpis.appointments}</h3>
              <p className="kpi-label">Appointments Scheduled</p>
              <div className="kpi-trend">
                <TrendingUp className="trend-icon" />
                <span>+5% from yesterday</span>
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-header">
                <div className="kpi-icon purple">
                  <Users className="kpi-icon-svg" />
                </div>
                <span className="kpi-emoji">🤝</span>
              </div>
              <h3 className="kpi-value">{kpis.meetings}</h3>
              <p className="kpi-label">Meetings Completed</p>
              <div className="kpi-trend">
                <TrendingUp className="trend-icon" />
                <span>+8% from yesterday</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="recent-activity">
          <div className="activity-header">
            <div className="activity-title-container">
              <h2 className="activity-title">Recent Activity</h2>
              <button className="filter-button">
                <Filter className="filter-icon" />
                <span>Filter</span>
              </button>
            </div>
          </div>
          <div className="activity-table-container">
            <table className="activity-table">
              <thead className="table-header">
                <tr>
                  <th className="table-header-cell">Date</th>
                  <th className="table-header-cell">Activity</th>
                  <th className="table-header-cell">Client</th>
                  <th className="table-header-cell">Status</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {activities.map((activity, idx) => (
                  <tr key={idx} className="table-row">
                    <td className="table-cell">
                      <span className="activity-date">{activity.date}</span>
                    </td>
                    <td className="table-cell">
                      <div className="activity-type">
                        <div className="activity-indicator"></div>
                        <span>{activity.type}</span>
                      </div>
                    </td>
                    <td className="table-cell">
                      <span>{activity.client}</span>
                    </td>
                    <td className="table-cell">
                      <span className={`status-badge ${
                        activity.status.toLowerCase() === 'met' 
                          ? 'status-success' 
                          : 'status-warning'
                      }`}>
                        {activity.status.toLowerCase() === 'met' && <CheckCircle className="status-icon" />}
                        {activity.status.toLowerCase() === 'rescheduled' && <Clock className="status-icon" />}
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
  );
}

export default Dashboard;