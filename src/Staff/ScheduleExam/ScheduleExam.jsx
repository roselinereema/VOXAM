import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "./ScheduleExam.css";

function ScheduleExam() {

  const [scheduleData, setScheduleData] = useState({
    exam: "",
    date: "",
    startTime: ""
  });


  const handleChange = (e) => {

    const { name, value } = e.target;

    setScheduleData({
      ...scheduleData,
      [name]: value
    });

  };


  const handleSchedule = (e) => {

    e.preventDefault();

    if (!scheduleData.exam) {
      alert("Please select an examination.");
      return;
    }

    console.log("Schedule Data:", scheduleData);

    alert("Examination scheduled successfully!");

  };


  const handleSaveDraft = () => {

    console.log("Schedule Draft:", scheduleData);

    alert("Schedule saved as draft.");

  };


  return (

    <Layout>

      <div className="schedule-exam-page">


        {/* PAGE HEADER */}

        <div className="schedule-page-header">

          <div>

            <h2>
              Schedule Examination
            </h2>

            <p>
              Set the date and time when students can attend the examination.
            </p>

          </div>

        </div>


        <form
          className="schedule-form"
          onSubmit={handleSchedule}
        >


          {/* EXAMINATION DETAILS */}

          <div className="schedule-section">

            <h3>
              Examination Details
            </h3>

            <p className="schedule-description">
              Select the examination that you want to schedule.
            </p>


            <div className="schedule-form-group">

              <label>
                Examination
              </label>

              <select
                name="exam"
                value={scheduleData.exam}
                onChange={handleChange}
                required
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


          {/* EXAMINATION SCHEDULE */}

          <div className="schedule-section">

            <h3>
              Examination Schedule
            </h3>

            <p className="schedule-description">
              Configure when the examination will be available to students.
            </p>


            <div className="schedule-form-grid">


              <div className="schedule-form-group">

                <label>
                  Exam Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={scheduleData.date}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="schedule-form-group">

                <label>
                  Start Time
                </label>

                <input
                  type="time"
                  name="startTime"
                  value={scheduleData.startTime}
                  onChange={handleChange}
                  required
                />

              </div>


            </div>

          </div>


          {/* SCHEDULE SUMMARY */}

          <div className="schedule-summary">

            <div className="summary-icon">
              📅
            </div>

            <div>

              <strong>
                Examination Schedule
              </strong>

              <p>
                The examination details and duration are already configured
                during exam creation. Once scheduled, the examination will
                become available to eligible students according to the
                configured date and time.
              </p>

            </div>

          </div>


          {/* ACTIONS */}

          <div className="schedule-actions">

            <button
              type="button"
              className="schedule-draft-button"
              onClick={handleSaveDraft}
            >
              Save as Draft
            </button>


            <button
              type="submit"
              className="schedule-button"
            >
              Schedule Examination
            </button>

          </div>


        </form>

      </div>

    </Layout>

  );

}


export default ScheduleExam;