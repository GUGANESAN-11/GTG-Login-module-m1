import React, { useState } from 'react';
import "./CommonInput.css";
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input-box">
      <label className='password-label'>Password</label>
      <input
        id="encrypt"
        type={showPassword ? 'text' : 'password'}
        placeholder="Please enter your password"
        required
      />
      {showPassword ? (
        <BsEyeSlash className="icon" onClick={togglePasswordVisibility} />
      ) : (
        <BsEye className="icon" onClick={togglePasswordVisibility} />
      )}
    </div>
  );
};

export default PasswordInput;
