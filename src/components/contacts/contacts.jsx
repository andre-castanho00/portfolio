function Contacts() {
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
              <h3>Email</h3>
              <a href="mailto:john@developer.com">john@developer.com</a>
            </div>
            <div className="contact-item">
              <h3>LinkedIn</h3>
              <a href="https://linkedin.com/in/johndeveloper">
                linkedin.com/in/johndeveloper
              </a>
            </div>
            <div className="contact-item">
              <h3>GitHub</h3>
              <a href="https://github.com/johndeveloper">
                github.com/johndeveloper
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
