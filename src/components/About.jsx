import { useState } from 'react';
import MainPic from '../images/MainPic.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={MainPic} alt="Main Pic" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              I am a programmer with a passion for coding. I am skilled in HTML, CSS, and JavaScript, and I am currently learning React. I enjoy crafting solutions to real-world problems through code. When not programming, you will find me diving into new tech and building exciting new projects.
            </p>

            <div className="tab-titles">
              <div className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => openTab('skills')}>
                Skills
              </div>
              <div className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => openTab('experience')}>
                Experience
              </div>
              <div className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => openTab('education')}>
                Education
              </div>
            </div>

            <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
              <ul>
                <li>
                  <span>UX/UI</span>
                  <br /> Designing Web/App Interfaces
                </li>
                <li>
                  <span>Web Development</span>
                  <br /> Web App Development
                </li>
                <li>
                  <span>App Development</span>
                  <br /> Building Android/IOS apps
                </li>
              </ul>
            </div>

            <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
              <ul>
                <li>
                  <span>Front-End Developer</span>
                  <br /> WebTech Pro, 2017-2021
                </li>
                <li>
                  <span>Full-Stack Developer</span>
                  <br /> Coding Bachelors Inc., 2023-2027
                </li>
                <li>
                  <span>Student @ BVT</span>
                  <br /> Bay Valley Tech, 2023-2014
                </li>
              </ul>
            </div>

            <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
              <ul>
                <li>
                  <span>Bachelor of Science in Computer Science</span>
                  <br /> University of Imaginary Technology, 2023-2027
                </li>
                <li>
                  <span>Master of Business Administration</span>
                  <br /> Fictional Business School, 2025-2027
                </li>
                <li>
                  <span>Online Courses</span>
                  <br /> Various online courses on coding and design, 2023-2023
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
