import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initialEmployees, type Employee } from '../data/employees';

function EmployeeDetails() {
  const navigate = useNavigate();
  const [employees] = useState<Employee[]>(initialEmployees);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  // Get current username from localStorage
  const username = localStorage.getItem('currentUser') || 'Trainee Admin';

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  // Filter employees based on search input
  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      {/* Top Navigation Bar */}
      <header className="navbar">
        <div className="navbar-brand">
          <span className="brand-icon">🏢</span>
          <div>
            <h1>Employee Directory</h1>
            <small>Trainee Management System</small>
          </div>
        </div>

        <div className="navbar-user">
          <span className="user-badge">👤 {username}</span>
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="content">
        {/* Statistics Cards */}
        <section className="stats-grid">
          <div className="stat-card">
            <h3>Total Employees</h3>
            <p className="stat-number">{employees.length}</p>
          </div>
          <div className="stat-card active-card">
            <h3>Active</h3>
            <p className="stat-number">
              {employees.filter((e) => e.status === 'Active').length}
            </p>
          </div>
          <div className="stat-card training-card">
            <h3>In Training</h3>
            <p className="stat-number">
              {employees.filter((e) => e.status === 'In Training').length}
            </p>
          </div>
        </section>

        {/* Search & Actions Bar */}
        <div className="table-toolbar">
          <input
            type="text"
            className="search-input"
            placeholder="🔍 Search by name, role, or department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="count-info">
            Showing {filteredEmployees.length} of {employees.length} records
          </span>
        </div>

        {/* Employees Table */}
        <div className="table-wrapper">
          <table className="employee-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Employee Name</th>
                <th>Role</th>
                <th>Department</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((emp) => (
                  <tr key={emp.id}>
                    <td>
                      <strong>#{emp.id}</strong>
                    </td>
                    <td>
                      <div className="name-cell">
                        <span className="avatar-circle">
                          {emp.name.charAt(0)}
                        </span>
                        <span>{emp.name}</span>
                      </div>
                    </td>
                    <td>{emp.role}</td>
                    <td>{emp.department}</td>
                    <td>{emp.email}</td>
                    <td>
                      <span
                        className={`badge ${emp.status.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {emp.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn-view"
                        onClick={() => setSelectedEmployee(emp)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="no-data">
                    No matching employees found for "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Employee Details Modal */}
      {selectedEmployee && (
        <div className="modal-backdrop" onClick={() => setSelectedEmployee(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Employee Details</h2>
              <button
                className="btn-close"
                onClick={() => setSelectedEmployee(null)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-avatar">
                {selectedEmployee.name.charAt(0)}
              </div>
              <h3>{selectedEmployee.name}</h3>
              <p className="modal-subtitle">{selectedEmployee.role}</p>

              <div className="detail-grid">
                <div className="detail-item">
                  <label>Employee ID</label>
                  <span>#{selectedEmployee.id}</span>
                </div>
                <div className="detail-item">
                  <label>Department</label>
                  <span>{selectedEmployee.department}</span>
                </div>
                <div className="detail-item">
                  <label>Email Address</label>
                  <span>{selectedEmployee.email}</span>
                </div>
                <div className="detail-item">
                  <label>Contact Number</label>
                  <span>{selectedEmployee.phone}</span>
                </div>
                <div className="detail-item">
                  <label>Date of Joining</label>
                  <span>{selectedEmployee.joinDate}</span>
                </div>
                <div className="detail-item">
                  <label>Current Status</label>
                  <span
                    className={`badge ${selectedEmployee.status.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {selectedEmployee.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                className="btn-secondary"
                onClick={() => setSelectedEmployee(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeDetails;
