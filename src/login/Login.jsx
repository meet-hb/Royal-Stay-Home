import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
import "./login.css";
const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setError('');

    // Retrieve the user data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (!userData) {
      setError('Please register first.');
      setLoading(false);
      return;
    }

    if (
      formData.username === userData.username &&
      formData.password === userData.password
    ) {
      localStorage.setItem('isLoggedIn', 'true');

      const LoginuserData = {
        username: formData.username,     
        password: formData.password
      };
  
      localStorage.setItem('LoginuserData', JSON.stringify(LoginuserData));
    
      navigate('/');
      window.location.reload();
    } else {
      setError('Invalid credentials, please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <form method="post" id="Login" onSubmit={handleSubmit}>
        {/* Left section */}
        <div className="left">
          <div>
            <p className="color-text">Hello, Welcome!</p>
            <a className="color-text" href="/Registration">
              Don't have an account?
            </a>
          </div>
        </div>

        {/* Right section */}
        <div className="right">
          <div>
            <h1>Login</h1>

            <div className="input-wrapper">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
              <span className="material-symbols-outlined person">
                <FaUser />
              </span>
            </div>

            <div className="input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <span
                className="material-symbols-outlined lock"
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label>
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />{" "}
                Remember Me
              </label>
            </div>

            <a href="/forgot-password">Forgot Password?</a>

            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
