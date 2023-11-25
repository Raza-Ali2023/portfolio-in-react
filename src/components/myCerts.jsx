import MyHTMLcert from '../images/MyHTMLcert.png';
import MyCSScert from '../images/MyCSScert.png';
import MyJScert from '../images/MyJScert.png';

const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Certificates</h1>
        <div className="certificates-container">
          <div className="certificate">
            <img src={MyHTMLcert} alt="HTML Certificate" className="certificate-image" />
          </div>
          <div className="certificate">
            <img src={MyCSScert} alt="CSS Certificate" className="certificate-image" />
          </div>
          <div className="certificate">
            <img src={MyJScert} alt="JavaScript Certificate" className="certificate-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
