import React from "react";
import mmkresume from "../assets/CV_Muhammad_Waseem.pdf";

const Resume = () => {
  return (
    <div>
      <header>
        <h2 class="h2 article-title">Resume</h2>
      </header>
      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 class="h3">Experience</h3>
        </div>

        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Data Scientist</h4>

            <span>2024 — Present </span>

            <p class="timeline-text">PetaStorm Inc, Pakistan.</p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Teaching Assistant</h4>

            <span>2022 — 2024</span>

            <p class="timeline-text">Mentored students in Python and machine learning while supporting research through data analysis and model implementation.
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Full Stack Developer</h4>

            <span>2018 — 2022</span>

            <p class="timeline-text">ExamBites</p>
          </li>
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Front End Developer</h4>

            <span>2015 — 2018</span>

            <p class="timeline-text">Haddocksoft</p>
          </li>
        </ol>
      </section>

      <section class="skill">
        <h3 class="h3 skills-title">Skills & Interests</h3>

        <ul class="skills-list content-card">
          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Research Interest</h5>
              <data value="80">Machine learning, Deep learning, Computer vision, Biomedical Image Analysis.</data>
            </div>

            <div class="skill-progress-bg">
              <div
                class="skill-progress-fill"
                style={{
                  width: "100%",
                }}
              ></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Coding</h5>
              <data value="70">Python, C++</data>
            </div>

            <div class="skill-progress-bg">
              <div
                class="skill-progress-fill"
                style={{
                  width: "90%",
                }}
              ></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">ML-DL Tools</h5>
              <data value="90">Keras, TensorFlow, Pandas, NumPy, Matplotlib, PyTorch, MatLab ...</data>
            </div>

            <div class="skill-progress-bg">
              <div
                class="skill-progress-fill"
                style={{
                  width: "80%",
                }}
              ></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Datascience Tools</h5>
              <data value="50">SQL, Tableau, Excel, Hugging Face ... </data>
            </div>

            <div class="skill-progress-bg">
              <div
                class="skill-progress-fill"
                style={{
                  width: "70%",
                }}
              ></div>
            </div>
          </li>
          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Databases</h5>
              <data value="50">Mysql, sqlite, BigQuery ...</data>
            </div>

            <div class="skill-progress-bg">
              <div
                class="skill-progress-fill"
                style={{
                  width: "60%",
                }}
              ></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Web Dev</h5>
              <data value="50">Html, css, JavaScript ...</data>
            </div>

            <div class="skill-progress-bg">
              <div
                class="skill-progress-fill"
                style={{
                  width: "50%",
                }}
              ></div>
            </div>
          </li>
        </ul>
      </section>
      <section class="timeline" style={{ marginTop: "50px" }}>
        {/* <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 class="h3">Selected Projects</h3>
        </div>

        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Real Time 2D Pose Estimation For Robot Parts Picking</h4>

            <span>2023</span>

            <p class="timeline-text">Computer vision project for robotic automation using Python and OpenCV.</p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Dynamic Object Detection using User Data</h4>

            <span>2021</span>

            <p class="timeline-text">AI-based web development project for object detection developed using JavaScript, Python, and TensorFlow.js</p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Android Application for Lunar Date Identiﬁcation</h4>

            <span>2020</span>

            <p class="timeline-text">AI-based android project for identifying lunar dates developed using Java, Python, and TensorFlowLite</p>
          </li>
        </ol> */}
      </section>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 class="h3">Conference Attendance</h3>
        </div>

        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Frontiers of Information Technology(FIT), Pakistan</h4>

            <span>2023</span>

            <p class="timeline-text">Pakistan</p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">International Conference on Open Source Systems and Technologies (ICOSST), Pakistan</h4>

            <span>2024</span>

            <p class="timeline-text">Pakistan</p>
          </li>

          {/* <li class="timeline-item">
            <h4 class="h4 timeline-item-title">International Conference on Big Data, IoT, and Machine Learning</h4>

            <span>2021</span>

            <p class="timeline-text">Bangladesh</p>
          </li> */}
          {/* <li class="timeline-item">
            <h4 class="h4 timeline-item-title">International Conference on Science & Contemporary Technologies (ICSCT)</h4>

            <span>2021</span>

            <p class="timeline-text">Bangladesh</p>
          </li> */}
          {/* <li class="timeline-item">
            <h4 class="h4 timeline-item-title"> IEEE 17th International Conference on Smart Communities: Improving Quality of Life Using ICT, IoT and AI (HONET)</h4>

            <span>2020</span>

            <p class="timeline-text">United States of America</p>
          </li> */}
        </ol>
      </section>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 class="h3">Management and Leadership Skills</h3>
        </div>

        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Menotor, The Citizen Foundation</h4>

            <span>2020 - Present</span>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Mentor, Computer Science Society, COMSATS Unversity Islamabad</h4>

            <span>2022 - Present</span>
          </li>

          {/* <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Member Secretary. Research and Publication Committee, Dept. of CSE, BUBT</h4>

            <span>2021 - 2022</span>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Advisor. Competitive Programming Committee, Dept. of CSE, BUBT</h4>

            <span>2021 - 2022</span>
          </li> */}
        </ol>
        <form action={mmkresume} method="get" target="_blank">
          <button href={mmkresume} class="btn btn-download-resume" style={{ marginTop: "50px" }}>
            Download Resume
          </button>
        </form>
      </section>
    </div>
  );
};

export default Resume;
