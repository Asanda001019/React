import React, { useState } from 'react';

function AdvisorDetails() {
  const [modalType, setModalType] = useState(null); // 'details' or 'reminder'
  const [selectedDate, setSelectedDate] = useState('');

  const handleViewDetails = (date) => {
    setSelectedDate(date);
    setModalType('details');
  };

  const handleSendReminder = (date) => {
    setSelectedDate(date);
    setModalType('reminder');
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedDate('');
  };

  return (
    <div id="advisor-details" className="wireframe-container">
      <div className="wireframe">
        <h2>10. Individual Advisor Details</h2>
        <div className="wireframe-content">

          {/* Advisor Selection */}
          <div className="box">
            <h3>Advisor Selection</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
              <div className="form-group" style={{ minWidth: '250px' }}>
                <label>Select Advisor</label>
                <select>
                  <option>Sarah Johnson</option>
                  <option>Michael Chen</option>
                  <option>David Smith</option>
                  <option>James Wilson</option>
                  <option>Lisa Brown</option>
                </select>
              </div>
              <div className="form-group" style={{ minWidth: '200px' }}>
                <label>Time Period</label>
                <select>
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>This month</option>
                  <option>Custom range</option>
                </select>
              </div>
              <button className="btn-primary">Load Data</button>
            </div>
          </div>

          {/* Advisor Profile Summary */}
          <div className="box">
            <h3>Advisor Profile Summary</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: '#3498db',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '24px',
                    fontWeight: 'bold'
                  }}>SJ</div>
                  <div>
                    <h4>Sarah Johnson</h4>
                    <p>Financial Advisor</p>
                    <p>Employee ID: FA001</p>
                    <p>Team: Johannesburg North</p>
                  </div>
                </div>
                <ul className="feature-list">
                  <li>Start Date: January 15, 2023</li>
                  <li>Direct Manager: John Manager</li>
                  <li>Contact: sarah.j@oldmutual.com</li>
                  <li>Phone: +27 11 123 4567</li>
                </ul>
              </div>

              <div>
                <h4>Performance Badges</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '15px' }}>
                  <span className="status-badge status-met">Top Performer</span>
                  <span className="status-badge" style={{ background: '#f39c12', color: 'white' }}>Target Achiever</span>
                  <span className="status-badge" style={{ background: '#9b59b6', color: 'white' }}>Consistent</span>
                  <span className="status-badge" style={{ background: '#1abc9c', color: 'white' }}>Team Player</span>
                </div>
                <h4 style={{ marginTop: '20px' }}>Recent Notes</h4>
                <div style={{ background: '#f8f9fa', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>
                  <p style={{ fontSize: '14px', color: '#7f8c8d' }}>
                    Last 1:1 meeting: Discussed new client acquisition strategies. Showing excellent progress on Q4 targets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="box">
            <h3>Performance Metrics (Last 30 Days)</h3>
            <div className="dashboard-grid">
              <div className="kpi-card" style={{ background: 'linear-gradient(135deg, #27ae60, #2ecc71)' }}>
                <h3>142</h3>
                <p>Total Calls Made</p>
                <small>Target: 120 (118% achieved)</small>
              </div>
              <div className="kpi-card" style={{ background: 'linear-gradient(135deg, #3498db, #2980b9)' }}>
                <h3>38</h3>
                <p>Appointments Scheduled</p>
                <small>Target: 30 (127% achieved)</small>
              </div>
              <div className="kpi-card" style={{ background: 'linear-gradient(135deg, #f39c12, #e67e22)' }}>
                <h3>32</h3>
                <p>Meetings Completed</p>
                <small>Success Rate: 84%</small>
              </div>
              <div className="kpi-card" style={{ background: 'linear-gradient(135deg, #9b59b6, #8e44ad)' }}>
                <h3>R 2.1M</h3>
                <p>Revenue Generated</p>
                <small>Target: R 1.8M (117% achieved)</small>
              </div>
            </div>
          </div>

          {/* Daily Activity History */}
          <div className="box">
            <h3>Daily Activity History</h3>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Plans Submitted</th>
                    <th>Calls Made</th>
                    <th>Appointments</th>
                    <th>Meetings</th>
                    <th>Success Rate</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jan 19, 2024</td>
                    <td><span className="status-badge status-met">Yes</span></td>
                    <td>8</td>
                    <td>2</td>
                    <td>2 Met</td>
                    <td>100%</td>
                    <td>
                      <button className="btn-secondary" onClick={() => handleViewDetails('Jan 19, 2024')}>
                        View Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Jan 18, 2024</td>
                    <td><span className="status-badge status-met">Yes</span></td>
                    <td>6</td>
                    <td>3</td>
                    <td>2 Met, 1 Rescheduled</td>
                    <td>67%</td>
                    <td>
                      <button className="btn-secondary" onClick={() => handleViewDetails('Jan 18, 2024')}>
                        View Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Jan 17, 2024</td>
                    <td><span className="status-badge status-missed">No</span></td>
                    <td>0</td>
                    <td>0</td>
                    <td>-</td>
                    <td>-</td>
                    <td>
                      <button className="btn-secondary" onClick={() => handleSendReminder('Jan 17, 2024')}>
                        Send Reminder
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Performance Trends */}
          <div className="box">
            <h3>Performance Trends</h3>
            <div style={{
              height: '300px',
              background: '#f8f9fa',
              border: '2px dashed #bdc3c7',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              color: '#7f8c8d'
            }}>
              📈 Individual Performance Charts<br />
              • Daily calls and appointments over time<br />
              • Success rate trends<br />
              • Target achievement progress
            </div>
          </div>

          {/* Manager Actions */}
          <div className="box">
            <h3>Manager Actions</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
              <button className="btn-primary">Schedule 1:1 Meeting</button>
              <button className="btn-secondary">Send Motivational Message</button>
              <button className="btn-secondary">Add Performance Note</button>
              <button className="btn-secondary">Set Individual Target</button>
              <button className="btn-secondary">Export Advisor Report</button>
              <button className="btn-secondary">Compare with Peers</button>
            </div>
          </div>

          {/* Coaching & Development */}
          <div className="box">
            <h3>Coaching & Development</h3>
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
              <h4>Development Areas</h4>
              <ul className="feature-list" style={{ marginBottom: '20px' }}>
                <li>Client follow-up consistency - Excellent</li>
                <li>Call conversion rate - Good, room for improvement</li>
                <li>Meeting preparation - Excellent</li>
                <li>Documentation quality - Good</li>
              </ul>
              <h4>Recommended Actions</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <span className="status-badge" style={{ background: '#3498db', color: 'white' }}>Call Technique Training</span>
                <span className="status-badge" style={{ background: '#f39c12', color: 'white' }}>Peer Mentoring</span>
                <span className="status-badge" style={{ background: '#27ae60', color: 'white' }}>Advanced Product Training</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Modal Logic */}
      {modalType && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            {modalType === 'details' ? (
              <>
                <h3>Activity Details</h3>
                <p>Showing detailed activity for <strong>{selectedDate}</strong>.</p>
              </>
            ) : (
              <>
                <h3>Reminder Sent</h3>
                <p>A reminder was sent for <strong>{selectedDate}</strong>.</p>
              </>
            )}
            <button className="btn-secondary" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

// Modal Styles
const modalOverlay = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
};

const modalContent = {
  background: '#fff',
  padding: '30px',
  borderRadius: '10px',
  width: '300px',
  textAlign: 'center',
  boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
};

export default AdvisorDetails;
