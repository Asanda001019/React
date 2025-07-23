import React, { useState } from 'react';
import { 
  Bell,
  User,
  ChevronLeft
} from 'lucide-react';
import Sidebar from './Sidebar';
import './Reports.css';

function Reports() {
  // Mock navigation functions
  const navigate = (path, pageId) => {
    console.log(`Navigate to: ${path}, Page ID: ${pageId}`);
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
      {/* Shared Sidebar */}
      <Sidebar currentPage="reports" onNavigate={navigate} />

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="content-header">
          <div>
            <button 
              onClick={() => navigate('/dashboard', 'dashboard')}
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