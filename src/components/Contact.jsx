import React, { useState } from 'react';

const Contact = () => {
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); // Set loading state when form is submitted

      const form = e.target;
      const formData = new FormData(form);
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbw3DVtg0Rfre8AdJji-4q40An-S_mrooWuCi8b6E148A2jWw0kxmyrVJKdgMOZnVog4Eg/exec',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.ok) {
        setMsg('Message Sent Successfully');
        setTimeout(() => {
          setMsg('');
        }, 4000);
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error!', error.message);
      setMsg('Error submitting the form. Please try again.'); // Set an error message
    } finally {
      setLoading(false); // Reset loading state after form submission (whether successful or not)
    }
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>
              <i className="fa-regular fa-paper-plane"></i> ali.raza.bvt2023@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> 0633491825
            </p>
            <div className="social-icons">
              <a href="https://web.facebook.com/profile.php?id=100068508801975">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://github.com/Raza-Ali2023">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.instagram.com/ar_raza180/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/ali-raza-aab099279/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <a href="/CV.pdf" download className="btn btn2">
              Download CV
            </a>
          </div>
          <div className="contact-right">
            <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your Email" required />
              <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
              <button type="submit" className="btn btn2" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
            <span id="msg">{msg}</span>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright ©️ Ali. Made with <i className="fa-solid fa-heart"></i> by Ali Raza
        </p>
      </div>
    </div>
  );
};

export default Contact;
