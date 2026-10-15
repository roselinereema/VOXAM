import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


// ==============================
// LANDING
// ==============================

import Landing from "./pages/Landing/Landing";


// ==============================
// AUTHENTICATION
// ==============================

import Login from "./pages/Auth/Login";


// ==============================
// STAFF
// ==============================

import StaffDashboard from "./Staff/Dashboard/StaffDashboard";
import CreateExam from "./Staff/CreateExam/CreateExam";
import UploadQuestion from "./Staff/UploadQuestion/UploadQuestion";
import QuestionProcessing from "./Staff/QuestionProcessing/QuestionProcessing";
import ScheduleExam from "./Staff/ScheduleExam/ScheduleExam";
import Students from "./Staff/Students/Students";
import ReviewAnswers from "./Staff/ReviewAnswers/ReviewAnswers";
import Settings from "./Staff/Settings/Settings";


// ==============================
// STUDENT
// ==============================

import StudentDashboard from "./Student/Dashboard/Dashboard";


function App() {

  return (

    <BrowserRouter>

      <Routes>


        {/* ==============================
            DEFAULT
        ============================== */}

        <Route
          path="/"
          element={
            <Navigate
              to="/landing"
              replace
            />
          }
        />


        {/* ==============================
            LANDING
        ============================== */}

        <Route
          path="/landing"
          element={<Landing />}
        />


        {/* ==============================
            LOGIN
        ============================== */}

        <Route
          path="/login"
          element={<Login />}
        />


        {/* ==============================
            STAFF DASHBOARD
        ============================== */}

        <Route
          path="/staff/dashboard"
          element={<StaffDashboard />}
        />


        {/* ==============================
            CREATE EXAM
        ============================== */}

        <Route
          path="/staff/create-exam"
          element={<CreateExam />}
        />


        {/* ==============================
            UPLOAD QUESTION PAPER
        ============================== */}

        <Route
          path="/staff/upload-question"
          element={<UploadQuestion />}
        />


        {/* ==============================
            QUESTION PROCESSING
        ============================== */}

        <Route
          path="/staff/question-processing"
          element={<QuestionProcessing />}
        />


        {/* ==============================
            SCHEDULE EXAM
        ============================== */}

        <Route
          path="/staff/schedule-exam"
          element={<ScheduleExam />}
        />


        {/* ==============================
            STUDENTS
        ============================== */}

        <Route
          path="/staff/students"
          element={<Students />}
        />


        {/* ==============================
            REVIEW ANSWERS
        ============================== */}

        <Route
          path="/staff/review-answers"
          element={<ReviewAnswers />}
        />


        {/* ==============================
            SETTINGS
        ============================== */}

        <Route
          path="/staff/settings"
          element={<Settings />}
        />


        {/* ==============================
            STUDENT DASHBOARD
        ============================== */}

        <Route
          path="/student/dashboard"
          element={<StudentDashboard />}
        />


        {/* ==============================
            UNKNOWN URL
        ============================== */}

        <Route
          path="*"
          element={
            <Navigate
              to="/landing"
              replace
            />
          }
        />


      </Routes>

    </BrowserRouter>

  );

}


export default App;