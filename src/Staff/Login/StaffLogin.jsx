import "./StaffLogin.css";
import { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

function StaffLogin() {

  const [showPassword, setShowPassword] = useState(false);

  return (

    <div className="login-page">

      <div className="login-card">

        <h1>AI Voice Examination System</h1>

        <p className="subtitle">
          Staff Portal
        </p>

        <div className="input-box">

          <FaEnvelope className="icon"/>

          <input
            type="email"
            placeholder="Enter Email"
          />

        </div>

        <div className="input-box">

          <FaLock className="icon"/>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
          />

          <span
            className="eye"
            onClick={() => setShowPassword(!showPassword)}
          >

            {showPassword ? <FaEyeSlash/> : <FaEye/>}

          </span>

        </div>

        <div className="options">

          <label>

            <input type="checkbox"/>

            Remember Me

          </label>

          <a href="#">Forgot Password?</a>

        </div>

        <button>

          Login

        </button>

      </div>

    </div>

  );

}

export default StaffLogin;