import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaClipboardList,
  FaHistory,
  FaUser,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";

import "./StudentLayout.css";


function StudentLayout({ children }) {

  const navigate = useNavigate();


  const handleLogout = () => {

    navigate("/login");

  };


  return (

    <div className="student-layout">


      {/* ==============================
          STUDENT SIDEBAR
      ============================== */}

      <aside className="student-sidebar">


        {/* LOGO */}

        <div className="student-sidebar-logo">

          <div className="student-logo-icon">
            🎓
          </div>

          <div>

            <h2>
              AI Voice Exam
            </h2>

            <p>
              Student Portal
            </p>

          </div>

        </div>


        {/* MENU */}

        <nav className="student-sidebar-menu">


          <NavLink
            to="/student/dashboard"
            className="student-sidebar-link"
          >

            <FaHome />

            <span>
              Dashboard
            </span>

          </NavLink>


          <NavLink
            to="/student/exams"
            className="student-sidebar-link"
          >

            <FaClipboardList />

            <span>
              Available Exams
            </span>

          </NavLink>


          <NavLink
            to="/student/my-exams"
            className="student-sidebar-link"
          >

            <FaHistory />

            <span>
              My Examinations
            </span>

          </NavLink>


          <NavLink
            to="/student/profile"
            className="student-sidebar-link"
          >

            <FaUser />

            <span>
              Profile
            </span>

          </NavLink>


          <NavLink
            to="/student/settings"
            className="student-sidebar-link"
          >

            <FaCog />

            <span>
              Settings
            </span>

          </NavLink>


        </nav>


        {/* LOGOUT */}

        <button
          className="student-logout-button"
          onClick={handleLogout}
        >

          <FaSignOutAlt />

          <span>
            Logout
          </span>

        </button>


      </aside>



      {/* ==============================
          MAIN SECTION
      ============================== */}

      <div className="student-main-section">


        {/* ==============================
            STUDENT TOPBAR
        ============================== */}

        <header className="student-topbar">


          <div>

            <h1>
              Student Portal
            </h1>

            <p>
              AI Voice Examination System
            </p>

          </div>


          <div className="student-profile">

            <div className="student-profile-icon">
              👨‍🎓
            </div>

            <div>

              <strong>
                Student
              </strong>

              <span>
                Examination Candidate
              </span>

            </div>

          </div>


        </header>



        {/* ==============================
            PAGE CONTENT
        ============================== */}

        <main className="student-page-content">

          {children}

        </main>


      </div>


    </div>

  );

}


export default StudentLayout;