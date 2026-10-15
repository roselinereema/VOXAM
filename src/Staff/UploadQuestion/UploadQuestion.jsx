import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "./UploadQuestion.css";

function UploadQuestion() {
  const [selectedExam, setSelectedExam] = useState("");
  const [questionFile, setQuestionFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setQuestionFile(file);
    }
  };

  const handleUpload = () => {
    if (!selectedExam) {
      alert("Please select an examination.");
      return;
    }

    if (!questionFile) {
      alert("Please select a question paper.");
      return;
    }

    console.log("Selected Exam:", selectedExam);
    console.log("Question Paper:", questionFile);

    alert("Question paper uploaded successfully!");
  };

  return (
    <Layout>
      <div className="upload-question-page">

        {/* PAGE HEADER */}
        <div className="page-header">
          <div>
            <h2>Upload Question Paper</h2>
            <p>
              Upload the question paper for an examination.
            </p>
          </div>
        </div>

        {/* SELECT EXAM */}
        <div className="form-section">
          <h3>Select Examination</h3>

          <div className="form-group">
            <label>Examination</label>

            <select
              value={selectedExam}
              onChange={(e) => setSelectedExam(e.target.value)}
            >
              <option value="">
                Select an examination
              </option>

              <option value="data-structures">
                Data Structures - Internal Exam
              </option>

              <option value="database">
                Database Management Systems
              </option>

              <option value="computer-networks">
                Computer Networks
              </option>
            </select>
          </div>
        </div>

        {/* UPLOAD QUESTION PAPER */}
        <div className="form-section">
          <h3>Question Paper</h3>

          <p className="section-description">
            Upload the question paper in PDF format.
            The questions will be processed by the system later.
          </p>

          <div className="upload-box">

            <div className="upload-icon">
              📄
            </div>

            <h4>
              Upload Question Paper
            </h4>

            <p>
              Select a PDF file containing the examination questions.
            </p>

            {/* FILE SELECT */}
            <label className="file-button">
              Choose PDF

              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
              />
            </label>

            {/* SELECTED FILE */}
            {questionFile && (
              <div className="selected-file">
                <strong>Selected File:</strong>

                <span>
                  {questionFile.name}
                </span>
              </div>
            )}

            {/* UPLOAD BUTTON */}
            <button
              className="upload-button"
              onClick={handleUpload}
            >
              Upload Question Paper
            </button>

          </div>
        </div>

        {/* FUTURE PROCESSING NOTE */}
        <div className="upload-info-box">
          <span>ℹ️</span>

          <div>
            <strong>What happens after upload?</strong>

            <p>
              The uploaded question paper will be processed
              and the questions will be available in the
              Question Processing section.
            </p>
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default UploadQuestion;