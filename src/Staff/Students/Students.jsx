import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "./Students.css";

function Students() {

  const [searchTerm, setSearchTerm] = useState("");

  const students = [
    {
      id: "S001",
      name: "Arun Kumar",
      email: "arun.kumar@example.com",
      department: "CSE",
      year: "3rd Year",
      status: "Active"
    },
    {
      id: "S002",
      name: "Priya Sharma",
      email: "priya.sharma@example.com",
      department: "CSE",
      year: "3rd Year",
      status: "Active"
    },
    {
      id: "S003",
      name: "Rahul Raj",
      email: "rahul.raj@example.com",
      department: "IT",
      year: "4th Year",
      status: "Active"
    },
    {
      id: "S004",
      name: "Ananya Devi",
      email: "ananya.devi@example.com",
      department: "ECE",
      year: "3rd Year",
      status: "Active"
    },
    {
      id: "S005",
      name: "Vishal Kumar",
      email: "vishal.kumar@example.com",
      department: "CSE",
      year: "4th Year",
      status: "Inactive"
    }
  ];


  const filteredStudents = students.filter((student) => {

    const search = searchTerm.toLowerCase();

    return (
      student.name.toLowerCase().includes(search) ||
      student.email.toLowerCase().includes(search) ||
      student.id.toLowerCase().includes(search) ||
      student.department.toLowerCase().includes(search)
    );

  });


  return (

    <Layout>

      <div className="students-page">

        {/* ==============================
            PAGE HEADER
        ============================== */}

        <div className="students-header">

          <div>

            <h2>
              Students
            </h2>

            <p>
              View and manage students registered in the examination system.
            </p>

          </div>

        </div>


        {/* ==============================
            SUMMARY CARDS
        ============================== */}

        <div className="student-summary-cards">

          <div className="student-summary-card">

            <div className="student-summary-icon">
              👥
            </div>

            <div>

              <span>
                Total Students
              </span>

              <strong>
                5
              </strong>

            </div>

          </div>


          <div className="student-summary-card">

            <div className="student-summary-icon">
              ✓
            </div>

            <div>

              <span>
                Active Students
              </span>

              <strong>
                4
              </strong>

            </div>

          </div>


          <div className="student-summary-card">

            <div className="student-summary-icon">
              🎓
            </div>

            <div>

              <span>
                CSE Students
              </span>

              <strong>
                3
              </strong>

            </div>

          </div>

        </div>


        {/* ==============================
            STUDENT LIST
        ============================== */}

        <div className="students-card">

          <div className="students-card-header">

            <div>

              <h3>
                Registered Students
              </h3>

              <p>
                Students currently registered in the system.
              </p>

            </div>


            {/* SEARCH */}

            <div className="student-search">

              <span>
                🔍
              </span>

              <input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

            </div>

          </div>


          {/* TABLE */}

          <div className="students-table-container">

            <table className="students-table">

              <thead>

                <tr>

                  <th>
                    Student ID
                  </th>

                  <th>
                    Student Name
                  </th>

                  <th>
                    Email
                  </th>

                  <th>
                    Department
                  </th>

                  <th>
                    Year
                  </th>

                  <th>
                    Status
                  </th>

                </tr>

              </thead>


              <tbody>

                {filteredStudents.length > 0 ? (

                  filteredStudents.map((student) => (

                    <tr key={student.id}>

                      <td>
                        <strong>
                          {student.id}
                        </strong>
                      </td>

                      <td>
                        {student.name}
                      </td>

                      <td>
                        {student.email}
                      </td>

                      <td>
                        {student.department}
                      </td>

                      <td>
                        {student.year}
                      </td>

                      <td>

                        <span
                          className={
                            student.status === "Active"
                              ? "student-status active"
                              : "student-status inactive"
                          }
                        >
                          {student.status}
                        </span>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="6"
                      className="no-students"
                    >
                      No students found.
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>


        {/* ==============================
            INFORMATION
        ============================== */}

        <div className="students-info">

          <span>
            ℹ️
          </span>

          <div>

            <strong>
              Student data
            </strong>

            <p>
              Student information displayed here will be loaded
              from the database once backend authentication and
              registration are implemented.
            </p>

          </div>

        </div>

      </div>

    </Layout>

  );
}


export default Students;