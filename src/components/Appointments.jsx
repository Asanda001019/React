import React, { useState } from 'react';
import { 
  Bell,
  User,
  ChevronLeft,
  Plus,
  CheckCircle
} from 'lucide-react';
import Sidebar from './Sidebar';
import './Appointments.css';

function Appointments() {
  // Mock navigation functions
  const navigate = (path, pageId) => {
    console.log(`Navigate to: ${path}, Page ID: ${pageId}`);
  };

  const goToPage = (path) => navigate(path);
  
  // Mock advisor data
  const advisor = { fullName: 'Asanda Madondo', notificationsCount: 3 };

  // Appointments state
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: '2024-07-20',
      time: '10:00',
      client: 'John Smith',
      location: 'Office',
      status: 'Confirmed',
    },
    {
      id: 2,
      date: '2024-07-21',
      time: '14:00',
      client: 'Sarah Johnson',
      location: 'Client Office',
      status: 'Pending',
    },
  ]);

  const [newAppointment, setNewAppointment] = useState({
    date: '',
    time: '',
    client: '',
    location: '',
    status: 'Pending',
  });

  const [editingId, setEditingId] = useState(null);

  const handleChange = (e, id = null) => {
    const { name, value } = e.target;
    if (id === null) {
      setNewAppointment({ ...newAppointment, [name]: value });
    } else {
      setAppointments((prev) =>
        prev.map((appt) =>
          appt.id === id ? { ...appt, [name]: value } : appt
        )
      );
    }
  };

  const handleAddAppointment = () => {
    if (!newAppointment.date || !newAppointment.time || !newAppointment.client) {
      alert('Please fill in Date, Time, and Client.');
      return;
    }

    setAppointments([
      ...appointments,
      {
        ...newAppointment,
        id: appointments.length + 1,
      },
    ]);

    setNewAppointment({
      date: '',
      time: '',
      client: '',
      location: '',
      status: 'Pending',
    });
  };

  const handleEdit = (id) => setEditingId(id);
  const handleSaveEdit = () => setEditingId(null);
  const handleCancelEdit = () => setEditingId(null);
  const handleDelete = (id) => setAppointments(appointments.filter((appt) => appt.id !== id));

  return (
    <div className="appointments-container">
      {/* Shared Sidebar */}
      <Sidebar currentPage="appointments" onNavigate={navigate} />

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
            <h1 className="page-title">Appointments</h1>
            <p className="page-subtitle">Manage your upcoming client meetings and schedule new appointments</p>
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

        {/* Appointments Content */}
        <div className="appointments-content">
          {/* Upcoming Appointments */}
          <div className="appointments-section">
            <div className="section-header">
              <h2 className="section-title">Upcoming Appointments</h2>
              <button className="new-appointment-button">
                <Plus className="add-icon" />
                <span>New Appointment</span>
              </button>
            </div>

            <div className="table-container">
              <table className="appointments-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Client</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appt) => (
                    <tr key={appt.id}>
                      {editingId === appt.id ? (
                        <>
                          <td>
                            <input
                              type="date"
                              name="date"
                              value={appt.date}
                              onChange={(e) => handleChange(e, appt.id)}
                              className="edit-input"
                            />
                          </td>
                          <td>
                            <input
                              type="time"
                              name="time"
                              value={appt.time}
                              onChange={(e) => handleChange(e, appt.id)}
                              className="edit-input"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="client"
                              value={appt.client}
                              onChange={(e) => handleChange(e, appt.id)}
                              className="edit-input"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="location"
                              value={appt.location}
                              onChange={(e) => handleChange(e, appt.id)}
                              className="edit-input"
                            />
                          </td>
                          <td>
                            <select
                              name="status"
                              value={appt.status}
                              onChange={(e) => handleChange(e, appt.id)}
                              className="edit-select"
                            >
                              <option>Confirmed</option>
                              <option>Pending</option>
                              <option>Cancelled</option>
                            </select>
                          </td>
                          <td className="action-buttons">
                            <button 
                              onClick={handleSaveEdit}
                              className="save-button"
                            >
                              Save
                            </button>
                            <button 
                              onClick={handleCancelEdit}
                              className="cancel-button"
                            >
                              Cancel
                            </button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{appt.date}</td>
                          <td>{appt.time}</td>
                          <td>{appt.client}</td>
                          <td>{appt.location}</td>
                          <td>
                            <span className={`status-badge ${appt.status.toLowerCase()}`}>
                              {appt.status === 'Confirmed' && <CheckCircle className="status-icon" />}
                              {appt.status}
                            </span>
                          </td>
                          <td className="action-buttons">
                            <button 
                              onClick={() => handleEdit(appt.id)}
                              className="edit-button"
                            >
                              Edit
                            </button>
                            <button 
                              onClick={() => handleDelete(appt.id)}
                              className="delete-button"
                            >
                              Delete
                            </button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Schedule New Appointment */}
          <div className="new-appointment-section">
            <h2 className="section-title">Schedule New Appointment</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  value={newAppointment.date}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Time</label>
                <input
                  type="time"
                  name="time"
                  value={newAppointment.time}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Client</label>
                <input
                  type="text"
                  name="client"
                  placeholder="Client Name"
                  value={newAppointment.client}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={newAppointment.location}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>
            <button 
              onClick={handleAddAppointment}
              className="add-appointment-button"
            >
              Add Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointments;