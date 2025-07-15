import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/ResetPassword";
import Landing from './components/pages/Landing';


function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/reset" element={<Reset/>} />
      </Routes>
    </Router>
  ); 
};
export default App