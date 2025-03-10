import React, { useState, useEffect } from "react";
import "../styles/Profile.css";

const Profile = () => {
  // Fetch user data from localStorage or set default values
  const getUserData = () => {
    const savedUser = localStorage.getItem("userProfile");
    return savedUser ? JSON.parse(savedUser) : {
      name: "",
      email: "",
      age: "",
      investmentType: "",
      riskAppetite: "",
      timeHorizon: "",
    };
  };

  const [user, setUser] = useState(getUserData());
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  useEffect(() => {
    setUser(getUserData()); // Ensure data updates when component mounts
  }, []);

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser(editedUser);
    localStorage.setItem("userProfile", JSON.stringify(editedUser)); // Save updated profile
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <h1>Profile Details</h1>
      <div className="profile-card">
        {isEditing ? (
          <>
            <input type="text" name="name" value={editedUser.name} onChange={handleChange} />
            <input type="email" name="email" value={editedUser.email} onChange={handleChange} />
            <input type="number" name="age" value={editedUser.age} onChange={handleChange} />
            <input type="text" name="investmentType" value={editedUser.investmentType} onChange={handleChange} />
            <input type="text" name="riskAppetite" value={editedUser.riskAppetite} onChange={handleChange} />
            <input type="text" name="timeHorizon" value={editedUser.timeHorizon} onChange={handleChange} />
            <button onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            <p><strong>Name:</strong> {user.name || "N/A"}</p>
            <p><strong>Email:</strong> {user.email || "N/A"}</p>
            <p><strong>Age:</strong> {user.age || "N/A"}</p>
            <p><strong>Investment Type:</strong> {user.investmentType || "N/A"}</p>
            <p><strong>Risk Appetite:</strong> {user.riskAppetite || "N/A"}</p>
            <p><strong>Time Horizon:</strong> {user.timeHorizon || "N/A"}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
