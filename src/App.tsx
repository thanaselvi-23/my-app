import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import EmployeeDetails from './components/EmployeeDetails';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for Login Page */}
        <Route path="/" element={<Login />} />

        {/* Route for Employee Details Page */}
        <Route path="/employees" element={<EmployeeDetails />} />

        {/* Redirect unknown routes back to Login */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
