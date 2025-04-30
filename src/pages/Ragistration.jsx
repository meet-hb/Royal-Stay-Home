import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaEye, FaEyeSlash } from "react-icons/fa";
import "./register.css";
import { useNavigate } from "react-router-dom";
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phoneNumber") {

      if (/^\d{0,10}$/.test(value)) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const submitForm = (e) => {
    e.preventDefault();

    // Basic form validation
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // Save data in localStorage
    const userData = {
      fullName: formData.fullName,
      username: formData.username,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      password: formData.password,
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    // Reset form data and error message after successful submission
    setFormData({
      fullName: "",
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });
    setErrorMessage("");
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <form method="post" id="Register" onSubmit={submitForm}>
        <div className="left">
          <div>
            <p className="color-text">Welcome!</p>
            <a className="color-text" href="/login">
              I Already Have an Account
            </a>
          </div>
        </div>

        <div className="right">
          <div>
            <h1>Register</h1>

            {errorMessage && <div className="error">{errorMessage}</div>}

            <div className="input-wrapper">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
              <span className="icon">
                <FaUser />
              </span>
            </div>

            <div className="input-wrapper">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
              <span className="icon">
                <FaUser />
              </span>
            </div>

            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <span className="icon">
                <FaEnvelope />
              </span>
            </div>

            <div className="input-wrapper">
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <span className="icon">
                <FaPhone />
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
              <span className="icon" onClick={togglePassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="input-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <span className="icon" onClick={toggleConfirmPassword}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button type="submit">Register</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
