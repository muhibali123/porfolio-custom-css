import "../contact/contact.css"


export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="section-container">
        {/* Section Heading */}
        <div className="section-heading">
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">Contact me</h2>
          <p className="section-description">
          Have a Project in Mind? Reach Out!
          </p>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <div className="form-wrapper">
            <div className="form-inner">
              <form action="#" method="POST" className="contact-form">
                <div className="form-grid">
                  {/* First Name */}
                  <div className="form-group">
                    <label htmlFor="first-name">First name</label>
                    <div className="input-container">
                      <input
                        type="text"
                        id="first-name"
                        placeholder="Enter your first name"
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="form-group">
                    <label htmlFor="last-name">Last name</label>
                    <div className="input-container">
                      <input
                        type="text"
                        id="last-name"
                        placeholder="Enter your last name"
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <div className="input-container">
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your Email"
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="form-group">
                    <label htmlFor="phone">Phone number</label>
                    <div className="input-container">
                      <input
                        type="text"
                        id="phone"
                        placeholder="Enter your Phone number"
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Topic */}
                  <div className="form-group full-width">
                    <label htmlFor="topic">Choose a topic</label>
                    <div className="select-container">
                      <select id="topic" className="form-select">
                        <option value="select one...">Select one...</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Support</option>
                        <option value="feedback">Feedback</option>
                      </select>
                      <div className="select-arrow">
                        <svg
                          className="dropdown-arrow"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-group full-width">
                    <label htmlFor="message">Message</label>
                    <div className="input-container">
                      <textarea
                        id="message"
                        placeholder="Type your message..."
                        className="form-textarea"
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="checkbox-group full-width">
                    <input type="checkbox" id="terms" name="terms" />
                    <label htmlFor="terms">I accept the terms</label>
                  </div>

                  {/* Submit Button */}
                  <div className="form-submit full-width">
                    <button type="submit" className="submit-button">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
