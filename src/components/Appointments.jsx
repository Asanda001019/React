import React, { useState } from 'react';

function Appointments() {
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

  // Handle input change for new or edited appointment
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

  // Save new appointment
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

  // Edit existing appointment
  const handleEdit = (id) => {
    setEditingId(id);
  };

  // Save edited appointment
  const handleSaveEdit = () => {
    setEditingId(null);
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingId(null);
  };

  // Remove appointment
  const handleDelete = (id) => {
    setAppointments(appointments.filter((appt) => appt.id !== id));
  };

  return (
    <div id="appointments" className="wireframe-container">
      <div className="wireframe">
        <h2>4. Appointments Management</h2>

        <div className="wireframe-content">
          <div className="box">
            <h3>Upcoming Appointments</h3>

            <table className="data-table">
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
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            name="time"
                            value={appt.time}
                            onChange={(e) => handleChange(e, appt.id)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="client"
                            value={appt.client}
                            onChange={(e) => handleChange(e, appt.id)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="location"
                            value={appt.location}
                            onChange={(e) => handleChange(e, appt.id)}
                          />
                        </td>
                        <td>
                          <select
                            name="status"
                            value={appt.status}
                            onChange={(e) => handleChange(e, appt.id)}
                          >
                            <option>Confirmed</option>
                            <option>Pending</option>
                            <option>Cancelled</option>
                          </select>
                        </td>
                        <td>
                          <button onClick={handleSaveEdit} className="btn-primary">Save</button>
                          <button onClick={handleCancelEdit} className="btn-secondary">Cancel</button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{appt.date}</td>
                        <td>{appt.time}</td>
                        <td>{appt.client}</td>
                        <td>{appt.location}</td>
                        <td>{appt.status}</td>
                        <td>
                          <button onClick={() => handleEdit(appt.id)} className="btn-secondary">Edit</button>
                          <button onClick={() => handleDelete(appt.id)} className="btn-secondary">Delete</button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="box">
            <h3>Schedule New Appointment</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', marginBottom: '10px' }}>
              <input
                type="date"
                name="date"
                value={newAppointment.date}
                onChange={handleChange}
              />
              <input
                type="time"
                name="time"
                value={newAppointment.time}
                onChange={handleChange}
              />
              <input
                type="text"
                name="client"
                placeholder="Client Name"
                value={newAppointment.client}
                onChange={handleChange}
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={newAppointment.location}
                onChange={handleChange}
              />
              <button onClick={handleAddAppointment} className="btn-primary">
                Add Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointments;
