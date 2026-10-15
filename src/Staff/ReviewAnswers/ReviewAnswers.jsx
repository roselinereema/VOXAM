import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "./ReviewAnswers.css";

function ReviewAnswers() {

  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const [marks, setMarks] = useState({
    q1: "",
    q2: "",
    q3: ""
  });

  const [feedback, setFeedback] = useState({
    q1: "",
    q2: "",
    q3: ""
  });


  const submissions = [
    {
      id: "SUB001",
      studentId: "S001",
      studentName: "Arun Kumar",
      exam: "Data Structures - Internal Exam",
      submittedAt: "24 Sep 2026, 10:30 AM",
      fileName: "Arun_Kumar_Data_Structures_Answers.pdf",
      status: "Pending Review"
    },
    {
      id: "SUB002",
      studentId: "S002",
      studentName: "Priya Sharma",
      exam: "Data Structures - Internal Exam",
      submittedAt: "24 Sep 2026, 10:42 AM",
      fileName: "Priya_Sharma_Data_Structures_Answers.pdf",
      status: "Pending Review"
    },
    {
      id: "SUB003",
      studentId: "S003",
      studentName: "Rahul Raj",
      exam: "Data Structures - Internal Exam",
      submittedAt: "24 Sep 2026, 10:55 AM",
      fileName: "Rahul_Raj_Data_Structures_Answers.pdf",
      status: "Reviewed"
    }
  ];


  const handleSelectSubmission = (submission) => {

    setSelectedSubmission(submission);

    setMarks({
      q1: "",
      q2: "",
      q3: ""
    });

    setFeedback({
      q1: "",
      q2: "",
      q3: ""
    });

  };


  const handleMarkChange = (question, value) => {

    setMarks({
      ...marks,
      [question]: value
    });

  };


  const handleFeedbackChange = (question, value) => {

    setFeedback({
      ...feedback,
      [question]: value
    });

  };


  const handleSaveEvaluation = () => {

    console.log("Student:", selectedSubmission);
    console.log("Marks:", marks);
    console.log("Feedback:", feedback);

    alert("Evaluation saved successfully!");

  };


  return (

    <Layout>

      <div className="review-answers-page">

        {/* ==============================
            PAGE HEADER
        ============================== */}

        <div className="review-header">

          <div>

            <h2>
              Review Answers
            </h2>

            <p>
              Review student submissions and assign marks and feedback.
            </p>

          </div>

        </div>


        {/* ==============================
            SUBMISSIONS
        ============================== */}

        <div className="review-submissions-card">

          <div className="review-card-header">

            <div>

              <h3>
                Submitted Answer Papers
              </h3>

              <p>
                Select a student's submission to review their answers.
              </p>

            </div>

          </div>


          <div className="submission-list">

            {submissions.map((submission) => (

              <div
                key={submission.id}
                className={
                  selectedSubmission?.id === submission.id
                    ? "submission-item selected"
                    : "submission-item"
                }
              >

                <div className="submission-icon">
                  📄
                </div>


                <div className="submission-details">

                  <strong>
                    {submission.studentName}
                  </strong>

                  <span>
                    {submission.studentId} • {submission.exam}
                  </span>

                  <small>
                    Submitted: {submission.submittedAt}
                  </small>

                </div>


                <div className="submission-file">

                  <span>
                    {submission.fileName}
                  </span>

                  <button
                    onClick={() =>
                      handleSelectSubmission(submission)
                    }
                  >
                    Review
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* ==============================
            REVIEW SECTION
        ============================== */}

        {selectedSubmission && (

          <div className="answer-review-card">

            <div className="answer-review-header">

              <div>

                <h3>
                  Reviewing: {selectedSubmission.studentName}
                </h3>

                <p>
                  {selectedSubmission.exam}
                </p>

              </div>

              <span className="review-status">
                {selectedSubmission.status}
              </span>

            </div>


            {/* ==============================
                ANSWER PAPER
            ============================== */}

            <div className="answer-paper">

              <div className="answer-paper-header">

                <div>

                  <h4>
                    Student Answer Paper
                  </h4>

                  <p>
                    {selectedSubmission.fileName}
                  </p>

                </div>

                <button
                  className="view-pdf-button"
                  onClick={() =>
                    alert("PDF viewer will be connected here later.")
                  }
                >
                  View PDF
                </button>

              </div>


              {/* QUESTION 1 */}

              <div className="answer-question">

                <div className="answer-question-top">

                  <strong>
                    Q1. Explain the concept of inheritance in Object-Oriented Programming.
                  </strong>

                  <span>
                    Maximum Marks: 10
                  </span>

                </div>


                <div className="student-answer">

                  <label>
                    Student Answer
                  </label>

                  <p>
                    Inheritance is an object-oriented programming concept
                    where a child class can acquire properties and methods
                    from a parent class. It helps in code reuse and allows
                    relationships between classes.
                  </p>

                </div>


                <div className="evaluation-fields">

                  <div className="marks-field">

                    <label>
                      Marks
                    </label>

                    <input
                      type="number"
                      min="0"
                      max="10"
                      placeholder="0 - 10"
                      value={marks.q1}
                      onChange={(e) =>
                        handleMarkChange("q1", e.target.value)
                      }
                    />

                  </div>


                  <div className="feedback-field">

                    <label>
                      Feedback (Optional)
                    </label>

                    <textarea
                      rows="3"
                      placeholder="Enter feedback for the student..."
                      value={feedback.q1}
                      onChange={(e) =>
                        handleFeedbackChange("q1", e.target.value)
                      }
                    />

                  </div>

                </div>

              </div>


              {/* QUESTION 2 */}

              <div className="answer-question">

                <div className="answer-question-top">

                  <strong>
                    Q2. Explain polymorphism with suitable examples.
                  </strong>

                  <span>
                    Maximum Marks: 10
                  </span>

                </div>


                <div className="student-answer">

                  <label>
                    Student Answer
                  </label>

                  <p>
                    Polymorphism allows the same interface or method name
                    to behave differently depending on the object or
                    context in which it is used.
                  </p>

                </div>


                <div className="evaluation-fields">

                  <div className="marks-field">

                    <label>
                      Marks
                    </label>

                    <input
                      type="number"
                      min="0"
                      max="10"
                      placeholder="0 - 10"
                      value={marks.q2}
                      onChange={(e) =>
                        handleMarkChange("q2", e.target.value)
                      }
                    />

                  </div>


                  <div className="feedback-field">

                    <label>
                      Feedback (Optional)
                    </label>

                    <textarea
                      rows="3"
                      placeholder="Enter feedback for the student..."
                      value={feedback.q2}
                      onChange={(e) =>
                        handleFeedbackChange("q2", e.target.value)
                      }
                    />

                  </div>

                </div>

              </div>


              {/* QUESTION 3 */}

              <div className="answer-question">

                <div className="answer-question-top">

                  <strong>
                    Q3. What is encapsulation in Object-Oriented Programming?
                  </strong>

                  <span>
                    Maximum Marks: 5
                  </span>

                </div>


                <div className="student-answer">

                  <label>
                    Student Answer
                  </label>

                  <p>
                    Encapsulation is the process of combining data and
                    methods into a single unit and controlling access to
                    the internal data of an object.
                  </p>

                </div>


                <div className="evaluation-fields">

                  <div className="marks-field">

                    <label>
                      Marks
                    </label>

                    <input
                      type="number"
                      min="0"
                      max="5"
                      placeholder="0 - 5"
                      value={marks.q3}
                      onChange={(e) =>
                        handleMarkChange("q3", e.target.value)
                      }
                    />

                  </div>


                  <div className="feedback-field">

                    <label>
                      Feedback (Optional)
                    </label>

                    <textarea
                      rows="3"
                      placeholder="Enter feedback for the student..."
                      value={feedback.q3}
                      onChange={(e) =>
                        handleFeedbackChange("q3", e.target.value)
                      }
                    />

                  </div>

                </div>

              </div>


              {/* SAVE */}

              <div className="evaluation-summary">

                <div>

                  <strong>
                    Manual Evaluation
                  </strong>

                  <p>
                    Review the student's answers and enter the marks
                    awarded for each question.
                  </p>

                </div>


                <button
                  className="save-evaluation-button"
                  onClick={handleSaveEvaluation}
                >
                  Save Evaluation
                </button>

              </div>

            </div>

          </div>

        )}

      </div>

    </Layout>

  );
}


export default ReviewAnswers;