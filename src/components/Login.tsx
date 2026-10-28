import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  // Simple form submit handler
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!username.trim() || !password.trim()) {
      setErrorMessage('Please enter both username and password.');
      return;
    }

    // Demo check: allow 'admin' / '123456' or any credentials for practice
    if (username === 'admin' && password === '123456') {
      localStorage.setItem('currentUser', username);
      navigate('/employees');
    } else {
      setErrorMessage('Invalid credentials! (Hint: admin / 123456)');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="avatar-icon">👨‍💼</div>
          <h2>Trainee Portal</h2>
          <p>Please login to view employee details</p>
        </div>

        {errorMessage && <div className="error-alert">{errorMessage}</div>}

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter username (admin)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter password (123456)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn-primary">
            Sign In
          </button>
        </form>

        <div className="demo-credentials">
          <small>
            🔑 <strong>Demo Credentials:</strong>
            <br />
            Username: <code>admin</code> | Password: <code>123456</code>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Login;
