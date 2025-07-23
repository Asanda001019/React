import React, { useState } from 'react';
import { 
  Bell,
  User,
  ChevronLeft,
  Plus
} from 'lucide-react';
import Sidebar from './Sidebar';
import './DailyEntry.css';

function DailyEntry() {
  // Mock navigation functions
  const navigate = (path, pageId) => {
    console.log(`Navigate to: ${path}, Page ID: ${pageId}`);
  };

  const goToPage = (path) => navigate(path);
  
  // Mock advisor data
  const advisor = { fullName: 'Asanda Madondo', notificationsCount: 3 };

  // Daily Entry state
  const [selectedDate, setSelectedDate] = useState('2024-01-15');
  const [plans, setPlans] = useState('');
  const [callsMade, setCallsMade] = useState(0);
  const [appointments, setAppointments] = useState([
    {
      clientName: '',
      time: '',
      location: '',
      outcome: '',
      notes: ''
    }
  ]);
  const [summary, setSummary] = useState('');

  const handleAppointmentChange = (index, field, value) => {
    const newAppointments = [...appointments];
    newAppointments[index][field] = value;
    setAppointments(newAppointments);
  };

  const addAppointment = () => {
    setAppointments([
      ...appointments,
      { clientName: '', time: '', location: '', outcome: '', notes: '' }
    ]);
  };

  const handleSave = () => {
    const data = {
      selectedDate,
      plans,
      callsMade,
      appointments,
      summary
    };
    console.log('Saving Daily Entry:', data);
  };

  return (
    <div className="daily-entry-container">
      {/* Shared Sidebar */}
      <Sidebar currentPage="dailyEntry" onNavigate={navigate} />

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
            <h1 className="page-title">Daily Activity Entry</h1>
            <p className="page-subtitle">Record your daily activities and appointments</p>
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

        {/* Daily Entry Content */}
        <div className="entry-content">
          {/* Date Selection */}
          <div className="entry-section">
            <h2 className="section-title">Date Selection</h2>
            <div className="form-group">
              <label className="form-label">Select Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="date-input"
              />
            </div>
          </div>

          {/* Daily Plans */}
          <div className="entry-section">
            <h2 className="section-title">Daily Plans</h2>
            <div className="form-group">
              <label className="form-label">Plans for Today</label>
              <textarea
                rows="4"
                placeholder="Describe your plans for today..."
                value={plans}
                onChange={(e) => setPlans(e.target.value)}
                className="plans-textarea"
              ></textarea>
            </div>
          </div>

          {/* Call Activity */}
          <div className="entry-section">
            <h2 className="section-title">Call Activity</h2>
            <div className="form-group">
              <label className="form-label">Number of Calls Made</label>
              <input
                type="number"
                min="0"
                placeholder="0"
                value={callsMade}
                onChange={(e) => setCallsMade(Number(e.target.value))}
                className="calls-input"
              />
            </div>
          </div>

          {/* Appointments */}
          <div className="entry-section">
            <div className="section-header">
              <h2 className="section-title">Appointments</h2>
              <button 
                onClick={addAppointment}
                className="add-appointment-button"
              >
                <Plus className="add-icon" />
                <span>Add Another Appointment</span>
              </button>
            </div>

            <div className="appointments-list">
              {appointments.map((appt, index) => (
                <div
                  key={index}
                  className="appointment-card"
                >
                  <div className="appointment-content">
                    <div className="form-group">
                      <label className="form-label">Client Name</label>
                      <input
                        type="text"
                        placeholder="Client name"
                        value={appt.clientName}
                        onChange={(e) =>
                          handleAppointmentChange(index, 'clientName', e.target.value)
                        }
                        className="form-input"
                      />
                    </div>

                    <div className="appointment-grid">
                      <div className="form-group">
                        <label className="form-label">Time</label>
                        <input
                          type="time"
                          value={appt.time}
                          onChange={(e) =>
                            handleAppointmentChange(index, 'time', e.target.value)
                          }
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Location</label>
                        <input
                          type="text"
                          placeholder="Meeting location"
                          value={appt.location}
                          onChange={(e) =>
                            handleAppointmentChange(index, 'location', e.target.value)
                          }
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Outcome</label>
                      <select
                        value={appt.outcome}
                        onChange={(e) =>
                          handleAppointmentChange(index, 'outcome', e.target.value)
                        }
                        className="form-select"
                      >
                        <option value="">Select outcome...</option>
                        <option value="Met">Met</option>
                        <option value="Rescheduled">Rescheduled</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Notes</label>
                      <textarea
                        rows="2"
                        placeholder="Meeting notes..."
                        value={appt.notes}
                        onChange={(e) =>
                          handleAppointmentChange(index, 'notes', e.target.value)
                        }
                        className="notes-textarea"
                      ></textarea>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Summary */}
          <div className="entry-section">
            <h2 className="section-title">Daily Summary</h2>
            <div className="form-group">
              <label className="form-label">Summary Notes</label>
              <textarea
                rows="3"
                placeholder="Overall summary of the day..."
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="summary-textarea"
              ></textarea>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button 
              onClick={handleSave}
              className="save-button"
            >
              Save Daily Entry
            </button>
            <button className="draft-button">
              Save as Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyEntry;