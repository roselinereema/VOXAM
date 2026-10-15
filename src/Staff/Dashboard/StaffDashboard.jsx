import Layout from "../../components/Layout/Layout";

import "./StaffDashboard.css";

function StaffDashboard() {

  return (

    <Layout>

      <div className="staff-dashboard">

        <h2>Welcome to Staff Portal</h2>

        <p>
          Manage examinations, students, questions and student answer submissions from this portal.
          
        </p>


        <div className="dashboard-cards">

          <div className="dashboard-card">

            <h3>Total Exams</h3>

            <strong>0</strong>

          </div>


          <div className="dashboard-card">

            <h3>Active Exams</h3>

            <strong>0</strong>

          </div>


          <div className="dashboard-card">

            <h3>Total Students</h3>

            <strong>0</strong>

          </div>

        </div>

      </div>

    </Layout>
  );
}

export default StaffDashboard;