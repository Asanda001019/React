import React, { useState } from 'react';

function Profile() {
  const [profile, setProfile] = useState({
    fullName: 'John Advisor',
    email: 'john.advisor@oldmutual.com',
    phone: '+27 11 123 4567',
    team: 'Johannesburg North'
  });

  const [notifications, setNotifications] = useState({
    dailyReminders: true,
    appointmentNotifications: true,
    weeklySummary: false,
    smsNotifications: false
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications({ ...notifications, [name]: checked });
  };

  const handleSave = () => {
    alert('Profile saved!');
    // Here you'd typically send data to your API
  };

  const handleCancel = () => {
    window.location.reload(); // Resets the form (simple solution)
  };

  return (
    <div id="profile" className="wireframe-container">
      <div className="wireframe">
        <h2>6. Profile & Settings</h2>

        <div className="wireframe-content">
          <div className="box">
            <h3>User Profile</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={profile.fullName}
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="form-group">
                  <label>Team</label>
                  <select
                    name="team"
                    value={profile.team}
                    onChange={handleProfileChange}
                  >
                    <option>Johannesburg North</option>
                    <option>Cape Town Central</option>
                    <option>Durban South</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="form-group">
                  <label>Role</label>
                  <input type="text" value="Financial Advisor" disabled />
                </div>
                <div className="form-group">
                  <label>Manager</label>
                  <input type="text" value="Sarah Manager" disabled />
                </div>
                <div className="form-group">
                  <label>Start Date</label>
                  <input type="date" value="2023-01-15" disabled />
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <h3>Notification Settings</h3>

            <div style={{ display: 'grid', gap: '15px' }}>
              <label>
                <input
                  type="checkbox"
                  name="dailyReminders"
                  checked={notifications.dailyReminders}
                  onChange={handleNotificationChange}
                />
                Daily entry reminders
              </label>

              <label>
                <input
                  type="checkbox"
                  name="appointmentNotifications"
                  checked={notifications.appointmentNotifications}
                  onChange={handleNotificationChange}
                />
                Appointment notifications
              </label>

              <label>
                <input
                  type="checkbox"
                  name="weeklySummary"
                  checked={notifications.weeklySummary}
                  onChange={handleNotificationChange}
                />
                Weekly performance summary
              </label>

              <label>
                <input
                  type="checkbox"
                  name="smsNotifications"
                  checked={notifications.smsNotifications}
                  onChange={handleNotificationChange}
                />
                SMS notifications
              </label>
            </div>
          </div>

          <div className="box">
            <h3>Security</h3>
            <button className="btn-secondary">Change Password</button>
            <button className="btn-secondary">Enable 2FA</button>
            <button className="btn-secondary">View Login History</button>
          </div>

          <div className="box">
            <button className="btn-primary" onClick={handleSave}>
              Save Changes
            </button>
            <button className="btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
