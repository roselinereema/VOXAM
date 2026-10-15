import { FaBell, FaUserCircle } from "react-icons/fa";

import "./Topbar.css";

function Topbar() {

  return (
    <header className="topbar">

      <div>
        <h1>Staff Dashboard</h1>

        <p>
          AI Voice Examination System
        </p>
      </div>


      <div className="topbar-right">

        <FaBell className="notification-icon" />

        <div className="staff-profile">

          <FaUserCircle className="profile-icon" />

          <div>
            <strong>Staff</strong>
            <span>Administrator</span>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;