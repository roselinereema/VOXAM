import { useNavigate } from "react-router-dom";
import "./Landing.css";

function Landing() {

  const navigate = useNavigate();

  return (

    <div className="landing-page">


      {/* ================= HEADER ================= */}

      <header className="landing-header">

        <div className="landing-logo">

          <div className="logo-icon">
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


        <nav className="landing-nav">

          <button>
            Home
          </button>

          <button>
            About
          </button>

          <button
            className="login-nav-button"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

        </nav>

      </header>



      {/* ================= HERO SECTION ================= */}

      <section className="hero">


        <div className="hero-text">


          <div className="hero-tag">
            AI • VOICE • ACCESSIBLE • SECURE
          </div>


          <h2>
            Accessible Examinations
            <br />
            for a Smarter Future
          </h2>


          <p>
            An AI-powered examination platform that enables students
            to listen to questions, answer using their voice, convert
            speech into text, edit their answers using voice commands,
            and submit their completed answer paper for staff review.
          </p>


          <div className="hero-buttons">

            <button
              className="secondary-button"
              onClick={() => {
                window.scrollTo({
                  top: 500,
                  behavior: "smooth"
                });
              }}
            >
              Learn More
            </button>

          </div>

        </div>



        {/* ================= HERO ILLUSTRATION ================= */}

        <div className="hero-visual">


          <div className="main-circle">
            🎧
          </div>


          <div className="floating-card card-top">

            🔊

            <span>
              Listen to Questions
            </span>

          </div>


          <div className="floating-card card-right">

            🎤

            <span>
              Speak Your Answer
            </span>

          </div>


          <div className="floating-card card-bottom">

            👨‍🏫

            <span>
              Staff Review
            </span>

          </div>


        </div>

      </section>



      {/* ================= FEATURES ================= */}

      <section className="features">


        <div className="section-heading">

          <h2>
            One Platform. Smarter Assessments.
          </h2>

          <p>
            Designed to make digital examinations
            accessible, voice-enabled and secure.
          </p>

        </div>



        <div className="feature-grid">


          {/* FEATURE 1 */}

          <div className="feature-card">

            <div className="feature-icon">
              🔊
            </div>

            <h3>
              Listen to Questions
            </h3>

            <p>
              Questions can be read aloud using
              text-to-speech technology.
            </p>

          </div>



          {/* FEATURE 2 */}

          <div className="feature-card">

            <div className="feature-icon">
              🎤
            </div>

            <h3>
              Voice-Based Answers
            </h3>

            <p>
              Students can answer examination questions
              using their voice.
            </p>

          </div>



          {/* FEATURE 3 */}

          <div className="feature-card">

            <div className="feature-icon">
              ✏️
            </div>

            <h3>
              Voice Answer Editing
            </h3>

            <p>
              Students can review and edit their
              transcribed answers using voice commands.
            </p>

          </div>



          {/* FEATURE 4 */}

          <div className="feature-card">

            <div className="feature-icon">
              👨‍🏫
            </div>

            <h3>
              Staff Answer Review
            </h3>

            <p>
              Staff can review submitted answers
              and manually assign marks and feedback.
            </p>

          </div>


        </div>

      </section>



      {/* ================= FOOTER ================= */}

      <footer className="landing-footer">

        <div>

          <strong>
            AI Voice Examination System
          </strong>

        </div>

        <p>
          Voice-Enabled • Accessible • Secure
        </p>

      </footer>


    </div>

  );

}


export default Landing;