import Layout from "../../components/Layout/Layout";
import "./QuestionProcessing.css";

function QuestionProcessing() {
  return (
    <Layout>
      <div className="question-processing-page">

        {/* PAGE HEADER */}
        <div className="question-processing-header">
          <div>
            <h2>Question Processing</h2>
            <p>
              Preview the questions extracted from the uploaded question paper.
            </p>
          </div>
        </div>

        {/* EXAM DETAILS */}
        <div className="processing-card">

          <div className="processing-card-header">
            <div>
              <h3>Data Structures - Internal Exam</h3>
              <p>Uploaded Question Paper</p>
            </div>

            <span className="processing-status">
              ✓ Uploaded
            </span>
          </div>

          <div className="file-details">
            <span className="file-icon">📄</span>

            <div>
              <strong>Data_Structures_Internal.pdf</strong>
              <p>Question Paper • PDF</p>
            </div>
          </div>

        </div>

        {/* PROCESSING STATUS */}
        <div className="processing-info">

          <div className="processing-info-icon">
            ✓
          </div>

          <div>
            <strong>Question paper uploaded successfully</strong>

            <p>
              The questions will be extracted and processed by the system.
              The extracted questions will be used during the student examination.
            </p>
          </div>

        </div>

        {/* EXTRACTED QUESTIONS */}
        <div className="questions-preview-card">

          <div className="questions-preview-header">
            <div>
              <h3>Extracted Questions</h3>
              <p>Preview of questions identified from the question paper.</p>
            </div>

            <span className="question-count">
              3 Questions
            </span>
          </div>

          {/* QUESTION 1 */}
          <div className="preview-question">

            <div className="question-number">
              Q1
            </div>

            <div className="question-content">
              <h4>
                Explain the concept of inheritance in Object-Oriented Programming.
              </h4>

              <div className="question-meta">
                <span>Marks: 10</span>
              </div>
            </div>

          </div>

          {/* QUESTION 2 */}
          <div className="preview-question">

            <div className="question-number">
              Q2
            </div>

            <div className="question-content">
              <h4>
                Explain polymorphism with suitable examples.
              </h4>

              <div className="question-meta">
                <span>Marks: 10</span>
              </div>
            </div>

          </div>

          {/* QUESTION 3 */}
          <div className="preview-question">

            <div className="question-number">
              Q3
            </div>

            <div className="question-content">
              <h4>
                What is encapsulation in Object-Oriented Programming?
              </h4>

              <div className="question-meta">
                <span>Marks: 5</span>
              </div>
            </div>

          </div>

        </div>

        {/* NEXT STEP */}
        <div className="processing-next-info">

          <span>➡️</span>

          <div>
            <strong>Next Step</strong>

            <p>
              After question processing, the examination can be scheduled
              for students.
            </p>
          </div>

        </div>

      </div>
    </Layout>
  );
}

export default QuestionProcessing;