import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/ResetPassword";
import Landing from './components/pages/Landing';

import Dashboard from './components/Dashboard';
import DailyEntry from './components/DailyEntry';
import Appointments from './components/Appointments';
import Reports from './components/Reports';
import Profile from './components/Profile';
import Contracts from './components/Contracts';
import ManagerDashboard from './components/ManagerDashboard';
import TeamReports from './components/TeamReports';
import AdvisorDetails from './components/AdvisorDetails';

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/reset" element={<Reset/>} />

        <Route path='/dashboard' element= {<Dashboard />} />
        <Route path='/dailyEntry' element= {<DailyEntry/>}  />
        <Route path='/appointments' element= {<Appointments/>} />
        <Route path='/reports' element= {<Reports/>} />
        <Route path='/profile' element= {<Profile/>} />
        <Route path='/contracts' element= {<Contracts/>} />
        <Route path='/managerDashboard' element= {<ManagerDashboard/>} />
        <Route path='/teamReports' element= {<TeamReports/>} />
        <Route path='/advisorDetails' element= {<AdvisorDetails/>} />

         </Routes>
    </Router>
  ); 
};
export default App