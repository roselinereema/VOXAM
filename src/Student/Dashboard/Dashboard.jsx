import { useNavigate } from "react-router-dom";
import StudentLayout from "../../components/StudentLayout/StudentLayout";
import "./Dashboard.css";

function Dashboard() {

  const navigate = useNavigate();

  return (

    <StudentLayout>


      {/* ==============================
          PAGE HEADER
      ============================== */}

      <div className="student-dashboard">

        <div className="student-dashboard-header">

          <div>

            <h2>
              Welcome, Student
            </h2>

            <p>
              Access your examinations and manage your exam activities.
            </p>

          </div>

        </div>


        {/* ==============================
            SUMMARY CARDS
        ============================== */}

        <div className="student-dashboard-cards">


          <div className="student-dashboard-card">

            <div className="student-card-icon">
              📝
            </div>

            <div>

              <span>
                Available Exams
              </span>

              <strong>
                2
              </strong>

            </div>

          </div>


          <div className="student-dashboard-card">

            <div className="student-card-icon">
              📅
            </div>

            <div>

              <span>
                Upcoming Exams
              </span>

              <strong>
                1
              </strong>

            </div>

          </div>


          <div className="student-dashboard-card">

            <div className="student-card-icon">
              ✅
            </div>

            <div>

              <span>
                Completed Exams
              </span>

              <strong>
                0
              </strong>

            </div>

          </div>


        </div>


        {/* ==============================
            AVAILABLE EXAM
        ============================== */}

        <div className="available-exam-section">


          <div className="section-header">

            <div>

              <h3>
                Available Examinations
              </h3>

              <p>
                Examinations currently available for you.
              </p>

            </div>


            <button
              className="view-all-button"
              onClick={() => navigate("/student/exams")}
            >
              View All
            </button>

          </div>


          {/* EXAM CARD */}

          <div className="student-exam-card">


            <div className="exam-card-icon">
              📚
            </div>


            <div className="exam-card-details">

              <h3>
                Data Structures - Internal Exam
              </h3>

              <p>
                Subject: Data Structures
              </p>


              <div className="exam-card-info">

                <span>
                  ⏱️ 60 Minutes
                </span>

                <span>
                  📝 20 Questions
                </span>

                <span>
                  🎯 100 Marks
                </span>

              </div>

            </div>


            <button
              className="start-exam-button"
              onClick={() => navigate("/student/exams")}
            >
              View Exam
            </button>


          </div>


        </div>


        {/* ==============================
            VOICE FEATURES
        ============================== */}

        <div className="student-features-section">


          <div className="section-header">

            <div>

              <h3>
                Voice Examination Features
              </h3>

              <p>
                Features available during your examination.
              </p>

            </div>

          </div>


          <div className="student-feature-grid">


            {/* QUESTION READ ALOUD */}

            <div className="student-feature-card">

              <div className="student-feature-icon">
                🔊
              </div>

              <h4>
                Question Read Aloud
              </h4>

              <p>
                Listen to examination questions using
                text-to-speech.
              </p>

            </div>


            {/* VOICE ANSWER */}

            <div className="student-feature-card">

              <div className="student-feature-icon">
                🎤
              </div>

              <h4>
                Voice Answer
              </h4>

              <p>
                Answer examination questions using your voice.
              </p>

            </div>


            {/* VOICE EDITING */}

            <div className="student-feature-card">

              <div className="student-feature-icon">
                ✏️
              </div>

              <h4>
                Voice-Based Editing
              </h4>

              <p>
                Edit your converted answer using voice commands.
              </p>

            </div>


            {/* READ ANSWER BACK */}

            <div className="student-feature-card">

              <div className="student-feature-icon">
                🔊
              </div>

              <h4>
                Read Answer Back
              </h4>

              <p>
                Listen to your final answer before submitting.
              </p>

            </div>


          </div>

        </div>


        {/* ==============================
            INFORMATION BOX
        ============================== */}

        <div className="student-dashboard-info">


          <div className="student-info-icon">
            ℹ️
          </div>


          <div>

            <strong>
              How your voice examination works
            </strong>

            <p>
              Listen to the question, answer using your voice,
              review the converted text, edit it using voice
              commands, and listen to your answer before final submission.
            </p>

          </div>


        </div>


      </div>


    </StudentLayout>

  );

}


export default Dashboard;