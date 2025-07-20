import React, { useState } from 'react';

function DailyEntry() {
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
    // You can add actual save logic here (e.g., API call)
  };

  return (
    <div id="daily-entry" className="wireframe-container active">
      <div className="wireframe">
        <h2>3. Daily Activity Entry Page</h2>

        <div className="wireframe-content">
          <div className="box">
            <h3>Date Selection</h3>
            <div className="form-group">
              <label>Select Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
          </div>

          <div className="box">
            <h3>Daily Plans</h3>
            <div className="form-group">
              <label>Plans for Today</label>
              <textarea
                rows="4"
                placeholder="Describe your plans for today..."
                value={plans}
                onChange={(e) => setPlans(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="box">
            <h3>Call Activity</h3>
            <div className="form-group">
              <label>Number of Calls Made</label>
              <input
                type="number"
                min="0"
                placeholder="0"
                value={callsMade}
                onChange={(e) => setCallsMade(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="box">
            <h3>Appointments</h3>
            <div id="appointment-list">
              {appointments.map((appt, index) => (
                <div
                  key={index}
                  className="appointment-item"
                  style={{
                    border: '1px solid #ddd',
                    padding: '15px',
                    margin: '10px 0',
                    borderRadius: '8px'
                  }}
                >
                  <div className="form-group">
                    <label>Client Name</label>
                    <input
                      type="text"
                      placeholder="Client name"
                      value={appt.clientName}
                      onChange={(e) =>
                        handleAppointmentChange(index, 'clientName', e.target.value)
                      }
                    />
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '15px'
                    }}
                  >
                    <div className="form-group">
                      <label>Time</label>
                      <input
                        type="time"
                        value={appt.time}
                        onChange={(e) =>
                          handleAppointmentChange(index, 'time', e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Location</label>
                      <input
                        type="text"
                        placeholder="Meeting location"
                        value={appt.location}
                        onChange={(e) =>
                          handleAppointmentChange(index, 'location', e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Outcome</label>
                    <select
                      value={appt.outcome}
                      onChange={(e) =>
                        handleAppointmentChange(index, 'outcome', e.target.value)
                      }
                    >
                      <option value="">Select outcome...</option>
                      <option value="Met">Met</option>
                      <option value="Rescheduled">Rescheduled</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Notes</label>
                    <textarea
                      rows="2"
                      placeholder="Meeting notes..."
                      value={appt.notes}
                      onChange={(e) =>
                        handleAppointmentChange(index, 'notes', e.target.value)
                      }
                    ></textarea>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-secondary" onClick={addAppointment}>
              + Add Another Appointment
            </button>
          </div>

          <div className="box">
            <h3>Daily Summary</h3>
            <div className="form-group">
              <label>Summary Notes</label>
              <textarea
                rows="3"
                placeholder="Overall summary of the day..."
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="box">
            <button className="btn-primary" onClick={handleSave}>
              Save Daily Entry
            </button>
            <button className="btn-secondary">Save as Draft</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyEntry;
