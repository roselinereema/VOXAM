import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "./Settings.css";

function Settings() {

  const [settings, setSettings] = useState({
    name: "Staff",
    email: "staff@example.com",
    role: "Administrator",

    voiceAnswering: true,
    speechToText: true,
    textToSpeech: true,

    examNotifications: true,
    submissionNotifications: true
  });


  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value
    });

  };


  const handleSave = (e) => {

    e.preventDefault();

    console.log("Settings:", settings);

    alert("Settings saved successfully!");

  };


  return (

    <Layout>

      <div className="settings-page">

        {/* ==============================
            PAGE HEADER
        ============================== */}

        <div className="settings-header">

          <div>

            <h2>
              Settings
            </h2>

            <p>
              Manage your staff profile and examination system preferences.
            </p>

          </div>

        </div>


        <form
          className="settings-form"
          onSubmit={handleSave}
        >

          {/* ==============================
              STAFF PROFILE
          ============================== */}

          <div className="settings-section">

            <div className="settings-section-header">

              <div className="settings-section-icon">
                👤
              </div>

              <div>

                <h3>
                  Staff Profile
                </h3>

                <p>
                  View and update your staff account information.
                </p>

              </div>

            </div>


            <div className="settings-grid">

              <div className="settings-field">

                <label>
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={settings.name}
                  onChange={handleChange}
                />

              </div>


              <div className="settings-field">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={settings.email}
                  onChange={handleChange}
                />

              </div>


              <div className="settings-field">

                <label>
                  Role
                </label>

                <input
                  type="text"
                  value={settings.role}
                  disabled
                />

              </div>

            </div>

          </div>


          {/* ==============================
              VOICE EXAMINATION SETTINGS
          ============================== */}

          <div className="settings-section">

            <div className="settings-section-header">

              <div className="settings-section-icon">
                🎤
              </div>

              <div>

                <h3>
                  Voice Examination Settings
                </h3>

                <p>
                  Configure voice-related features used during examinations.
                </p>

              </div>

            </div>


            <div className="settings-options">

              {/* VOICE ANSWERING */}

              <label className="settings-option">

                <div>

                  <strong>
                    Voice Answering
                  </strong>

                  <span>
                    Allow students to answer examination questions using their voice.
                  </span>

                </div>

                <input
                  type="checkbox"
                  name="voiceAnswering"
                  checked={settings.voiceAnswering}
                  onChange={handleChange}
                />

              </label>


              {/* SPEECH TO TEXT */}

              <label className="settings-option">

                <div>

                  <strong>
                    Speech-to-Text
                  </strong>

                  <span>
                    Convert student's spoken answers into editable text.
                  </span>

                </div>

                <input
                  type="checkbox"
                  name="speechToText"
                  checked={settings.speechToText}
                  onChange={handleChange}
                />

              </label>


              {/* TEXT TO SPEECH */}

              <label className="settings-option">

                <div>

                  <strong>
                    Text-to-Speech
                  </strong>

                  <span>
                    Read examination questions aloud to students.
                  </span>

                </div>

                <input
                  type="checkbox"
                  name="textToSpeech"
                  checked={settings.textToSpeech}
                  onChange={handleChange}
                />

              </label>

            </div>

          </div>


          {/* ==============================
              NOTIFICATION SETTINGS
          ============================== */}

          <div className="settings-section">

            <div className="settings-section-header">

              <div className="settings-section-icon">
                🔔
              </div>

              <div>

                <h3>
                  Notifications
                </h3>

                <p>
                  Choose which examination notifications you want to receive.
                </p>

              </div>

            </div>


            <div className="settings-options">

              {/* EXAM NOTIFICATIONS */}

              <label className="settings-option">

                <div>

                  <strong>
                    Examination Notifications
                  </strong>

                  <span>
                    Receive notifications about scheduled examinations.
                  </span>

                </div>

                <input
                  type="checkbox"
                  name="examNotifications"
                  checked={settings.examNotifications}
                  onChange={handleChange}
                />

              </label>


              {/* SUBMISSION NOTIFICATIONS */}

              <label className="settings-option">

                <div>

                  <strong>
                    Submission Notifications
                  </strong>

                  <span>
                    Receive notifications when students submit their examinations.
                  </span>

                </div>

                <input
                  type="checkbox"
                  name="submissionNotifications"
                  checked={settings.submissionNotifications}
                  onChange={handleChange}
                />

              </label>

            </div>

          </div>


          {/* ==============================
              PASSWORD
          ============================== */}

          <div className="settings-section">

            <div className="settings-section-header">

              <div className="settings-section-icon">
                🔐
              </div>

              <div>

                <h3>
                  Account Security
                </h3>

                <p>
                  Password management will be connected to backend authentication later.
                </p>

              </div>

            </div>


            <div className="security-placeholder">

              <span>
                🔒
              </span>

              <div>

                <strong>
                  Password Management
                </strong>

                <p>
                  Secure password change functionality will be implemented
                  when the authentication backend is connected.
                </p>

              </div>

            </div>

          </div>


          {/* ==============================
              ACTIONS
          ============================== */}

          <div className="settings-actions">

            <button
              type="submit"
              className="save-settings-button"
            >
              Save Settings
            </button>

          </div>

        </form>

      </div>

    </Layout>

  );
}


export default Settings;