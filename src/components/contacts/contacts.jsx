import "./contacts.css";
import { GitHub, Linkedin, Email } from "../icons";

/**
 * @function Contacts
 * @description A component that renders a simple contact section with some
 * basic information and links to my email, LinkedIn, and GitHub profiles.
 * @returns {object} A JSX element representing the Contact section of the
 * website.
 */
function Contacts({ isDarkMode }) {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p>
            I'm always interested in new opportunities and exciting projects.
            Whether you have a project in mind or just want to connect, feel
            free to reach out!
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <Email />
                <h3>Email</h3>
              </div>
              <a target="_blank" rel="noopener noreferrer" href="mailto:andrecastanho25@gmail.com">
                andrecastanho25@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <Linkedin />
                <h3>LinkedIn</h3>
              </div>
              <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/andre-castanhoo/">
                linkedin.com/in/andre-castanhoo/
              </a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <GitHub color={isDarkMode ? "#ffffff" : "#000000"} />
                <h3>GitHub</h3>
              </div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/andre-castanho00">
                github.com/andre-castanho00
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
