import { NavLink, useNavigate } from "react-router-dom";

import {
  FaHome,
  FaFileAlt,
  FaUpload,
  FaQuestionCircle,
  FaCalendarAlt,
  FaUsers,
  FaClipboardCheck,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";

import "./Sidebar.css";


function Sidebar() {

  const navigate = useNavigate();


  const handleLogout = () => {
    navigate("/login");
  };


  return (

    <aside className="sidebar">

      {/* LOGO */}

      <div className="sidebar-logo">

        <div className="logo-icon">
          🎓
        </div>

        <div>

          <h2>
            AI Voice Exam
          </h2>

          <p>
            Staff Management
          </p>

        </div>

      </div>


      {/* MENU */}

      <nav className="sidebar-menu">

        <NavLink
          to="/staff/dashboard"
          className="sidebar-link"
        >
          <FaHome />
          <span>
            Dashboard
          </span>
        </NavLink>


        <NavLink
          to="/staff/create-exam"
          className="sidebar-link"
        >
          <FaFileAlt />
          <span>
            Create Exam
          </span>
        </NavLink>


        <NavLink
          to="/staff/upload-question"
          className="sidebar-link"
        >
          <FaUpload />
          <span>
            Upload Questions
          </span>
        </NavLink>


        <NavLink
          to="/staff/question-processing"
          className="sidebar-link"
        >
          <FaQuestionCircle />
          <span>
            Question Processing
          </span>
        </NavLink>


        <NavLink
          to="/staff/schedule-exam"
          className="sidebar-link"
        >
          <FaCalendarAlt />
          <span>
            Schedule Exam
          </span>
        </NavLink>


        <NavLink
          to="/staff/students"
          className="sidebar-link"
        >
          <FaUsers />
          <span>
            Students
          </span>
        </NavLink>


        <NavLink
          to="/staff/review-answers"
          className="sidebar-link"
        >
          <FaClipboardCheck />
          <span>
            Review Answers
          </span>
        </NavLink>


        <NavLink
          to="/staff/settings"
          className="sidebar-link"
        >
          <FaCog />
          <span>
            Settings
          </span>
        </NavLink>

      </nav>


      {/* LOGOUT */}

      <button
        className="logout-button"
        onClick={handleLogout}
      >

        <FaSignOutAlt />

        <span>
          Logout
        </span>

      </button>

    </aside>

  );
}


export default Sidebar;