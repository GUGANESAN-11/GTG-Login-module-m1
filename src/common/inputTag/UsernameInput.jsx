import React from 'react';
import "./CommonInput.css";

const UsernameInput = () => {
  return (
    <div className="input-box">
      <label className='username-label'>Username</label>
      <input
        type="text"
        placeholder="Please enter your username"
        required
      />
    </div>
  );
};

export default UsernameInput;
