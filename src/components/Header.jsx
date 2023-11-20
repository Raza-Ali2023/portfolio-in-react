// Header.jsx
import profileImg from '../images/profile.jpg';

const Header = () => {
  const openMenu = () => {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.style.right = "0";
  }

  const closeMenu = () => {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.style.right = "-200px";
  }

  const handleLinkClick = (target) => {
    closeMenu();  // Close the menu when a link is clicked
    document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div id="header">
      <div className="container">
        <nav>
          <h1 className="MyLogoh1">A <span className="MyLogo">Raza</span></h1>
          <ul id="sideMenu">
            <li><a onClick={() => handleLinkClick('header')}>Home</a></li>
            <li><a onClick={() => handleLinkClick('about')}>About</a></li>
            <li><a onClick={() => handleLinkClick('services')}>Services</a></li>
            <li><a onClick={() => handleLinkClick('portfolio')}>Portfolio</a></li>
            <li><a onClick={() => handleLinkClick('contact')}>Contact</a></li>
            {/* Add the x-mark to close the side menu */}
            <i className="fas fa-solid fa-xmark" onClick={closeMenu}></i>
          </ul>
          <i className="fas fa-solid fa-bars" onClick={openMenu}></i>
        </nav>
        <div className="headerDIv">
          <div className="header-text">
            <p>Frontend Developer</p>
            <h1>Hi, I am Ali <br /><span>Raza</span> From Thailand</h1>
          </div>
          <div className="header-image">
            <img src={profileImg} alt="My Pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
