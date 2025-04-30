import React, { useEffect, useState } from "react";
import AvatarImg from "../assets/images/avatar/01.jpg";

const countries = ["United States", "Canada", "United Kingdom", "India", "Germany", "Australia"];
const languages = ["English", "Spanish", "French", "German", "Hindi", "Mandarin"];

const ProfileSettings = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    gender: "",
    country: "",
    language: "",
    timezone: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setIsEditing(false);
  };

  return (
    <div className="container mb-5 mt-5">
      <div className="card shadow p-4">
        <div className="d-flex align-items-center mb-4">
          <img className="rounded-circle me-3" src={AvatarImg} alt="avatar" />
          <div>
            <h5 className="mb-0">{user.username || "Guest"}</h5>
            <p className="text-muted">{user.email || "No Email Available"}</p>
          </div>
          <button className="btn btn-edit ms-auto" onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Cancel" : "Edit"}
          </button>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label className="form-label">User Name</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={user.username}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Gender</label>
            <select
              className="form-select"
              name="gender"
              value={user.gender}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col-md-6 mt-3">
            <label className="form-label">Country</label>
            <select
              className="form-select"
              name="country"
              value={user.country}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option value="">Select Country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          {/* <div className="col-md-6 mt-3">
            <label className="form-label">Language</label>
            <select
              className="form-select"
              name="language"
              value={user.language}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option value="">Select Language</option>
              {languages.map((language, index) => (
                <option key={index} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div> */}
          {/* <div className="col-md-6 mt-3">
            <label className="form-label">Time Zone</label>
            <input
              type="text"
              className="form-control"
              name="timezone"
              value={user.timezone}
              onChange={handleChange}
              readOnly={!isEditing}
              placeholder="Your Time Zone"
            />
          </div> */}
        </div>
        <div className="mt-4">
          <h6>My Email Address</h6>
          <p className="text-muted">
            {user.email || "No Email Available"}{" "}
            <span className="ms-2 small">1 month ago</span>
          </p>
          <button className="btn btn-outline-primary">+ Add Email Address</button>
        </div>
        {isEditing && (
          <div className="mt-4 text-end">
            <button className="btn btn-success" onClick={handleSave}>
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSettings;
