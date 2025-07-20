import React, { useState } from 'react';

function Reports() {
  const [dateRange, setDateRange] = useState('This Week');
  const [reportType, setReportType] = useState('Performance Summary');

  const handleGenerateReport = () => {
    alert(`Generating ${reportType} for ${dateRange}`);
    // In a real app, you'd fetch data here.
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
    <div id="reports" className="wireframe-container">
      <div className="wireframe">
        <h2>5. Reports & Analytics</h2>

        <div className="wireframe-content">
          <div className="box">
            <h3>Report Filters</h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '15px',
                marginBottom: '15px',
              }}
            >
              <div className="form-group">
                <label>Date Range</label>
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                >
                  <option>This Week</option>
                  <option>Last Week</option>
                  <option>This Month</option>
                  <option>Custom Range</option>
                </select>
              </div>

              <div className="form-group">
                <label>Report Type</label>
                <select
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value)}
                >
                  <option>Performance Summary</option>
                  <option>Activity Details</option>
                  <option>Client Meetings</option>
                </select>
              </div>
            </div>

            <button className="btn-primary" onClick={handleGenerateReport}>
              Generate Report
            </button>
          </div>

          <div className="box">
            <h3>Weekly Performance Overview</h3>

            <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
              {kpiData.map((kpi, index) => (
                <div key={index} className="kpi-card" style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                  <h3>{kpi.value}</h3>
                  <p>{kpi.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="box">
            <h3>Daily Activity Chart</h3>

            <div
              style={{
                height: '300px',
                background: '#f8f9fa',
                border: '2px dashed #bdc3c7',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                color: '#7f8c8d',
                textAlign: 'center',
                padding: '20px'
              }}
            >
              📊 Interactive Chart Area
              <br />
              (Calls, Appointments, Outcomes by Day)
            </div>
          </div>

          <div className="box">
            <h3>Export Options</h3>

            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <button className="btn-secondary" onClick={() => handleExport('PDF')}>
                📄 Export as PDF
              </button>
              <button className="btn-secondary" onClick={() => handleExport('CSV')}>
                📊 Export as CSV
              </button>
              <button className="btn-secondary" onClick={() => handleExport('Email')}>
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
