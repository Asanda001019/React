import React from 'react';

function Contracts() {
  return (
    <div id="contract" className="wireframe-container">
      <div className="wireframe">
        <h2>7. Signed Contract Template</h2>

        <div className="wireframe-content">
          <div className="contract-section">
            <h3>System Development Agreement</h3>
            <p><strong>Project:</strong> Daily Activity Tracker MVP for Old Mutual Financial Advisors</p>
            <p><strong>Date:</strong> [Contract Date]</p>
            <p><strong>Parties:</strong> Old Mutual & Development Team</p>
          </div>

          <div className="contract-section">
            <h3>1. Project Scope</h3>
            <ul className="feature-list">
              <li>Web-based Daily Activity Tracker MVP</li>
              <li>Mobile-responsive design for advisors</li>
              <li>User authentication and role management</li>
              <li>Daily activity logging and tracking</li>
              <li>Appointment scheduling and management</li>
              <li>Performance dashboard and reporting</li>
              <li>Notification system for reminders</li>
              <li>Data export functionality</li>
            </ul>
          </div>

          <div className="contract-section">
            <h3>2. Technical Specifications</h3>
            <ul className="feature-list">
              <li>Frontend: React.js with responsive design</li>
              <li>Backend: Node.js/Express or Python/Django</li>
              <li>Database: PostgreSQL or MongoDB</li>
              <li>Authentication: JWT-based security</li>
              <li>Hosting: Cloud-based (AWS/Azure)</li>
              <li>Mobile: Progressive Web App (PWA)</li>
              <li>Security: HTTPS, data encryption</li>
              <li>Backup: Daily automated backups</li>
            </ul>
          </div>

          <div className="contract-section">
            <h3>3. User Roles & Permissions</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div className="box">
                <h4>Financial Advisor</h4>
                <ul className="feature-list">
                  <li>Create daily activity entries</li>
                  <li>Schedule and manage appointments</li>
                  <li>View personal performance reports</li>
                  <li>Update profile information</li>
                  <li>Receive notifications</li>
                </ul>
              </div>
              <div className="box">
                <h4>Manager</h4>
                <ul className="feature-list">
                  <li>View team performance reports</li>
                  <li>Access individual advisor data</li>
                  <li>Generate team analytics</li>
                  <li>Export reports and data</li>
                  <li>Manage team settings</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="contract-section">
            <h3>4. Development Timeline</h3>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Phase</th>
                    <th>Duration</th>
                    <th>Deliverables</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Phase 1: Design & Planning</td>
                    <td>2 weeks</td>
                    <td>Wireframes, UI/UX Design, Database Schema</td>
                    <td><span className="status-badge status-met">Complete</span></td>
                  </tr>
                  <tr>
                    <td>Phase 2: Backend Development</td>
                    <td>4 weeks</td>
                    <td>API Development, Database Setup, Authentication</td>
                    <td><span className="status-badge status-rescheduled">In Progress</span></td>
                  </tr>
                  <tr>
                    <td>Phase 3: Frontend Development</td>
                    <td>4 weeks</td>
                    <td>User Interface, Dashboard, Reports</td>
                    <td><span className="status-badge status-missed">Pending</span></td>
                  </tr>
                  <tr>
                    <td>Phase 4: Testing & Deployment</td>
                    <td>2 weeks</td>
                    <td>QA Testing, Bug Fixes, Production Deployment</td>
                    <td><span className="status-badge status-missed">Pending</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="contract-section">
            <h3>5. Security & Compliance</h3>
            <ul className="feature-list">
              <li>POPIA (Protection of Personal Information Act) compliance</li>
              <li>Financial sector security standards</li>
              <li>Data encryption at rest and in transit</li>
              <li>Regular security audits and updates</li>
              <li>User access controls and audit logs</li>
              <li>Secure password policies</li>
              <li>Session management and timeout</li>
            </ul>
          </div>

          <div className="contract-section">
            <h3>6. Support & Maintenance</h3>
            <ul className="feature-list">
              <li>3 months post-launch support included</li>
              <li>Bug fixes and minor enhancements</li>
              <li>User training and documentation</li>
              <li>Monthly performance monitoring</li>
              <li>Regular system updates and patches</li>
              <li>24/7 technical support contact</li>
            </ul>
          </div>

          <div className="contract-section">
            <h3>7. Payment Terms</h3>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Milestone</th>
                    <th>Payment</th>
                    <th>Due Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Project Initiation</td>
                    <td>30%</td>
                    <td>Contract Signing</td>
                    <td><span className="status-badge status-met">Paid</span></td>
                  </tr>
                  <tr>
                    <td>Design Completion</td>
                    <td>20%</td>
                    <td>End of Phase 1</td>
                    <td><span className="status-badge status-met">Paid</span></td>
                  </tr>
                  <tr>
                    <td>Backend Development</td>
                    <td>25%</td>
                    <td>End of Phase 2</td>
                    <td><span className="status-badge status-rescheduled">Pending</span></td>
                  </tr>
                  <tr>
                    <td>Final Delivery</td>
                    <td>25%</td>
                    <td>Project Completion</td>
                    <td><span className="status-badge status-missed">Pending</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="contract-section">
            <h3>8. Acceptance Criteria</h3>
            <ul className="feature-list">
              <li>All wireframe specifications implemented</li>
              <li>System passes security audit</li>
              <li>Mobile responsiveness verified</li>
              <li>Performance meets specified requirements</li>
              <li>User acceptance testing completed</li>
              <li>Documentation and training delivered</li>
            </ul>
          </div>

          <div className="signature-area">
            <h3>Digital Signatures</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginTop: '30px' }}>
              <div>
                <p><strong>Old Mutual Representative</strong></p>
                <div style={{ borderBottom: '2px solid #3498db', height: '60px', margin: '20px 0' }}></div>
                <p>Name: _______________________</p>
                <p>Title: _______________________</p>
                <p>Date: _______________________</p>
              </div>
              <div>
                <p><strong>Development Team Lead</strong></p>
                <div style={{ borderBottom: '2px solid #3498db', height: '60px', margin: '20px 0' }}></div>
                <p>Name: _______________________</p>
                <p>Title: _______________________</p>
                <p>Date: _______________________</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contracts;
