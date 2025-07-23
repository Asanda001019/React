import React, { useState } from 'react';
import { 
  Clock, 
  Calendar, 
  Phone, 
  Users, 
  FileText, 
  Target, 
  Settings,
  Plus,
  Filter,
  Bell,
  User,
  LogOut,
  TrendingUp,
  Activity,
  CheckCircle,
  ChevronLeft
} from 'lucide-react';
import './Reports.css';

function Reports() {
  // Mock navigation functions
  const navigate = (path) => {
    console.log(`Navigate to: ${path}`);
  };

  const goToPage = (path) => navigate(path);
  
  // Mock advisor data
  const advisor = { fullName: 'Asanda Madondo', notificationsCount: 3 };

  // Reports state
  const [dateRange, setDateRange] = useState('This Week');
  const [reportType, setReportType] = useState('Performance Summary');

  const handleGenerateReport = () => {
    alert(`Generating ${reportType} for ${dateRange}`);
  };

  const handleExport = (type) => {
    alert(`Exporting report as ${type}`);
  };

  // Example dynamic KPI data
  const kpiData = [
    { label: 'Total Calls This Week', value: 45 },
    { label: 'Appointments Scheduled', value: 12 },
    { label: 'Meetings Completed', value: 8 },
    { label: 'Success Rate', value: '67%' },
  ];

  return (
    <div className="reports-container">
      {/* Modern Sidebar */}
      <div className="sidebar">
        <div className="sidebar-content">
          {/* Logo/Brand */}
          <div className="brand-logo">
            <div className="logo-icon">
              <Activity className="icon" />
            </div>
            <div>
              <h1 className="logo-title">ActivityHub</h1>
              <p className="logo-subtitle">Financial Advisory</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="sidebar-nav">
            <button 
              onClick={() => goToPage('/dashboard')}
              className="nav-button"
            >
              <TrendingUp className="nav-icon" />
              <span>Dashboard</span>
            </button>
            <button 
              onClick={() => goToPage('/dailyEntry')}
              className="nav-button"
            >
              <Plus className="nav-icon" />
              <span>Daily Entry</span>
            </button>
            <button 
              onClick={() => goToPage('/appointments')}
              className="nav-button"
            >
              <Calendar className="nav-icon" />
              <span>Appointments</span>
            </button>
            <div className="nav-button active">
              <FileText className="nav-icon" />
              <span>View Reports</span>
            </div>
            <button className="nav-button">
              <Phone className="nav-icon" />
              <span>Call Tracker</span>
            </button>
            <button className="nav-button">
              <Users className="nav-icon" />
              <span>Clients</span>
            </button>
            <button className="nav-button">
              <Settings className="nav-icon" />
              <span>Settings</span>
            </button>
          </nav>
        </div>

        {/* User Profile */}
        <div className="user-profile">
          <div className="profile-card">
            <div className="profile-info">
              <div className="profile-avatar">AM</div>
              <div>
                <p className="profile-name">{advisor.fullName}</p>
                <p className="profile-role">Financial Advisor</p>
              </div>
            </div>
            <button 
              onClick={() => navigate('/login')}
              className="logout-button"
            >
              <LogOut className="logout-icon" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="content-header">
          <div>
            <button 
              onClick={() => goToPage('/dashboard')}
              className="back-button"
            >
              <ChevronLeft className="back-icon" />
              <span>Back to Dashboard</span>
            </button>
            <h1 className="page-title">Reports & Analytics</h1>
            <p className="page-subtitle">Generate and analyze your performance reports</p>
          </div>
          <div className="header-actions">
            <button className="notification-button">
              <Bell className="action-icon" />
              {advisor.notificationsCount > 0 && (
                <span className="notification-badge">
                  {advisor.notificationsCount}
                </span>
              )}
            </button>
            <button className="profile-button">
              <User className="action-icon" />
            </button>
          </div>
        </div>

        {/* Reports Content */}
        <div className="reports-content">
          {/* Report Filters */}
          <div className="report-section">
            <h2 className="section-title">Report Filters</h2>
            <div className="filter-grid">
              <div className="form-group">
                <label className="form-label">Date Range</label>
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="form-select"
                >
                  <option>This Week</option>
                  <option>Last Week</option>
                  <option>This Month</option>
                  <option>Custom Range</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Report Type</label>
                <select
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value)}
                  className="form-select"
                >
                  <option>Performance Summary</option>
                  <option>Activity Details</option>
                  <option>Client Meetings</option>
                </select>
              </div>
            </div>
            <button 
              onClick={handleGenerateReport}
              className="generate-report-button"
            >
              Generate Report
            </button>
          </div>

          {/* Weekly Performance Overview */}
          <div className="report-section">
            <h2 className="section-title">Weekly Performance Overview</h2>
            <div className="kpi-grid">
              {kpiData.map((kpi, index) => (
                <div key={index} className="kpi-card">
                  <h3 className="kpi-value">{kpi.value}</h3>
                  <p className="kpi-label">{kpi.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Activity Chart */}
          <div className="report-section">
            <h2 className="section-title">Daily Activity Chart</h2>
            <div className="chart-placeholder">
              📊 Interactive Chart Area
              <br />
              (Calls, Appointments, Outcomes by Day)
            </div>
          </div>

          {/* Export Options */}
          <div className="report-section">
            <h2 className="section-title">Export Options</h2>
            <div className="export-options">
              <button 
                onClick={() => handleExport('PDF')}
                className="export-button"
              >
                📄 Export as PDF
              </button>
              <button 
                onClick={() => handleExport('CSV')}
                className="export-button"
              >
                📊 Export as CSV
              </button>
              <button 
                onClick={() => handleExport('Email')}
                className="export-button"
              >
                📧 Email Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;