// Import your images
import workoutAppImage from '../images/FirstProject.png';
import musicAppImage from '../images/ComingSoon.png';
import shoppingListAppImage from '../images/ComingSoon.png';

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          <div className="work">
            <img src={workoutAppImage} alt="Workout App" />
            <div className="layer">
              <h3>Workout App</h3>
              <p>This app calculates all the things related to a workout.</p>
              <a href="https://module-two-workout-project.vercel.app/" target="_blank" rel="noreferrer">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src={musicAppImage} alt="Music App" />
            <div className="layer">
              <h3>Music App</h3>
              <p>This app calculates all the things related to music.</p>
              <a href="#"  target="_blank" rel="noreferrer">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src={shoppingListAppImage} alt="Shopping List App" />
            <div className="layer">
              <h3>Shopping List App</h3>
              <p>This app calculates all the things related to shopping.</p>
              <a href="#"  target="_blank" rel="noreferrer">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>

        <a href="#" className="btn">
          See More
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
