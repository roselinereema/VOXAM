import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./CreateExam.css";

function CreateExam() {

  const navigate = useNavigate();

  const [examData, setExamData] = useState({
    examName: "",
    subject: "",
    description: "",
    duration: "",
    totalMarks: "",
    numberOfQuestions: "",
    answerMode: "voice-text",
    instructions: ""
  });


  const handleChange = (e) => {

    const { name, value } = e.target;

    setExamData({
      ...examData,
      [name]: value
    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    console.log("Exam Data:", examData);

    alert("Exam created successfully!");

    navigate("/staff/dashboard");

  };


  const handleSaveDraft = () => {

    console.log("Draft Saved:", examData);

    alert("Exam saved as draft.");

  };


  return (

    <Layout>

      <div className="create-exam-page">

        {/* PAGE HEADER */}

        <div className="page-header">

          <div>

            <h2>
              Create New Examination
            </h2>

            <p>
              Create and configure an examination for students.
            </p>

          </div>

        </div>


        <form
          className="create-exam-form"
          onSubmit={handleSubmit}
        >


          {/* BASIC DETAILS */}

          <div className="form-section">

            <h3>
              Basic Examination Details
            </h3>


            <div className="form-grid">

              <div className="form-group">

                <label>
                  Exam Name
                </label>

                <input
                  type="text"
                  name="examName"
                  value={examData.examName}
                  onChange={handleChange}
                  placeholder="Example: Data Structures - Internal Exam"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={examData.subject}
                  onChange={handleChange}
                  placeholder="Example: Data Structures"
                  required
                />

              </div>

            </div>


            <div className="form-group">

              <label>
                Description
              </label>

              <textarea
                name="description"
                value={examData.description}
                onChange={handleChange}
                placeholder="Enter a short description about the examination..."
                rows="4"
              />

            </div>

          </div>


          {/* EXAMINATION CONFIGURATION */}

          <div className="form-section">

            <h3>
              Examination Configuration
            </h3>


            <div className="form-grid">

              <div className="form-group">

                <label>
                  Duration (minutes)
                </label>

                <input
                  type="number"
                  name="duration"
                  value={examData.duration}
                  onChange={handleChange}
                  placeholder="Example: 60"
                  min="1"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Total Marks
                </label>

                <input
                  type="number"
                  name="totalMarks"
                  value={examData.totalMarks}
                  onChange={handleChange}
                  placeholder="Example: 100"
                  min="1"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Number of Questions
                </label>

                <input
                  type="number"
                  name="numberOfQuestions"
                  value={examData.numberOfQuestions}
                  onChange={handleChange}
                  placeholder="Example: 20"
                  min="1"
                  required
                />

              </div>

            </div>

          </div>


          {/* ANSWER MODE */}

          <div className="form-section">

            <h3>
              Answer Mode
            </h3>

            <p className="section-description">
              Select how students can answer questions during the examination.
            </p>


            <div className="answer-options">

              {/* TEXT */}

              <label className="answer-option">

                <input
                  type="radio"
                  name="answerMode"
                  value="text"
                  checked={examData.answerMode === "text"}
                  onChange={handleChange}
                />

                <div>

                  <strong>
                    Text Answer
                  </strong>

                  <span>
                    Students type their answers.
                  </span>

                </div>

              </label>


              {/* VOICE */}

              <label className="answer-option">

                <input
                  type="radio"
                  name="answerMode"
                  value="voice"
                  checked={examData.answerMode === "voice"}
                  onChange={handleChange}
                />

                <div>

                  <strong>
                    Voice Answer
                  </strong>

                  <span>
                    Students answer using their voice.
                  </span>

                </div>

              </label>


              {/* VOICE + TEXT */}

              <label className="answer-option selected">

                <input
                  type="radio"
                  name="answerMode"
                  value="voice-text"
                  checked={examData.answerMode === "voice-text"}
                  onChange={handleChange}
                />

                <div>

                  <strong>
                    Voice + Text
                  </strong>

                  <span>
                    Students can answer by voice and edit the converted text.
                  </span>

                </div>

              </label>

            </div>

          </div>


          {/* INSTRUCTIONS */}

          <div className="form-section">

            <h3>
              Examination Instructions
            </h3>

            <textarea
              name="instructions"
              value={examData.instructions}
              onChange={handleChange}
              placeholder="Enter instructions that students should read before starting the examination..."
              rows="6"
            />

          </div>


          {/* VOICE FEATURES */}

          <div className="form-section">

            <h3>
              Examination Features
            </h3>


            <div className="feature-list">


              <div className="feature-item">

                <span>
                  🔊
                </span>

                <div>

                  <strong>
                    Question Read Aloud
                  </strong>

                  <p>
                    Questions can be read to students using Text-to-Speech.
                  </p>

                </div>

              </div>


              <div className="feature-item">

                <span>
                  🎤
                </span>

                <div>

                  <strong>
                    Speech-to-Text
                  </strong>

                  <p>
                    Student voice responses are converted into text.
                  </p>

                </div>

              </div>


              <div className="feature-item">

                <span>
                  ✏️
                </span>

                <div>

                  <strong>
                    Voice-Based Answer Editing
                  </strong>

                  <p>
                    Students can edit their converted answers using voice commands.
                  </p>

                </div>

              </div>


              <div className="feature-item">

                <span>
                  💾
                </span>

                <div>

                  <strong>
                    Automatic Answer Saving
                  </strong>

                  <p>
                    Student answers are automatically saved during the examination.
                  </p>

                </div>

              </div>


              <div className="feature-item">

                <span>
                  📄
                </span>

                <div>

                  <strong>
                    Answer Paper Generation
                  </strong>

                  <p>
                    The student's final answers are compiled into an answer paper for staff review.
                  </p>

                </div>

              </div>


              <div className="feature-item">

                <span>
                  👨‍🏫
                </span>

                <div>

                  <strong>
                    Staff Review
                  </strong>

                  <p>
                    Staff can review submitted answers and manually assign marks and feedback.
                  </p>

                </div>

              </div>


            </div>

          </div>


          {/* ACTIONS */}

          <div className="form-actions">

            <button
              type="button"
              className="draft-button"
              onClick={handleSaveDraft}
            >
              Save as Draft
            </button>


            <button
              type="submit"
              className="create-button"
            >
              Create Examination
            </button>

          </div>


        </form>

      </div>

    </Layout>

  );

}


export default CreateExam;