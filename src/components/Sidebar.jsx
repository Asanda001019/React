import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Clock, 
  Calendar, 
  Phone, 
  Users, 
  FileText, 
  Target, 
  Settings,
  Plus,
  LogOut,
  TrendingUp,
  Activity
} from 'lucide-react';

function Sidebar({ onNavigate }) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const advisor = { fullName: 'Asanda Madondo' };

  const handleLogout = () => {
    console.log('Logout clicked');
    // Clear user session, tokens, etc.
    localStorage.removeItem('userToken'); // Example
    navigate('/login');
  };

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: TrendingUp,
      path: '/dashboard'
    },
    {
      id: 'dailyEntry',
      label: 'Daily Entry',
      icon: Plus,
      path: '/dailyEntry'
    },
    {
      id: 'appointments',
      label: 'Appointments',
      icon: Calendar,
      path: '/appointments'
    },
    {
      id: 'reports',
      label: 'View Reports',
      icon: FileText,
      path: '/reports'
    },
  ];

  const handleNavigation = (path, id) => {
    navigate(path);
    if (onNavigate) {
      onNavigate(path, id);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        {/* Logo/Brand */}
        <div className="logo-brand">
          <div className="logo-icon">
            <Activity className="logo-icon-svg" />
          </div>
          <div>
            <h1 className="logo-title">ActivityHub</h1>
            <p className="logo-subtitle">Financial Advisory</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="nav-container">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <div key={item.id}>
                {isActive ? (
                  <div className="nav-item-active">
                    <IconComponent className="nav-icon" />
                    <span className="nav-text-active">{item.label}</span>
                  </div>
                ) : (
                  <button 
                    onClick={() => handleNavigation(item.path, item.id)}
                    className="nav-button"
                  >
                    <IconComponent className="nav-icon" />
                    <span>{item.label}</span>
                  </button>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* User Profile */}
      <div className="user-profile-container">
        <div className="user-profile">
          <div className="user-info">
            <div className="user-avatar">AM</div>
            <div className="user-details">
              <p className="user-name">{advisor.fullName}</p>
              <p className="user-role">Financial Advisor</p>
            </div>
          </div>
          <br></br>
          <button 
            onClick={handleLogout}
            className="logout-button"
          >
            <LogOut className="logout-icon" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Sidebar