import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const [role, setRole] = useState("student");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);


  const handleLogin = (e) => {

    e.preventDefault();

    /*
      TEMPORARY DEMO LOGIN

      Backend authentication will be connected later.
    */

    if (role === "staff") {

      navigate("/staff/dashboard");

    } else {

      navigate("/student/dashboard");

    }

  };


  return (

    <div className="login-page">


      {/* ================= LEFT SIDE ================= */}

      <div className="login-left">

        <div className="login-brand">

          <div className="login-logo">
            🔊
          </div>

          <div>

            <h1>
              AI Voice Exam
            </h1>

            <p>
              Accessible AI-Powered Examination
            </p>

          </div>

        </div>


        <div className="login-introduction">

          <h2>
            Smarter.
            <br />
            Accessible.
            <br />
            Voice Enabled.
          </h2>


          <p>
            Take examinations using voice technology,
            speech-to-text and voice-based answer editing
            for accessible digital assessment.
          </p>


          <div className="login-features">


            <div>

              <span>
                🔊
              </span>

              <p>
                Listen to Questions
              </p>

            </div>


            <div>

              <span>
                🎤
              </span>

              <p>
                Speak Your Answers
              </p>

            </div>


            <div>

              <span>
                ✏️
              </span>

              <p>
                Edit Answers Using Voice
              </p>

            </div>


          </div>

        </div>

      </div>



      {/* ================= RIGHT SIDE ================= */}

      <div className="login-right">

        <div className="login-card">


          <div className="login-card-header">

            <h2>
              Welcome Back
            </h2>

            <p>
              Login to continue to your portal
            </p>

          </div>



          {/* ROLE SELECTOR */}

          <div className="role-selector">


            <button
              type="button"
              className={
                role === "student"
                  ? "role-button active"
                  : "role-button"
              }
              onClick={() => setRole("student")}
            >
              👨‍🎓 Student
            </button>


            <button
              type="button"
              className={
                role === "staff"
                  ? "role-button active"
                  : "role-button"
              }
              onClick={() => setRole("staff")}
            >
              👩‍🏫 Staff
            </button>


          </div>



          {/* LOGIN FORM */}

          <form onSubmit={handleLogin}>


            <div className="form-group">

              <label>
                {role === "student"
                  ? "Student Email"
                  : "Staff Email"}
              </label>


              <input
                type="email"
                placeholder={
                  role === "student"
                    ? "student@example.com"
                    : "staff@example.com"
                }
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>



            <div className="form-group">

              <label>
                Password
              </label>


              <div className="password-input">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />


                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>

              </div>

            </div>



            <div className="login-options">


              <label className="remember-me">

                <input
                  type="checkbox"
                />

                <span>
                  Remember me
                </span>

              </label>


              <button
                type="button"
                className="forgot-password"
              >
                Forgot Password?
              </button>


            </div>



            <button
              type="submit"
              className="login-button"
            >

              Login as{" "}

              {role === "student"
                ? "Student"
                : "Staff"}

            </button>


          </form>



          {/* BACK TO HOME */}

          <div className="back-home">

            <button
              onClick={() => navigate("/landing")}
            >
              ← Back to Home
            </button>

          </div>


        </div>

      </div>


    </div>

  );

}


export default Login;